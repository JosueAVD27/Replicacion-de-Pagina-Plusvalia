//Ejecuta las acciones de las funciones
document.getElementById("btn_propiedades").addEventListener("click", propiedades);

//Seccion 4
document.getElementById("btn_populares_menos").addEventListener("click", ocultarPopulares);
document.getElementById("btn_populares").addEventListener("click", mostrarPopulares);

document.getElementById("btn_venta_menos").addEventListener("click", ocultarVenta);
document.getElementById("btn_venta").addEventListener("click", mostrarVenta);

document.getElementById("btn_alquiler_menos").addEventListener("click", ocultarAlquiler);
document.getElementById("btn_alquiler").addEventListener("click", mostrarAlquiler);

document.getElementById("btn_zonas_menos").addEventListener("click", ocultarZonas);
document.getElementById("btn_zonas").addEventListener("click", mostrarZonas);


//variables de la seccion 4
var label_populares = document.querySelector(".label_populares");
var label_populares_menos = document.querySelector(".label_populares_menos");

var label_venta = document.querySelector(".label_venta");
var label_venta_menos = document.querySelector(".label_venta_menos");

var label_alquiler = document.querySelector(".label_alquiler");
var label_alquiler_menos = document.querySelector(".label_alquiler_menos");

var label_zonas = document.querySelector(".label_zonas");
var label_zonas_menos = document.querySelector(".label_zonas_menos");

//funcion para ir a las propieades
function propiedades(){
    window.open('../propiedades.html');
    window.close('../index.html');
}

//funcion para la seccion 4
function ocultarPopulares(){
    label_populares.style.display = "block";
    label_populares_menos.style.display = "none";
}

function mostrarPopulares(){
    label_populares.style.display = "none";
    label_populares_menos.style.display = "block";
}

function ocultarVenta(){
    label_venta.style.display = "block";
    label_venta_menos.style.display = "none";
}

function mostrarVenta(){
    label_venta.style.display = "none";
    label_venta_menos.style.display = "block";
}

function ocultarAlquiler(){
    label_alquiler.style.display = "block";
    label_alquiler_menos.style.display = "none";
}

function mostrarAlquiler(){
    label_alquiler.style.display = "none";
    label_alquiler_menos.style.display = "block";
}

function ocultarZonas(){
    label_zonas.style.display = "block";
    label_zonas_menos.style.display = "none";
}

function mostrarZonas(){
    label_zonas.style.display = "none";
    label_zonas_menos.style.display = "block";
}

//botones
function onclick(event) {
    mueve('avance')
}