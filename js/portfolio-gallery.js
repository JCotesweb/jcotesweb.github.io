

// Array de datos de los PROYECTOS
const projectsData = [
  {
    src: 'img/tabla-periodica.png',
    title: 'Tabla Periódica Interactiva',
    description: 'Una aplicación web moderna que combina una tabla periódica completamente interactiva con un sistema de quiz gamificado. Perfecta para estudiantes, profesores y entusiastas de la química.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    demoLink: 'projects/tabla-periodica/index.html',
    githubLink: 'https://github.com/usuario/proyecto1',
    features: ['Animaciones CSS','Blog', 'Educación', 'Diseño responsivo']
  },
  {
    src: 'img/kard.png',
    title: 'Kard',
    description: 'Aplicación web minimalista para organizar tareas de forma visual mediante tableros con columnas y tarjetas. Permite crear, mover y eliminar tarjetas entre diferentes estados (Por hacer, En progreso, Completado) con funcionalidad drag & drop y persistencia automática en el navegador',
    technologies: ['HTML5', 'CSS3', 'Tailwind', 'JavaScript'],
    demoLink: 'projects/kard/index.html',
    githubLink: 'https://github.com/usuario/proyecto2',
    features: ['Diseño responsivo', 'Listas', 'Proyectos', 'Organización']
  },
  {
    src: 'img/neon-arcade.png',
    title: 'Neon Arcade',
    description: 'Es una experiencia de gaming retro-futurista inspirada en los arcades de los años 80-90, con efectos de neón vibrantes.Incluye tres juegos clásicos completamente funcionales (Tres en Raya, Piedra Papel Tijera y Memorama) con puntuaciones, efectos visuales espectaculares, y un interruptor único para encender/apagar todos los efectos neón de la página.',
    technologies: ['JavaScript', 'CSS3', 'MySQL', 'Bootstrap', 'jQuery'],
    demoLink: 'https://ejemplo.com/demo3',
    githubLink: 'https://github.com/usuario/proyecto3',
    features: ['Diseño responsivo', 'Juegos', 'Retro', 'Animaciones']
  },
  {
    src: 'img/cineradar.png',
    title: 'CineRadar',
    description: 'CineRadar es una app web minimalista que recomienda películas según tus géneros favoritos usando la API de TMDb. ',
    technologies: ['HTML5', 'CSS3','JavaScript', 'Tailwind'],
    demoLink: 'projects/cine-radar/index.html',
    githubLink: 'https://github.com/usuario/proyecto4',
    features: ['Darkmode', 'Diseño responsivo']
  }
];

// Array de datos de las PÁGINAS WEB
const websitesData = [
  {
    src: 'img/Edustudio.png',
    title: 'EduStudio',
    description: 'Sitio web original y minimalista orientado a blog sobre educación',
    technologies: ['HTML5', 'CSS3','JavaScript'],
    demoLink: 'webs/edustudio/index.html',
    githubLink: 'https://github.com/usuario/portfolio',
    features: ['Diseño minimalista', 'Original']
  },
  {
    src: 'img/neonvania.png',
    title: 'NeonVania',
    description: 'Sitio web promocional de un videojuego indie en desarrollo',
    technologies: ['HTML', 'CSS3', 'JavaScript'],
    demoLink: 'webs/neonvania/index.html',
    githubLink: 'https://github.com/usuario/restaurante',
    features: ['Responsive', 'Retro', 'Original']
  },
  {
    src: 'img/solsticio.png',
    title: 'Restaurante Solsticio',
    description: 'Sitio web elegante y minimalista para el restaurante mediterráneo "Solsticio", ubicado en Vélez-Blanco, Almería. Diseño completamente responsive con paleta de colores azul marino, gris carbón y blanco, destacando la terraza con vistas panorámicas y los ingredientes locales de la comarca de Los Vélez.',
    technologies: ['HTML5', 'Bootstrap', 'jQuery', 'PHP', 'MySQL'],
    demoLink: 'webs/solsticio/index.html',
    githubLink: 'https://github.com/usuario/blog',
    features: ['Responsive', 'Elegante', 'Minimalista']
  },
  {
    src: 'img/bodega.png',
    title: 'Bodega Los Vélez',
    description: 'Sitio web elegante y moderno para una bodega artesanal de Almería que combina tradición vitivinícola con diseño contemporáneo.',
    technologies: ['HTML5', 'CSS3' , 'JavaScript'],
    demoLink: 'webs/bodega-losvelez/index.html',
    githubLink: 'https://github.com/usuario/agencia',
    features: ['Animaciones', 'Elegante', 'Minimalista']
  }
];

// Función para generar el contenido del carrusel
function generateCarouselContent(dataArray, carouselInner, selectedIndex) {
  // Limpiar el contenido anterior del carrusel
  carouselInner.innerHTML = '';

  // Generar los ítems del carrusel
  dataArray.forEach((item, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === parseInt(selectedIndex)) {
      carouselItem.classList.add('active');
    }

    const techTags = item.technologies.map(tech => 
      `<span class="tech-tag">${tech}</span>`
    ).join('');

    const featuresList = item.features.map(feature => 
      `<li>${feature}</li>`
    ).join('');

    carouselItem.innerHTML = `
      <img src="${item.src}" class="d-block" alt="${item.title}">
      <div class="carousel-caption d-none d-md-block">
        <h5>${item.title}</h5>
        <p>${item.description}</p>
        <div class="tech-tags mb-3">
          ${techTags}
        </div>
        <ul class="list-unstyled text-start mb-3">
          ${featuresList}
        </ul>
        <div class="d-flex gap-2 justify-content-center">
          <a href="${item.demoLink}" target="_blank" class="btn btn-primary btn-sm">Ver</a>
          <a href="${item.githubLink}" target="_blank" class="btn btn-outline-light btn-sm">Ver repositorio</a>
        </div>
      </div>
    `;
    carouselInner.appendChild(carouselItem);
  });
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  // MODAL Y CARRUSEL DE PROYECTOS
  const portfolioModal = document.getElementById('portfolioModal');
  const portfolioCarouselInner = portfolioModal.querySelector('.carousel-inner');
  const portfolioCarousel = new bootstrap.Carousel(document.getElementById('portfolioCarousel'), {
    interval: false,
    wrap: true
  });

  // MODAL Y CARRUSEL DE PÁGINAS WEB
  const websitesModal = document.getElementById('websitesModal');
  const websitesCarouselInner = websitesModal.querySelector('.carousel-inner');
  const websitesCarousel = new bootstrap.Carousel(document.getElementById('websitesCarousel'), {
    interval: false,
    wrap: true
  });

  // Evento para el modal de PROYECTOS
  portfolioModal.addEventListener('show.bs.modal', function (event) {
    const opener = event.relatedTarget;
    const projectIndex = opener.getAttribute('data-project-index');

    generateCarouselContent(projectsData, portfolioCarouselInner, projectIndex);
    portfolioCarousel.to(parseInt(projectIndex));
  });

  // Evento para el modal de PÁGINAS WEB
  websitesModal.addEventListener('show.bs.modal', function (event) {
    const opener = event.relatedTarget;
    const websiteIndex = opener.getAttribute('data-website-index');

    generateCarouselContent(websitesData, websitesCarouselInner, websiteIndex);
    websitesCarousel.to(parseInt(websiteIndex));
  });

  // Reiniciar carruseles cuando se cierran los modales
  portfolioModal.addEventListener('hidden.bs.modal', function () {
    portfolioCarousel.to(0);
  });

  websitesModal.addEventListener('hidden.bs.modal', function () {
    websitesCarousel.to(0);
  });

  // Funcionalidad de navegación suave (mantener la funcionalidad original)
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('.menu a');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    {
      threshold: 0.5
    }
  );

  sections.forEach(section => observer.observe(section));

  // Scroll suave para los enlaces de navegación
  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    });
  });
});