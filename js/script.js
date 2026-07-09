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
        "Diabetes o hipoglucemia",
        "Vejez",
        "Embarazo"
    ],
    "Escenarios especiales": [
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
    ...respuestasPorCategoria["Escenarios especiales"]
];

const casos = [
    {
        numero: 19,
        categoria: "4H",
        diagnostico: "Hipertermia",
        sintomas: "piel caliente y roja, sudoración intensa, temperatura corporal elevada y confusión",
        protocolo: "enfriamiento activo, hidratación y soporte vital avanzado según algoritmo de arritmias",
        descripcion: "El caso 19 corresponde a un cuadro de hipertermia por el contexto clínico y la presentación del paciente.",
        feedbackIncorrecto: "La respuesta correcta es Hipertermia. Este paciente presenta signos compatibles con sobrecalentamiento y desregulación térmica."
    }
];

const casoActual = casos[0];

function renderRespuestas() {
    const categoria = document.getElementById("categoria").value;
    const respuestasDiv = document.getElementById("respuestas");
    const respuestas = respuestasPorCategoria[categoria] || [];

    respuestasDiv.innerHTML = respuestas.map(respuesta => {
        const esCorrecta = respuesta === casoActual.diagnostico;
        return `<button onclick="comprobar(${esCorrecta})">${respuesta}</button>`;
    }).join('');
}

function empezar(){
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