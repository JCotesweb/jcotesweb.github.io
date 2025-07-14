// Este script centra verticalmente cada sección al hacer clic en los enlaces del menú
document.querySelectorAll('a.scroll-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const sectionHeight = targetSection.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calcula la posición para centrar la sección en la pantalla
      const scrollPosition = targetSection.offsetTop - (viewportHeight / 2) + (sectionHeight / 2);

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  });
});