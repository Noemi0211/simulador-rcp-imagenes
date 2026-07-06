function empezar(){
    document.getElementById("inicio").style.display="none";
    document.getElementById("juego").style.display="block";
}

/* comprobar respuesta */
function comprobar(correcto){

    document.getElementById("juego").style.display="none";
    document.getElementById("resultado").style.display="block";

    if(correcto){
        document.getElementById("mensaje").innerText="✅ Correcto";
    } else {
        document.getElementById("mensaje").innerText="❌ Incorrecto";
    }
}