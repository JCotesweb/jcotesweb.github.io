// MAIN.JS - Inicialización y eventos principales

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el juego de memoria
    initMemoryGame();
    
    // Agregar efectos de sonido al pasar el mouse
    addHoverSounds();
    
    // Configurar transiciones iniciales
    setupInitialTransitions();
    
    console.log('🎮 NEON ARCADE iniciado correctamente');
});

// Agregar efectos de hover con sonido
function addHoverSounds() {
    const interactiveElements = document.querySelectorAll(`
        .game-card, 
        .rps-btn, 
        .tic-cell, 
        .memory-card, 
        .reset-btn, 
        .back-btn,
        .neon-toggle
    `);
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            if (!element.classList.contains('matched')) {
                sounds.hover();
            }
        });
    });
}

// Configurar transiciones iniciales
function setupInitialTransitions() {
    // Efecto de aparición para las cartas del menú principal
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Efecto de aparición para el título
    const title = document.querySelector('.header h1');
    if (title) {
        title.style.opacity = '0';
        title.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            title.style.transition = 'all 1s ease';
            title.style.opacity = '1';
            title.style.transform = 'scale(1)';
        }, 500);
    }
}

// Manejo de errores globales
window.addEventListener('error', function(e) {
    console.log('Error en NEON ARCADE:', e.message);
});

// Optimización de rendimiento
let rafId;
function optimizeAnimations() {
    if (rafId) {
        cancelAnimationFrame(rafId);
    }
    
    rafId = requestAnimationFrame(() => {
        // Aquí se pueden agregar optimizaciones de animación si es necesario
    });
}

// Eventos de teclado para accesibilidad
document.addEventListener('keydown', function(e) {
    // ESC para volver al menú principal
    if (e.key === 'Escape') {
        const activeGame = document.querySelector('.game-area.active');
        if (activeGame) {
            showMainMenu();
        }
    }
    
    // Espacio para toggle de neón
    if (e.key === ' ' && e.ctrlKey) {
        e.preventDefault();
        toggleNeon();
    }
});

// Información de debug (se puede remover en producción)
console.log('%c🎮 NEON ARCADE 🎮', 'color: #00ffff; font-size: 20px; font-weight: bold;');
console.log('%cControles:\n- ESC: Volver al menú\n- Ctrl + Espacio: Toggle neón', 'color: #ff00ff;');