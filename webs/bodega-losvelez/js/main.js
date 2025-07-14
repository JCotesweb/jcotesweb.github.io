// Bodega Los Vélez - JavaScript Principal
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades
    initSmoothScrolling();
    initHeaderScrollEffect();
    initActiveNavigation();
    initMobileMenu();
    initFormHandling();
});

// Navegación suave entre secciones
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Efecto del header al hacer scroll
function initHeaderScrollEffect() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Navegación activa según la sección visible
function initActiveNavigation() {
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const desktopNavLinks = document.querySelectorAll('.desktop-nav a');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-menu a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        // Actualizar enlaces activos en ambos menús
        [...desktopNavLinks, ...mobileNavLinks].forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Menú móvil
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-menu a');

    // Abrir menú móvil
    mobileMenuToggle.addEventListener('click', function() {
        openMobileMenu();
    });

    // Cerrar menú móvil
    mobileMenuClose.addEventListener('click', function() {
        closeMobileMenu();
    });

    // Cerrar menú al hacer clic en el overlay
    mobileNavOverlay.addEventListener('click', function() {
        closeMobileMenu();
    });

    // Cerrar menú al hacer clic en un enlace
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });

    // Cerrar menú con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    function openMobileMenu() {
        mobileMenuToggle.classList.add('active');
        mobileNav.classList.add('active');
        mobileNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Manejo del formulario de contacto
function initFormHandling() {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                showFormMessage('Por favor, completa todos los campos.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showFormMessage('Por favor, ingresa un email válido.', 'error');
                return;
            }
            
            // Simulación de envío
            const button = this.querySelector('button');
            const originalText = button.textContent;
            
            button.textContent = 'Enviando...';
            button.disabled = true;
            button.style.opacity = '0.7';
            
            setTimeout(() => {
                button.textContent = 'Mensaje Enviado ✓';
                button.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
                
                showFormMessage('¡Gracias! Tu mensaje ha sido enviado correctamente. Te contactaremos pronto.', 'success');
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                    button.style.background = '';
                    button.style.opacity = '';
                    this.reset();
                    clearFormMessage();
                }, 3000);
            }, 1500);
        });
    }
}

// Validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Mostrar mensajes del formulario
function showFormMessage(message, type) {
    // Eliminar mensaje anterior si existe
    clearFormMessage();
    
    const form = document.querySelector('form');
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;
    
    // Estilos para el mensaje
    messageDiv.style.cssText = `
        padding: 15px;
        margin: 20px 0;
        border-radius: 10px;
        font-weight: 500;
        text-align: center;
        animation: fadeInUp 0.3s ease-out;
        ${type === 'success' 
            ? 'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;'
            : 'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
        }
    `;
    
    form.appendChild(messageDiv);
}

// Limpiar mensajes del formulario
function clearFormMessage() {
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
}

// Efectos adicionales para mejorar la experiencia
function addInteractiveEffects() {
    // Efecto hover en las cards de vino
    document.querySelectorAll('.wine-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Funciones de utilidad
const utils = {
    // Debounce para optimizar eventos de scroll
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Detectar si es dispositivo móvil
    isMobile: function() {
        return window.innerWidth <= 768;
    },
    
    // Scroll suave a elemento específico
    scrollToElement: function(element, offset = 80) {
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
};

// Optimización de rendimiento
const optimizedHandler = utils.debounce(() => {
    // Funcionalidades optimizadas sin efectos de scroll
}, 10);

// Inicializar efectos adicionales una vez que la página esté completamente cargada
window.addEventListener('load', function() {
    // Añadir clase para indicar que la página está completamente cargada
    document.body.classList.add('page-loaded');
    
    // Inicializar efectos adicionales
    setTimeout(addInteractiveEffects, 100);
});

// Manejo de errores globales
window.addEventListener('error', function(e) {
    console.warn('Error en Bodega Los Vélez:', e.error);
});

// Exportar funciones para uso global si es necesario
window.BodegaLosVelez = {
    utils: utils,
    scrollToElement: utils.scrollToElement,
    showFormMessage: showFormMessage
};