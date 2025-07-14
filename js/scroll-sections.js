// Este script centra cada sección al hacer scroll con la rueda o flechas del teclado
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todas las secciones principales del portfolio
    const sections = Array.from(document.querySelectorAll('section'));
    let currentSectionIndex = 0;
    let isScrolling = false;
    const scrollThrottleTime = 1000; // 1 segundo entre scrolls

    // Función para centrar una sección específica
    function scrollToSection(index) {
        if (index < 0 || index >= sections.length) return;

        isScrolling = true;
        currentSectionIndex = index;
        const targetSection = sections[currentSectionIndex];

        const sectionHeight = targetSection.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Calcula la posición para centrar la sección
        const scrollPosition = targetSection.offsetTop - (viewportHeight / 2) + (sectionHeight / 2);

        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });

        setTimeout(() => {
            isScrolling = false;
        }, scrollThrottleTime);
    }

    // Centra la primera sección al cargar
    scrollToSection(0);

    // Scroll con la rueda del ratón
    window.addEventListener('wheel', (event) => {
        if (isScrolling) return;

        if (event.deltaY > 0) {
            scrollToSection(currentSectionIndex + 1);
        } else if (event.deltaY < 0) {
            scrollToSection(currentSectionIndex - 1);
        }
    }, { passive: false });

    // Scroll con flechas del teclado
    window.addEventListener('keydown', (event) => {
        if (isScrolling) return;

        if (event.key === 'ArrowDown') {
            event.preventDefault();
            scrollToSection(currentSectionIndex + 1);
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            scrollToSection(currentSectionIndex - 1);
        }
    });

    // Recentrar al redimensionar la ventana
    window.addEventListener('resize', () => {
        scrollToSection(currentSectionIndex);
    });
});