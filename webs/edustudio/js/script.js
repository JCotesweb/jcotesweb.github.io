// EduStudio - Blog Educativo JavaScript

// Función para mostrar diferentes secciones
function mostrarSeccion(seccion) {
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('.seccion-contenido');
    secciones.forEach(s => s.style.display = 'none');
    
    // Mostrar la sección seleccionada
    const seccionSeleccionada = document.getElementById(seccion);
    if (seccionSeleccionada) {
        seccionSeleccionada.style.display = 'block';
    }
    
    // Actualizar navegación activa
    const enlaces = document.querySelectorAll('nav a');
    enlaces.forEach(a => a.classList.remove('active'));
    
    // Agregar clase activa al enlace clickeado
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // Scroll suave hacia arriba
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Inicialización cuando el DOM está cargado
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar sección de inicio por defecto
    document.getElementById('inicio').style.display = 'block';
    
    // Manejar envío de formularios
    configurarFormularios();
    
    // Añadir efectos visuales adicionales
    agregarEfectosVisuales();
    
    // Inicializar tooltips
    inicializarTooltips();
});

// Configurar manejo de formularios
function configurarFormularios() {
    // Formulario de login
    const loginForm = document.querySelector('#usuario').closest('form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const usuario = document.getElementById('usuario').value;
            const contrasena = document.getElementById('contrasena').value;
            
            if (usuario && contrasena) {
                mostrarNotificacion('¡Inicio de sesión exitoso! Bienvenido ' + usuario, 'success');
                loginForm.reset();
            } else {
                mostrarNotificacion('Por favor, completa todos los campos', 'error');
            }
        });
    }
    
    // Formulario de newsletter
    const newsletterForms = document.querySelectorAll('form');
    newsletterForms.forEach(form => {
        const emailInput = form.querySelector('input[type="email"]');
        if (emailInput && emailInput.placeholder === 'Tu email') {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = emailInput.value;
                
                if (validarEmail(email)) {
                    mostrarNotificacion('¡Te has suscrito exitosamente a nuestro newsletter!', 'success');
                    form.reset();
                } else {
                    mostrarNotificacion('Por favor, introduce un email válido', 'error');
                }
            });
        }
    });
    
    // Formulario de contacto
    const contactForm = document.querySelector('#contacto form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const inputs = contactForm.querySelectorAll('input, textarea');
            let todosCompletos = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    todosCompletos = false;
                }
            });
            
            if (todosCompletos) {
                mostrarNotificacion('¡Mensaje enviado correctamente! Te responderemos pronto.', 'success');
                contactForm.reset();
            } else {
                mostrarNotificacion('Por favor, completa todos los campos', 'error');
            }
        });
    }
}

// Función para validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje, tipo = 'info') {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion notificacion-${tipo}`;
    notificacion.innerHTML = `
        <span>${mensaje}</span>
        <button onclick="cerrarNotificacion(this)">×</button>
    `;
    
    // Estilos para la notificación
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 10px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        max-width: 300px;
    `;
    
    // Color según el tipo
    switch(tipo) {
        case 'success':
            notificacion.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
            break;
        case 'error':
            notificacion.style.background = 'linear-gradient(135deg, #f44336, #d32f2f)';
            break;
        default:
            notificacion.style.background = 'linear-gradient(135deg, #2196F3, #1976D2)';
    }
    
    // Estilo del botón cerrar
    const botonCerrar = notificacion.querySelector('button');
    botonCerrar.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
    `;
    
    // Agregar al DOM
    document.body.appendChild(notificacion);
    
    // Animación de entrada
    setTimeout(() => {
        notificacion.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto-eliminar después de 5 segundos
    setTimeout(() => {
        cerrarNotificacion(botonCerrar);
    }, 5000);
}

// Función para cerrar notificación
function cerrarNotificacion(boton) {
    const notificacion = boton.parentElement;
    notificacion.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notificacion.parentElement) {
            notificacion.parentElement.removeChild(notificacion);
        }
    }, 300);
}

// Agregar efectos visuales adicionales
function agregarEfectosVisuales() {
    // Efecto de paralaje suave en el scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const elementos = document.querySelectorAll('.post-it-section, .widget, .articulo');
        
        elementos.forEach((elemento, index) => {
            const velocidad = (index % 3 + 1) * 0.1;
            elemento.style.transform = `translateY(${scrolled * velocidad}px) rotate(${elemento.style.transform.match(/rotate\([^)]*\)/)?.[0] || '0deg'})`;
        });
    });
    
    // Efecto de hover mejorado para artículos
    const articulos = document.querySelectorAll('.articulo');
    articulos.forEach(articulo => {
        articulo.addEventListener('mouseenter', function() {
            this.style.boxShadow = '6px 6px 20px rgba(0, 0, 0, 0.25)';
            this.style.transform = 'rotate(0deg) scale(1.02) translateY(-5px)';
        });
        
        articulo.addEventListener('mouseleave', function() {
            this.style.boxShadow = '2px 2px 6px rgba(0, 0, 0, 0.1)';
            this.style.transform = 'rotate(-0.2deg) scale(1)';
        });
    });
    
    // Animación de entrada para elementos
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = '1';
                entrada.target.style.transform = entrada.target.style.transform.replace('translateY(20px)', 'translateY(0px)');
            }
        });
    });
    
    // Observer para elementos que aparecen
    document.querySelectorAll('.post-it-section, .widget').forEach(elemento => {
        elemento.style.opacity = '0';
        elemento.style.transform = elemento.style.transform + ' translateY(20px)';
        elemento.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observador.observe(elemento);
    });
}

// Inicializar tooltips
function inicializarTooltips() {
    const elementosConTooltip = document.querySelectorAll('[title]');
    
    elementosConTooltip.forEach(elemento => {
        elemento.addEventListener('mouseenter', function(e) {
            const titulo = this.getAttribute('title');
            if (titulo) {
                this.setAttribute('data-titulo-original', titulo);
                this.removeAttribute('title');
                
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip-personalizado';
                tooltip.textContent = titulo;
                tooltip.style.cssText = `
                    position: absolute;
                    background: rgba(0, 0, 0, 0.8);
                    color: white;
                    padding: 8px 12px;
                    border-radius: 6px;
                    font-size: 12px;
                    z-index: 1001;
                    pointer-events: none;
                    white-space: nowrap;
                    transform: translateX(-50%);
                `;
                
                document.body.appendChild(tooltip);
                
                const actualizarPosicion = (e) => {
                    tooltip.style.left = e.pageX + 'px';
                    tooltip.style.top = (e.pageY - 35) + 'px';
                };
                
                actualizarPosicion(e);
                this.addEventListener('mousemove', actualizarPosicion);
            }
        });
        
        elemento.addEventListener('mouseleave', function() {
            const titulo = this.getAttribute('data-titulo-original');
            if (titulo) {
                this.setAttribute('title', titulo);
                this.removeAttribute('data-titulo-original');
            }
            
            const tooltip = document.querySelector('.tooltip-personalizado');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Función para búsqueda simple (futura implementación)
function buscarEnBlog(termino) {
    // Esta función podría expandirse para búsqueda en tiempo real
    console.log('Buscando:', termino);
    mostrarNotificacion('Función de búsqueda en desarrollo', 'info');
}

// Función para cambiar tema (día/noche) - preparada para futuras mejoras
function cambiarTema() {
    document.body.classList.toggle('tema-oscuro');
    mostrarNotificacion('Tema cambiado', 'info');
}

// Funciones de utilidad
const Utils = {
    // Función para scroll suave
    scrollSuave: function(elemento) {
        elemento.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    },
    
    // Función para copiar texto al portapapeles
    copiarAlPortapapeles: function(texto) {
        navigator.clipboard.writeText(texto).then(() => {
            mostrarNotificacion('Texto copiado al portapapeles', 'success');
        });
    },
    
    // Función para formatear fecha
    formatearFecha: function(fecha) {
        return new Date(fecha).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
};

// Agregar funcionalidad de teclado
document.addEventListener('keydown', function(e) {
    // Esc para cerrar notificaciones
    if (e.key === 'Escape') {
        const notificaciones = document.querySelectorAll('.notificacion');
        notificaciones.forEach(notif => {
            const boton = notif.querySelector('button');
            if (boton) cerrarNotificacion(boton);
        });
    }
    
    // Ctrl + / para mostrar atajos de teclado
    if (e.ctrlKey && e.key === '/') {
        e.preventDefault();
        mostrarNotificacion('Atajos: Esc = cerrar notificaciones, Ctrl+/ = ayuda', 'info');
    }
});

// Exportar funciones para uso global
window.EduStudio = {
    mostrarSeccion,
    mostrarNotificacion,
    buscarEnBlog,
    cambiarTema,
    Utils
};