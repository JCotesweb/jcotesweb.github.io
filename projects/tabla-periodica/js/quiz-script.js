// Datos de elementos para el quiz (versión simplificada para mejor rendimiento)
const elementosQuiz = {
    1: { simbolo: 'H', nombre: 'Hidrógeno', masa: '1.008', uso: 'Combustible, producción de amoníaco', tipo: 'no-metales', configuracion: '1s¹', estado: 'Gas' },
    2: { simbolo: 'He', nombre: 'Helio', masa: '4.003', uso: 'Globos, refrigeración criogénica', tipo: 'gases-nobles', configuracion: '1s²', estado: 'Gas' },
    3: { simbolo: 'Li', nombre: 'Litio', masa: '6.941', uso: 'Baterías, medicamentos psiquiátricos', tipo: 'metales-alcalinos', configuracion: '[He] 2s¹', estado: 'Sólido' },
    4: { simbolo: 'Be', nombre: 'Berilio', masa: '9.012', uso: 'Aleaciones aeroespaciales', tipo: 'alcalinoterreos', configuracion: '[He] 2s²', estado: 'Sólido' },
    5: { simbolo: 'B', nombre: 'Boro', masa: '10.811', uso: 'Vidrio borosilicato, semiconductores', tipo: 'metaloides', configuracion: '[He] 2s² 2p¹', estado: 'Sólido' },
    6: { simbolo: 'C', nombre: 'Carbono', masa: '12.011', uso: 'Grafito, diamante, vida orgánica', tipo: 'no-metales', configuracion: '[He] 2s² 2p²', estado: 'Sólido' },
    7: { simbolo: 'N', nombre: 'Nitrógeno', masa: '14.007', uso: 'Fertilizantes, explosivos', tipo: 'no-metales', configuracion: '[He] 2s² 2p³', estado: 'Gas' },
    8: { simbolo: 'O', nombre: 'Oxígeno', masa: '15.999', uso: 'Respiración, combustión', tipo: 'no-metales', configuracion: '[He] 2s² 2p⁴', estado: 'Gas' },
    9: { simbolo: 'F', nombre: 'Flúor', masa: '18.998', uso: 'Pasta dental, teflón', tipo: 'halogenos', configuracion: '[He] 2s² 2p⁵', estado: 'Gas' },
    10: { simbolo: 'Ne', nombre: 'Neón', masa: '20.180', uso: 'Letreros luminosos, láseres', tipo: 'gases-nobles', configuracion: '[He] 2s² 2p⁶', estado: 'Gas' },
    11: { simbolo: 'Na', nombre: 'Sodio', masa: '22.990', uso: 'Sal de mesa, conservantes', tipo: 'metales-alcalinos', configuracion: '[Ne] 3s¹', estado: 'Sólido' },
    12: { simbolo: 'Mg', nombre: 'Magnesio', masa: '24.305', uso: 'Aleaciones ligeras, fuegos artificiales', tipo: 'alcalinoterreos', configuracion: '[Ne] 3s²', estado: 'Sólido' },
    13: { simbolo: 'Al', nombre: 'Aluminio', masa: '26.982', uso: 'Latas, aviones, construcción', tipo: 'otros-metales', configuracion: '[Ne] 3s² 3p¹', estado: 'Sólido' },
    14: { simbolo: 'Si', nombre: 'Silicio', masa: '28.086', uso: 'Semiconductores, chips', tipo: 'metaloides', configuracion: '[Ne] 3s² 3p²', estado: 'Sólido' },
    15: { simbolo: 'P', nombre: 'Fósforo', masa: '30.974', uso: 'Fertilizantes, cerillas', tipo: 'no-metales', configuracion: '[Ne] 3s² 3p³', estado: 'Sólido' },
    16: { simbolo: 'S', nombre: 'Azufre', masa: '32.065', uso: 'Ácido sulfúrico, vulcanización', tipo: 'no-metales', configuracion: '[Ne] 3s² 3p⁴', estado: 'Sólido' },
    17: { simbolo: 'Cl', nombre: 'Cloro', masa: '35.453', uso: 'Desinfectantes, PVC', tipo: 'halogenos', configuracion: '[Ne] 3s² 3p⁵', estado: 'Gas' },
    18: { simbolo: 'Ar', nombre: 'Argón', masa: '39.948', uso: 'Soldadura, bombillas', tipo: 'gases-nobles', configuracion: '[Ne] 3s² 3p⁶', estado: 'Gas' },
    19: { simbolo: 'K', nombre: 'Potasio', masa: '39.098', uso: 'Fertilizantes, jabones', tipo: 'metales-alcalinos', configuracion: '[Ar] 4s¹', estado: 'Sólido' },
    20: { simbolo: 'Ca', nombre: 'Calcio', masa: '40.078', uso: 'Cemento, huesos, dientes', tipo: 'alcalinoterreos', configuracion: '[Ar] 4s²', estado: 'Sólido' },
    26: { simbolo: 'Fe', nombre: 'Hierro', masa: '55.845', uso: 'Acero, construcción, hemoglobina', tipo: 'metales-transicion', configuracion: '[Ar] 3d⁶ 4s²', estado: 'Sólido' },
    29: { simbolo: 'Cu', nombre: 'Cobre', masa: '63.546', uso: 'Cables eléctricos, tuberías', tipo: 'metales-transicion', configuracion: '[Ar] 3d¹⁰ 4s¹', estado: 'Sólido' },
    30: { simbolo: 'Zn', nombre: 'Zinc', masa: '65.409', uso: 'Galvanizado, aleaciones', tipo: 'metales-transicion', configuracion: '[Ar] 3d¹⁰ 4s²', estado: 'Sólido' },
    47: { simbolo: 'Ag', nombre: 'Plata', masa: '107.87', uso: 'Joyería, monedas, fotografía', tipo: 'metales-transicion', configuracion: '[Kr] 4d¹⁰ 5s¹', estado: 'Sólido' },
    79: { simbolo: 'Au', nombre: 'Oro', masa: '196.97', uso: 'Joyería, electrónicos, inversión', tipo: 'metales-transicion', configuracion: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', estado: 'Sólido' },
    80: { simbolo: 'Hg', nombre: 'Mercurio', masa: '200.59', uso: 'Termómetros, lámparas', tipo: 'metales-transicion', configuracion: '[Xe] 4f¹⁴ 5d¹⁰ 6s²', estado: 'Líquido' },
    82: { simbolo: 'Pb', nombre: 'Plomo', masa: '207.20', uso: 'Baterías, blindaje contra radiación', tipo: 'otros-metales', configuracion: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', estado: 'Sólido' },
    92: { simbolo: 'U', nombre: 'Uranio', masa: '238.03', uso: 'Combustible nuclear, armas nucleares', tipo: 'actinidos', configuracion: '[Rn] 5f³ 6d¹ 7s²', estado: 'Sólido' }
};

// Variables globales del juego
let juegoActual = {
    modo: '',
    configuracion: {},
    preguntas: [],
    preguntaActual: 0,
    puntuacion: 0,
    respuestas: [],
    tiempoInicio: 0,
    timerInterval: null,
    tiempoRestante: 0
};

/**
 * Inicialización del quiz al cargar la página
 */
document.addEventListener('DOMContentLoaded', function() {
    configurarEventListeners();
    mostrarPantalla('pantallaInicio');
});

/**
 * Configura todos los event listeners de la aplicación
 */
function configurarEventListeners() {
    // Botones de navegación
    document.getElementById('volverTabla').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    
    document.getElementById('volverTablaFinal').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    
    // Selección de modo de juego
    document.querySelectorAll('.modo-card').forEach(card => {
        card.addEventListener('click', () => {
            const modo = card.dataset.modo;
            seleccionarModo(modo);
        });
    });
    
    // Botones de configuración
    document.getElementById('empezarQuiz').addEventListener('click', empezarQuiz);
    document.getElementById('volverInicio').addEventListener('click', () => {
        mostrarPantalla('pantallaInicio');
    });
    
    // Botones de juego
    document.getElementById('siguientePregunta').addEventListener('click', siguientePregunta);
    
    // Botones de resultados
    document.getElementById('jugarOtravez').addEventListener('click', () => {
        empezarQuiz();
    });
    
    document.getElementById('volverMenu').addEventListener('click', () => {
        mostrarPantalla('pantallaInicio');
    });
}

/**
 * Muestra una pantalla específica y oculta las demás
 */
function mostrarPantalla(nombrePantalla) {
    document.querySelectorAll('.pantalla').forEach(pantalla => {
        pantalla.classList.remove('activa');
    });
    document.getElementById(nombrePantalla).classList.add('activa');
}

/**
 * Selecciona el modo de juego y configura la pantalla correspondiente
 */
function seleccionarModo(modo) {
    juegoActual.modo = modo;
    
    // Mostrar/ocultar configuración de tiempo según el modo
    const configTiempo = document.getElementById('configTiempo');
    if (modo === 'cronometro') {
        configTiempo.style.display = 'block';
    } else {
        configTiempo.style.display = 'none';
    }
    
    mostrarPantalla('pantallaConfig');
}

/**
 * Inicia el quiz con la configuración seleccionada
 */
function empezarQuiz() {
    // Obtener configuración
    juegoActual.configuracion = {
        numPreguntas: parseInt(document.getElementById('numPreguntas').value),
        tiempoPregunta: parseInt(document.getElementById('tiempoPregunta').value),
        dificultad: document.getElementById('dificultad').value
    };
    
    // Resetear variables del juego
    juegoActual.preguntaActual = 0;
    juegoActual.puntuacion = 0;
    juegoActual.respuestas = [];
    juegoActual.tiempoInicio = Date.now();
    
    // Generar preguntas
    juegoActual.preguntas = generarPreguntas(juegoActual.modo, juegoActual.configuracion);
    
    // Configurar UI
    document.getElementById('totalPreguntas').textContent = juegoActual.configuracion.numPreguntas;
    document.getElementById('puntos').textContent = '0';
    
    // Mostrar cronómetro si es necesario
    const cronometro = document.getElementById('cronometro');
    if (juegoActual.modo === 'cronometro') {
        cronometro.style.display = 'block';
    } else {
        cronometro.style.display = 'none';
    }
    
    mostrarPantalla('pantallaJuego');
    mostrarPregunta();
}

/**
 * Genera las preguntas según el modo y configuración
 */
function generarPreguntas(modo, configuracion) {
    const preguntas = [];
    const elementosDisponibles = filtrarElementosPorDificultad(configuracion.dificultad);
    const numeros = Object.keys(elementosDisponibles);
    
    for (let i = 0; i < configuracion.numPreguntas; i++) {
        let pregunta;
        
        switch (modo) {
            case 'identificar':
                pregunta = generarPreguntaIdentificar(elementosDisponibles, numeros);
                break;
            case 'simbolos':
                pregunta = generarPreguntaSimbolos(elementosDisponibles, numeros);
                break;
            case 'propiedades':
                pregunta = generarPreguntaPropiedades(elementosDisponibles, numeros);
                break;
            case 'aplicaciones':
                pregunta = generarPreguntaAplicaciones(elementosDisponibles, numeros);
                break;
            case 'mezclado':
                pregunta = generarPreguntaMezclada(elementosDisponibles, numeros);
                break;
            case 'cronometro':
                pregunta = generarPreguntaMezclada(elementosDisponibles, numeros);
                break;
        }
        
        if (pregunta) {
            preguntas.push(pregunta);
        }
    }
    
    return preguntas;
}

/**
 * Filtra elementos según la dificultad seleccionada
 */
function filtrarElementosPorDificultad(dificultad) {
    const numeros = Object.keys(elementosQuiz);
    let numerosFiltrados;
    
    switch (dificultad) {
        case 'basicos':
            numerosFiltrados = numeros.filter(n => parseInt(n) <= 20);
            break;
        case 'comunes':
            numerosFiltrados = numeros.filter(n => parseInt(n) <= 54);
            break;
        case 'metales':
            numerosFiltrados = numeros.filter(n => 
                ['metales-alcalinos', 'alcalinoterreos', 'metales-transicion', 'otros-metales']
                .includes(elementosQuiz[n].tipo)
            );
            break;
        case 'no-metales':
            numerosFiltrados = numeros.filter(n => 
                ['no-metales', 'halogenos', 'gases-nobles', 'metaloides']
                .includes(elementosQuiz[n].tipo)
            );
            break;
        default:
            numerosFiltrados = numeros;
    }
    
    const resultado = {};
    numerosFiltrados.forEach(n => {
        resultado[n] = elementosQuiz[n];
    });
    
    return resultado;
}

/**
 * Genera pregunta de identificación de elemento
 */
function generarPreguntaIdentificar(elementos, numeros) {
    const numeroCorrector = numeros[Math.floor(Math.random() * numeros.length)];
    const elemento = elementos[numeroCorrector];
    
    const pregunta = `¿Cuál es el elemento con número atómico ${numeroCorrector}?`;
    const pista = `Pista: Se usa para ${elemento.uso.split(',')[0]}`;
    
    return {
        tipo: 'identificar',
        pregunta,
        pista,
        respuestaCorrecta: elemento.nombre,
        opciones: generarOpcionesNombres(elementos, elemento.nombre),
        explicacion: `${elemento.nombre} (${elemento.simbolo}) tiene número atómico ${numeroCorrector} y se usa principalmente para ${elemento.uso}.`
    };
}

/**
 * Genera pregunta de símbolos químicos
 */
function generarPreguntaSimbolos(elementos, numeros) {
    const numeroCorrector = numeros[Math.floor(Math.random() * numeros.length)];
    const elemento = elementos[numeroCorrector];
    
    const pregunta = `¿Cuál es el símbolo químico del ${elemento.nombre}?`;
    const pista = `Número atómico: ${numeroCorrector}`;
    
    return {
        tipo: 'simbolos',
        pregunta,
        pista,
        respuestaCorrecta: elemento.simbolo,
        opciones: generarOpcionesSimbolos(elementos, elemento.simbolo),
        explicacion: `El símbolo del ${elemento.nombre} es ${elemento.simbolo}.`
    };
}

/**
 * Genera pregunta de propiedades
 */
function generarPreguntaPropiedades(elementos, numeros) {
    const numeroCorrector = numeros[Math.floor(Math.random() * numeros.length)];
    const elemento = elementos[numeroCorrector];
    
    const tiposPregunta = ['masa', 'configuracion', 'estado'];
    const tipoPregunta = tiposPregunta[Math.floor(Math.random() * tiposPregunta.length)];
    
    let pregunta, respuestaCorrecta, opciones;
    
    switch (tipoPregunta) {
        case 'masa':
            pregunta = `¿Cuál es la masa atómica aproximada del ${elemento.nombre}?`;
            respuestaCorrecta = elemento.masa;
            opciones = generarOpcionesMasas(elementos, elemento.masa);
            break;
        case 'configuracion':
            pregunta = `¿Cuál es la configuración electrónica del ${elemento.nombre}?`;
            respuestaCorrecta = elemento.configuracion;
            opciones = generarOpcionesConfiguraciones(elementos, elemento.configuracion);
            break;
        case 'estado':
            pregunta = `¿En qué estado se encuentra el ${elemento.nombre} a temperatura ambiente?`;
            respuestaCorrecta = elemento.estado;
            opciones = ['Sólido', 'Líquido', 'Gas', 'Plasma'];
            break;
    }
    
    return {
        tipo: 'propiedades',
        pregunta,
        pista: `Símbolo: ${elemento.simbolo}`,
        respuestaCorrecta,
        opciones: mezclarArray(opciones),
        explicacion: `${elemento.nombre} (${elemento.simbolo}) ${tipoPregunta === 'masa' ? 'tiene una masa atómica de' : tipoPregunta === 'estado' ? 'se encuentra en estado' : 'tiene la configuración electrónica'} ${respuestaCorrecta}.`
    };
}

/**
 * Genera pregunta de aplicaciones
 */
function generarPreguntaAplicaciones(elementos, numeros) {
    const numeroCorrector = numeros[Math.floor(Math.random() * numeros.length)];
    const elemento = elementos[numeroCorrector];
    
    const uso = elemento.uso.split(',')[0].trim();
    const pregunta = `¿Qué elemento se usa principalmente para ${uso}?`;
    const pista = `Es un ${elemento.tipo.replace('-', ' ')}`;
    
    return {
        tipo: 'aplicaciones',
        pregunta,
        pista,
        respuestaCorrecta: elemento.nombre,
        opciones: generarOpcionesNombres(elementos, elemento.nombre),
        explicacion: `${elemento.nombre} se usa para ${elemento.uso}.`
    };
}

/**
 * Genera pregunta mezclada (varios tipos)
 */
function generarPreguntaMezclada(elementos, numeros) {
    const tipos = ['identificar', 'simbolos', 'propiedades', 'aplicaciones'];
    const tipoAleatorio = tipos[Math.floor(Math.random() * tipos.length)];
    
    switch (tipoAleatorio) {
        case 'identificar':
            return generarPreguntaIdentificar(elementos, numeros);
        case 'simbolos':
            return generarPreguntaSimbolos(elementos, numeros);
        case 'propiedades':
            return generarPreguntaPropiedades(elementos, numeros);
        case 'aplicaciones':
            return generarPreguntaAplicaciones(elementos, numeros);
    }
}

/**
 * Genera opciones de nombres para preguntas de múltiple opción
 */
function generarOpcionesNombres(elementos, respuestaCorrecta) {
    const nombres = Object.values(elementos).map(e => e.nombre);
    const opciones = [respuestaCorrecta];
    
    while (opciones.length < 4) {
        const nombre = nombres[Math.floor(Math.random() * nombres.length)];
        if (!opciones.includes(nombre)) {
            opciones.push(nombre);
        }
    }
    
    return mezclarArray(opciones);
}

/**
 * Genera opciones de símbolos para preguntas de múltiple opción
 */
function generarOpcionesSimbolos(elementos, respuestaCorrecta) {
    const simbolos = Object.values(elementos).map(e => e.simbolo);
    const opciones = [respuestaCorrecta];
    
    while (opciones.length < 4) {
        const simbolo = simbolos[Math.floor(Math.random() * simbolos.length)];
        if (!opciones.includes(simbolo)) {
            opciones.push(simbolo);
        }
    }
    
    return mezclarArray(opciones);
}

/**
 * Genera opciones de masas atómicas
 */
function generarOpcionesMasas(elementos, respuestaCorrecta) {
    const masa = parseFloat(respuestaCorrecta);
    const opciones = [respuestaCorrecta];
    
    // Generar masas similares pero diferentes
    for (let i = 0; i < 3; i++) {
        let nuevaMasa;
        do {
            const variacion = (Math.random() - 0.5) * masa * 0.3;
            nuevaMasa = (masa + variacion).toFixed(3);
        } while (opciones.includes(nuevaMasa) || parseFloat(nuevaMasa) <= 0);
        
        opciones.push(nuevaMasa);
    }
    
    return mezclarArray(opciones);
}

/**
 * Genera opciones de configuraciones electrónicas
 */
function generarOpcionesConfiguraciones(elementos, respuestaCorrecta) {
    const configuraciones = Object.values(elementos).map(e => e.configuracion);
    const opciones = [respuestaCorrecta];
    
    while (opciones.length < 4) {
        const config = configuraciones[Math.floor(Math.random() * configuraciones.length)];
        if (!opciones.includes(config)) {
            opciones.push(config);
        }
    }
    
    return mezclarArray(opciones);
}

/**
 * Mezcla aleatoriamente un array
 */
function mezclarArray(array) {
    const nuevo = [...array];
    for (let i = nuevo.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nuevo[i], nuevo[j]] = [nuevo[j], nuevo[i]];
    }
    return nuevo;
}

/**
 * Muestra la pregunta actual
 */
function mostrarPregunta() {
    const pregunta = juegoActual.preguntas[juegoActual.preguntaActual];
    
    // Actualizar UI
    document.getElementById('preguntaActual').textContent = juegoActual.preguntaActual + 1;
    document.getElementById('pregunta').textContent = pregunta.pregunta;
    document.getElementById('pista').textContent = pregunta.pista || '';
    
    // Limpiar retroalimentación
    const retroalimentacion = document.getElementById('retroalimentacion');
    retroalimentacion.textContent = '';
    retroalimentacion.className = 'retroalimentacion';
    
    // Ocultar botón siguiente
    document.getElementById('siguientePregunta').style.display = 'none';
    
    // Crear opciones
    const opcionesContainer = document.getElementById('opcionesContainer');
    opcionesContainer.innerHTML = '';
    
    pregunta.opciones.forEach((opcion, index) => {
        const botonOpcion = document.createElement('button');
        botonOpcion.className = 'opcion';
        botonOpcion.textContent = opcion;
        botonOpcion.addEventListener('click', () => seleccionarRespuesta(opcion, botonOpcion));
        opcionesContainer.appendChild(botonOpcion);
    });
    
    // Iniciar cronómetro si es necesario
    if (juegoActual.modo === 'cronometro') {
        iniciarCronometro();
    }
}

/**
 * Inicia el cronómetro para una pregunta
 */
function iniciarCronometro() {
    juegoActual.tiempoRestante = juegoActual.configuracion.tiempoPregunta;
    const cronometroElement = document.getElementById('tiempo');
    cronometroElement.textContent = juegoActual.tiempoRestante;
    
    juegoActual.timerInterval = setInterval(() => {
        juegoActual.tiempoRestante--;
        cronometroElement.textContent = juegoActual.tiempoRestante;
        
        // Cambiar color cuando queda poco tiempo
        const cronometro = document.getElementById('cronometro');
        if (juegoActual.tiempoRestante <= 5) {
            cronometro.classList.add('urgente');
        }
        
        if (juegoActual.tiempoRestante <= 0) {
            clearInterval(juegoActual.timerInterval);
            tiempoAgotado();
        }
    }, 1000);
}

/**
 * Maneja cuando se agota el tiempo
 */
function tiempoAgotado() {
    const pregunta = juegoActual.preguntas[juegoActual.preguntaActual];
    
    // Deshabilitar todas las opciones
    document.querySelectorAll('.opcion').forEach(opcion => {
        opcion.classList.add('deshabilitada');
        if (opcion.textContent === pregunta.respuestaCorrecta) {
            opcion.classList.add('correcta');
        }
    });
    
    // Mostrar retroalimentación
    const retroalimentacion = document.getElementById('retroalimentacion');
    retroalimentacion.textContent = '⏰ ¡Tiempo agotado! ' + pregunta.explicacion;
    retroalimentacion.className = 'retroalimentacion incorrecta';
    
    // Registrar respuesta incorrecta
    juegoActual.respuestas.push({
        pregunta: pregunta.pregunta,
        respuestaUsuario: 'Sin respuesta',
        respuestaCorrecta: pregunta.respuestaCorrecta,
        correcta: false,
        tiempo: 0
    });
    
    // Mostrar botón siguiente
    document.getElementById('siguientePregunta').style.display = 'block';
}

/**
 * Avanza a la siguiente pregunta o termina el quiz
 */
function siguientePregunta() {
    juegoActual.preguntaActual++;
    
    if (juegoActual.preguntaActual < juegoActual.preguntas.length) {
        mostrarPregunta();
    } else {
        terminarQuiz();
    }
}

/**
 * Termina el quiz y muestra los resultados
 */
function terminarQuiz() {
    const tiempoTotal = Math.floor((Date.now() - juegoActual.tiempoInicio) / 1000);
    const totalPreguntas = juegoActual.preguntas.length;
    const respuestasCorrectas = juegoActual.respuestas.filter(r => r.correcta).length;
    const porcentaje = Math.round((respuestasCorrectas / totalPreguntas) * 100);
    const puntosMaximos = totalPreguntas * 10;
    
    // Actualizar estadísticas en la UI
    document.getElementById('puntosFinal').textContent = juegoActual.puntuacion;
    document.getElementById('puntosMaximo').textContent = puntosMaximos;
    document.getElementById('porcentaje').textContent = porcentaje;
    document.getElementById('correctas').textContent = respuestasCorrectas;
    document.getElementById('incorrectas').textContent = totalPreguntas - respuestasCorrectas;
    
    // Mostrar tiempo si es modo cronómetro
    const tiempoTotalElement = document.getElementById('tiempoTotal');
    if (juegoActual.modo === 'cronometro') {
        tiempoTotalElement.style.display = 'block';
        document.getElementById('tiempoFinal').textContent = tiempoTotal;
    } else {
        tiempoTotalElement.style.display = 'none';
    }
    
    // Determinar medalla y mensaje
    const medalla = document.getElementById('medalla');
    const medallIcon = medalla.querySelector('.medalla-icon');
    const medallTexto = medalla.querySelector('.medalla-texto');
    
    if (porcentaje >= 90) {
        medalla.className = 'medalla oro';
        medallIcon.textContent = '🥇';
        medallTexto.textContent = '¡Excelente!';
    } else if (porcentaje >= 70) {
        medalla.className = 'medalla plata';
        medallIcon.textContent = '🥈';
        medallTexto.textContent = '¡Muy bien!';
    } else if (porcentaje >= 50) {
        medalla.className = 'medalla bronce';
        medallIcon.textContent = '🥉';
        medallTexto.textContent = '¡Bien hecho!';
    } else {
        medalla.className = 'medalla';
        medallIcon.textContent = '💪';
        medallTexto.textContent = '¡Sigue practicando!';
    }
    
    // Generar resumen de respuestas
    generarResumenRespuestas();
    
    mostrarPantalla('pantallaResultados');
}

/**
 * Genera el resumen detallado de respuestas
 */
function generarResumenRespuestas() {
    const container = document.getElementById('resumenRespuestas');
    container.innerHTML = '<h3>📝 Resumen de respuestas:</h3>';
    
    juegoActual.respuestas.forEach((respuesta, index) => {
        const item = document.createElement('div');
        item.className = `resumen-item ${respuesta.correcta ? 'correcto' : 'incorrecto'}`;
        
        const icono = respuesta.correcta ? '✅' : '❌';
        const tiempoTexto = juegoActual.modo === 'cronometro' ? 
            ` (${respuesta.tiempo}s)` : '';
        
        item.innerHTML = `
            <div>
                <strong>${icono} Pregunta ${index + 1}:</strong>
                <div style="margin-top: 5px; font-size: 0.9em;">
                    ${respuesta.pregunta}
                </div>
            </div>
            <div style="text-align: right;">
                <div><strong>Tu respuesta:</strong> ${respuesta.respuestaUsuario}${tiempoTexto}</div>
                ${!respuesta.correcta ? `<div style="color: #4caf50;"><strong>Correcta:</strong> ${respuesta.respuestaCorrecta}</div>` : ''}
            </div>
        `;
        
        container.appendChild(item);
    });
}

/**
 * Obtiene un elemento aleatorio de un array
 */
function obtenerElementoAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * Formatea el tiempo en formato legible
 */
function formatearTiempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segs = segundos % 60;
    return minutos > 0 ? `${minutos}m ${segs}s` : `${segs}s`;
}

/**
 * Función de utilidad para debugging (solo en desarrollo)
 */
function debugQuiz() {
    console.log('Estado actual del quiz:', juegoActual);
    console.log('Elementos disponibles:', Object.keys(elementosQuiz).length);
}

// Exportar funciones para uso en consola (debugging)
window.debugQuiz = debugQuiz;

/**
 * Maneja la selección de una respuesta
 */
function seleccionarRespuesta(respuestaSeleccionada, botonSeleccionado) {
    // Detener cronómetro si está activo
    if (juegoActual.timerInterval) {
        clearInterval(juegoActual.timerInterval);
        document.getElementById('cronometro').classList.remove('urgente');
    }
    
    const pregunta = juegoActual.preguntas[juegoActual.preguntaActual];
    const esCorrecta = respuestaSeleccionada === pregunta.respuestaCorrecta;
    
    // Calcular tiempo de respuesta
    const tiempoRespuesta = juegoActual.modo === 'cronometro' ? 
        juegoActual.configuracion.tiempoPregunta - juegoActual.tiempoRestante : 0;
    
    // Actualizar puntuación
    if (esCorrecta) {
        let puntos = 10;
        if (juegoActual.modo === 'cronometro') {
            // Bonificación por velocidad
            puntos += Math.floor(juegoActual.tiempoRestante * 0.5);
        }
        juegoActual.puntuacion += puntos;
        document.getElementById('puntos').textContent = juegoActual.puntuacion;
    }
    
    // Registrar respuesta
    juegoActual.respuestas.push({
        pregunta: pregunta.pregunta,
        respuestaUsuario: respuestaSeleccionada,
        respuestaCorrecta: pregunta.respuestaCorrecta,
        correcta: esCorrecta,
        tiempo: tiempoRespuesta
    });
    
    // Mostrar feedback visual
    document.querySelectorAll('.opcion').forEach(opcion => {
        opcion.classList.add('deshabilitada');
        if (opcion.textContent === pregunta.respuestaCorrecta) {
            opcion.classList.add('correcta');
        } else if (opcion === botonSeleccionado && !esCorrecta) {
            opcion.classList.add('incorrecta');
        }
    });
    
    // Mostrar retroalimentación
    const retroalimentacion = document.getElementById('retroalimentacion');
    if (esCorrecta) {
        retroalimentacion.textContent = '🎉 ¡Correcto! ' + pregunta.explicacion;
        retroalimentacion.className = 'retroalimentacion correcta';
    } else {
        retroalimentacion.textContent = '❌ Incorrecto. ' + pregunta.explicacion;
        retroalimentacion.className = 'retroalimentacion incorrecta';
    }
    
    // Mostrar botón siguiente
    document.getElementById('siguientePregunta').style.display = 'block';
}