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

if (prefersReducedMotion) {
  revealItems.forEach((item) => item.classList.add('reveal-visible'));
} else {
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
      rootMargin: '0px 0px -10% 0px',
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));

  window.requestAnimationFrame(() => {
    const hero = document.querySelector('.hero.reveal');
    if (hero) {
      hero.classList.add('reveal-visible');
      revealObserver.unobserve(hero);
    }
  });
}
