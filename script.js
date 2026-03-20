const revealItems = document.querySelectorAll('.reveal');
const cursorGlow = document.querySelector('.cursor-glow');
const clock = document.getElementById('clock');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = Number(entry.target.dataset.delay || 0);
        window.setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay * 1000);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
  const moveGlow = (event) => {
    cursorGlow.style.opacity = '1';
    cursorGlow.style.transform = `translate(${event.clientX - 120}px, ${event.clientY - 120}px)`;
  };

  window.addEventListener('mousemove', moveGlow);
  window.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
  });
}

const updateClock = () => {
  if (!clock) return;
  const now = new Date();
  clock.textContent = now.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
};

updateClock();
window.setInterval(updateClock, 1000);
