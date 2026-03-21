const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');
const localTime = document.getElementById('local-time');

const updateLocalTime = () => {
  if (!localTime) return;

  const now = new Date();
  localTime.textContent = now.toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

updateLocalTime();
window.setInterval(updateLocalTime, 30000);

if (!prefersReducedMotion) {
  window.requestAnimationFrame(() => {
    document.body.classList.add('is-ready');
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const delay = Number(entry.target.dataset.delay || 0);
        window.setTimeout(() => {
          entry.target.classList.add('reveal-visible');
        }, delay * 1000);

        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -8% 0px',
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));

  const setDrift = (x, y) => {
    document.documentElement.style.setProperty('--drift-x', `${x}px`);
    document.documentElement.style.setProperty('--drift-y', `${y}px`);
  };

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let scrollShift = 0;

  window.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 24;
    const y = (event.clientY / window.innerHeight - 0.5) * 20;
    targetX = x;
    targetY = y;
  });

  window.addEventListener('scroll', () => {
    scrollShift = Math.min(window.scrollY * 0.025, 16);
  }, { passive: true });

  const animateDrift = () => {
    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.06;
    setDrift(currentX, currentY + scrollShift);
    window.requestAnimationFrame(animateDrift);
  };

  animateDrift();
} else {
  revealItems.forEach((item) => item.classList.add('reveal-visible'));
}
