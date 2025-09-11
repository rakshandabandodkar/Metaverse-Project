
// small scripts for small interactions
document.addEventListener('DOMContentLoaded', function() {
  // set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // stagger hero cards initial opacity with slight transform
  const cards = document.querySelectorAll('.hero-card');
  cards.forEach((c, i) => {
    c.style.opacity = 0;
    c.style.transform = `translateY(20px)`;
    setTimeout(() => {
      c.style.transition = 'opacity .6s ease, transform .6s cubic-bezier(.2,.8,.2,1)';
      c.style.opacity = 1;
      c.style.transform = 'translateY(0)';
    }, 200 + i * 150);
  });
});

