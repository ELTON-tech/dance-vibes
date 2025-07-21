console.log("Afro Dance Vibes site loaded.");


window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-slide').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

window.dispatchEvent(new Event('scroll'));
