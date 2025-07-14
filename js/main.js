// js/main.js

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

