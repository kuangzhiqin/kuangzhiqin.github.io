const revealItems = document.querySelectorAll('.reveal');
const clock = document.getElementById('clock');

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
    threshold: 0.16,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

const updateClock = () => {
  if (!clock) return;

  const now = new Date();
  clock.textContent = now.toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

updateClock();
window.setInterval(updateClock, 1000 * 30);
