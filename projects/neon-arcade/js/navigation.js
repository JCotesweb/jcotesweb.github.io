// Sistema de navegación y control de neón

// Control de neón mejorado
function toggleNeon() {
    const body = document.body;
    const toggle = document.querySelector('.neon-toggle');
    
    if (body.classList.contains('neon-enabled')) {
        body.classList.remove('neon-enabled');
        body.classList.add('neon-disabled');
        toggle.innerHTML = '<i class="fas fa-lightbulb"></i> ENCENDER';
        sounds.click();
        
        // Efecto de apagado
        document.body.style.transition = 'all 0.5s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 500);
    } else {
        body.classList.remove('neon-disabled');
        body.classList.add('neon-enabled');
        toggle.innerHTML = '<i class="fas fa-lightbulb"></i> APAGAR';
        sounds.beep();
        
        // Efecto de encendido
        document.body.style.transition = 'all 0.5s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 500);
    }
}

// Navegación mejorada entre juegos
function showGame(gameId) {
    sounds.beep();
    
    // Efecto de transición
    const mainMenu = document.getElementById('main-menu');
    mainMenu.style.opacity = '0';
    mainMenu.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        mainMenu.style.display = 'none';
        const gameArea = document.getElementById(gameId);
        gameArea.style.display = 'block';
        gameArea.classList.add('active');
        
        // Animar entrada del juego
        setTimeout(() => {
            gameArea.style.opacity = '1';
            gameArea.style.transform = 'translateY(0)';
        }, 50);
    }, 300);
}

function showMainMenu() {
    sounds.click();
    
    // Ocultar todas las áreas de juego
    document.querySelectorAll('.game-area').forEach(area => {
        area.style.opacity = '0';
        area.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            area.style.display = 'none';
            area.classList.remove('active');
        }, 300);
    });
    
    // Mostrar menú principal
    setTimeout(() => {
        const mainMenu = document.getElementById('main-menu');
        mainMenu.style.display = 'block';
        mainMenu.style.opacity = '1';
        mainMenu.style.transform = 'scale(1)';
    }, 300);
}