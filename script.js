// Rolagem suave para os links do menu (fallback para navegadores
// que não respeitam o scroll-behavior:smooth do CSS)
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});