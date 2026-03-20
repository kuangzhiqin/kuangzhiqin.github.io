const revealItems = document.querySelectorAll('.reveal');
const pointerAura = document.querySelector('.pointer-aura');
const clock = document.getElementById('clock');
const hero = document.querySelector('.hero');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const delay = Number(entry.target.dataset.delay || 0);
      window.setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay * 1000);

      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

if (pointerAura && window.matchMedia('(pointer: fine)').matches) {
  const updateAura = (event) => {
    pointerAura.style.opacity = '1';
    pointerAura.style.transform = `translate(${event.clientX - 140}px, ${event.clientY - 140}px)`;
  };

  window.addEventListener('mousemove', updateAura);
  window.addEventListener('mouseleave', () => {
    pointerAura.style.opacity = '0';
  });
}

if (hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;

    hero.style.transform = `perspective(1400px) rotateX(${-y * 0.18}deg) rotateY(${x * 0.18}deg)`;
  });

  window.addEventListener('mouseleave', () => {
    hero.style.transform = '';
  });
}

const updateClock = () => {
  if (!clock) return;

  const now = new Date();
  clock.textContent = now.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
};

updateClock();
window.setInterval(updateClock, 1000);
