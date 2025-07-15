document.querySelectorAll('a.scroll-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile) {
        targetSection.scrollIntoView({
          behavior: 'auto',
          block: 'start'
        });
      } else {
        const sectionHeight = targetSection.offsetHeight;
        const viewportHeight = window.innerHeight;

        const scrollPosition = targetSection.offsetTop - (viewportHeight / 2) + (sectionHeight / 2);

        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});