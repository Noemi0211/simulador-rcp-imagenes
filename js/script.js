const respuestasPorCategoria = {
    "4H": [
        "Hipoxia",
        "Hipertermia",
        "Hipotermia",
        "Hipovolemia",
        "Hipo/hipercalemia"
    ],
    "4T": [
        "Neumotórax a tensión",
        "Taponamiento cardiaco",
        "Trombosis coronaria",
        "Trombosis pulmonar",
        "Tóxicos"
    ],
    "Pacientes especiales": [
        "Asma",
        "Obesidad",
        "Diabetes - Hipoglucemia",
        "Vejez",
        "Embarazo"
    ],
    "Entornos especiales": [
        "Parada traumática",
        "Actividades deportivas",
        "Ahogamiento",
        "Avalancha y mal de altura",
        "Electrocución",
        "Fulguración"
    ]
};

respuestasPorCategoria["Miscelánea"] = [
    ...respuestasPorCategoria["4H"],
    ...respuestasPorCategoria["4T"],
    ...respuestasPorCategoria["Pacientes especiales"],
    ...respuestasPorCategoria["Entornos especiales"]
];

const casos = [
    {
        numero: 1,
        categoria: "Entornos especiales",
        diagnostico: "Parada traumática",
        sintomas: "Hemorragia masiva, signos de shock",
        protocolo: "Control de hemorragias y apertura de vía aérea",
        imagen: "img/caso01.PNG"
    },
    {
        numero: 2,
        categoria: "4T",
        diagnostico: "Trombosis coronaria",
        sintomas: "Dolor torácico opresivo, náuseas",
        protocolo: "Aspirina si está consciente y puede hacerlo por sí mismo y algoritmo SVB estándar en caso de PCR",
        imagen: "img/caso02.PNG"
    },
    {
        numero: 3,
        categoria: "4H",
        diagnostico: "Hipoxia",
        sintomas: "Disnea, cianosis peribucal y ungueal",
        protocolo: "Apertura de vía aérea y ventilación de rescate",
        imagen: "img/caso03.PNG"
    },
    {
        numero: 4,
        categoria: "4T",
        diagnostico: "Neumotórax a tensión",
        sintomas: "Disnea, desviación traqueal",
        protocolo: "Alertar rápidamente para traslado de emergencia, en entorno táctico considerar descompresión",
        imagen: "img/caso04.PNG"
    },
    {
        numero: 5,
        categoria: "Pacientes especiales",
        diagnostico: "Obesidad",
        sintomas: "Signos estándar de PCR",
        protocolo: "RCP estándar con cambios frecuentes de reanimador",
        imagen: "img/caso05.PNG"
    },
    {
        numero: 6,
        categoria: "Entornos especiales",
        diagnostico: "Electrocución",
        sintomas: "Quemaduras entrada/salida",
        protocolo: "Garantizar seguridad (desconectar fuente eléctrica) y uso precoz del DESA",
        imagen: "img/caso06.PNG"
    },
    {
        numero: 7,
        categoria: "4H",
        diagnostico: "Hipovolemia",
        sintomas: "Piel fría, pálida, signos de shock",
        protocolo: "Posición antishock y control de causa (hemostasia si causa hemorrágica)",
        imagen: "img/caso07.PNG"
    },
    {
        numero: 8,
        categoria: "Entornos especiales",
        diagnostico: "Ahogamiento",
        sintomas: "Cianosis, inconsciente sin respiración normal",
        protocolo: "5 ventilaciones iniciales y RCP estándar. Secar el pecho y alejar del agua antes de utilizar el DESA",
        imagen: "img/caso08.PNG"
    },
    {
        numero: 9,
        categoria: "Pacientes especiales",
        diagnostico: "Embarazo",
        sintomas: "Inconsciencia en mujer gestante",
        protocolo: "Desplazamiento uterino manual y RCP estándar si entra en PCR",
        imagen: "img/caso09.PNG"
    },
    {
        numero: 10,
        categoria: "4H",
        diagnostico: "Hipo/hipercalemia y trastornos metabólicos",
        sintomas: "Arritmias, confusión o convulsiones",
        protocolo: "Ante PCR, realizar RCP estándar y alertar a SVA",
        imagen: "img/caso10.PNG"
    },
    {
        numero: 11,
        categoria: "4T",
        diagnostico: "Trombosis pulmonar",
        sintomas: "Disnea progresiva, dolor pleurítico, hemoptisis",
        protocolo: "Aspirina si está consciente y puede hacerlo por sí mismo y algoritmo SVB estándar en caso de PCR",
        imagen: "img/caso11.PNG"
    },
    {
        numero: 12,
        categoria: "Entornos especiales",
        diagnostico: "Fulguración",
        sintomas: "Arborescencias cutáneas",
        protocolo: "Uso precoz del DESA",
        imagen: "img/caso12.PNG"
    },
    {
        numero: 13,
        categoria: "4H",
        diagnostico: "Hipotermia",
        sintomas: "Disminución de temperatura corporal < 35ºC",
        protocolo: "Evitar pérdida de calor",
        imagen: "img/caso13.PNG"
    },
    {
        numero: 14,
        categoria: "4T",
        diagnostico: "Tóxicos",
        sintomas: "Pupilas puntiformes, depresión respiratoria",
        protocolo: "Garantizar la propia seguridad y alertar SVA",
        imagen: "img/caso14.PNG"
    },
    {
        numero: 15,
        categoria: "Pacientes especiales",
        diagnostico: "Vejez",
        sintomas: "Signos estándar de PCR",
        protocolo: "RCP estándar",
        imagen: "img/caso15.PNG"
    },
    {
        numero: 16,
        categoria: "Entornos especiales",
        diagnostico: "Avalancha",
        sintomas: "Hipoxia e hipotermia",
        protocolo: "Valorar tiempo de enterramiento",
        imagen: "img/caso16.PNG"
    },
    {
        numero: 17,
        categoria: "Pacientes especiales",
        diagnostico: "Asma",
        sintomas: "Disnea, tos, sibilancias",
        protocolo: "Usar su propio inhalador y valorar la administración de oxígeno",
        imagen: "img/caso17.PNG"
    },
    {
        numero: 18,
        categoria: "Entornos especiales",
        diagnostico: "Actividad deportiva",
        sintomas: "Colapso súbito, posibilidad de respiración agónica y/o convulsiones",
        protocolo: "Uso inmediato del DESA",
        imagen: "img/caso18.PNG"
    },
    {
        numero: 19,
        categoria: "4H",
        diagnostico: "Hipertermia",
        sintomas: "Ambiente caluroso, piel caliente, confusión",
        protocolo: "Enfriamiento activo",
        imagen: "img/caso19.png"
    },
    {
        numero: 20,
        categoria: "4T",
        diagnostico: "Taponamiento cardiaco",
        sintomas: "Shock con ingurgitación yugular",
        protocolo: "Alertar sobre el mecanismo de la lesión, comenzar RCP estándar mientras llega SVA",
        imagen: "img/caso20.PNG"
    },
    {
        numero: 21,
        categoria: "Pacientes especiales",
        diagnostico: "Diabetes - Hipoglucemia",
        sintomas: "Confusión, psicosis, temblores, sudoración, palpitaciones o convulsiones",
        protocolo: "Administrar glucosa de forma oral si consciente. Iniciar RCP estándar si entra en PCR",
        imagen: "img/caso21.PNG"
    }
];

casos.forEach(caso => {
    if (typeof caso.categoria === 'string') {
        caso.categoria = caso.categoria.trim();
    }
    if (typeof caso.diagnostico === 'string') {
        caso.diagnostico = caso.diagnostico.trim();
    }
});

let casoActual = null;
const casosUsados = cargarCasosUsados();
let categoriaSeleccionadaJuego = null;

function guardarCasosUsados() {
    sessionStorage.setItem("casosUsados", JSON.stringify(casosUsados));
}

function cargarCasosUsados() {
    const datos = sessionStorage.getItem("casosUsados");
    if (!datos) {
        return [];
    }

    try {
        const parsed = JSON.parse(datos);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        return [];
    }
}

const categoriasValidas = new Set([
    "4H",
    "4T",
    "Pacientes especiales",
    "Entornos especiales",
    "Miscelánea"
]);

function normalizarCategoria(categoria) {
    const valor = typeof categoria === 'string' ? categoria.trim() : "";
    return categoriasValidas.has(valor) ? valor : "Miscelánea";
}

function obtenerCasosPorCategoria(categoria) {
    const categoriaValida = normalizarCategoria(categoria);

    if (categoriaValida === "Miscelánea") {
        return casos;
    }

    return casos.filter(caso => caso.categoria === categoriaValida);
}

function obtenerCasosDisponibles(categoria) {
    const categoriaValida = normalizarCategoria(categoria);
    const disponibles = obtenerCasosPorCategoria(categoriaValida)
        .filter(caso => !casosUsados.includes(caso.numero));

    if (disponibles.length === 0) {
        const numerosCategoria = new Set(obtenerCasosPorCategoria(categoriaValida).map(caso => caso.numero));

        for (let i = casosUsados.length - 1; i >= 0; i--) {
            if (numerosCategoria.has(casosUsados[i])) {
                casosUsados.splice(i, 1);
            }
        }

        guardarCasosUsados();
        return obtenerCasosPorCategoria(categoriaValida);
    }

    return disponibles;
}

function marcarCasoComoUsado(caso) {
    if (!casosUsados.includes(caso.numero)) {
        casosUsados.push(caso.numero);
        guardarCasosUsados();
    }
}

function escogerCasoAleatorio(categoria) {
    const opciones = obtenerCasosDisponibles(categoria);
    const caso = opciones[Math.floor(Math.random() * opciones.length)];
    marcarCasoComoUsado(caso);
    return caso;
}

function renderRespuestas() {
    const respuestasDiv = document.getElementById("respuestas");
    const respuestas = (categoriaSeleccionadaJuego === "Miscelánea"
        ? respuestasPorCategoria["Miscelánea"]
        : respuestasPorCategoria[casoActual.categoria]) || [];

    const options = respuestas.map(r => `<option value="${r}">${r}</option>`).join('');
    respuestasDiv.innerHTML = `
        <select id="respuestasSelect" onchange="document.getElementById('enviarRespuesta').disabled = this.value === ''">
            <option value="">Elige una opción</option>
            ${options}
        </select>
        <button id="enviarRespuesta" disabled onclick="comprobar(document.getElementById('respuestasSelect').value === casoActual.diagnostico)">Enviar</button>
    `;
}

function empezar(){
    const categoriaSeleccionada = document.getElementById("categoria").value;
    const categoriaNormalizada = normalizarCategoria(categoriaSeleccionada);

    categoriaSeleccionadaJuego = categoriaNormalizada;
    casoActual = escogerCasoAleatorio(categoriaNormalizada);

    document.getElementById("categoriaActual").innerText = `Categoría: ${categoriaNormalizada}`;

    const imagenJuego = document.querySelector(".juego-columna.izquierda img");
    imagenJuego.src = casoActual.imagen;
    imagenJuego.alt = `Imagen del caso clínico ${casoActual.numero} - ${casoActual.diagnostico}`;

    renderRespuestas();
    document.getElementById("inicio").style.display="none";
    document.getElementById("juego").style.display="block";
}

function comprobar(correcto){

    document.getElementById("juego").style.display="none";
    document.getElementById("resultado").style.display="block";

    const mensaje = document.getElementById("mensaje");
    const textoResultado = document.getElementById("textoResultado");

    if(correcto){
        mensaje.innerText = "✅ ¡Tu respuesta es correcta!";
        textoResultado.innerText = `Efectivamente se trata de ${casoActual.diagnostico}.\nSus signos y síntomas son: ${casoActual.sintomas}.\nEl protocolo de actuación es: ${casoActual.protocolo}.`;
    } else {
        mensaje.innerText = "❌ Lo siento, esa no es la respuesta correcta.";
        textoResultado.innerText = `El diagnóstico correcto es: ${casoActual.diagnostico}.\nSe caracteriza por: ${casoActual.sintomas}.\nTú has seleccionado una opción incorrecta que no corresponde con estos signos clínicos.`;
    }
}