/*No usar etiquetas unicas para dar estilos, prioricen usar las class o id*/

const slider = document.querySelector("#deslizar");
let sliderSection = document.querySelectorAll(".deslizar-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];
const btnIzquierdo = document.querySelector("#btn-izquierda");
const btnDerecha = document.querySelector("#btn-derecha");
slider.insertAdjacentElement("afterbegin", sliderSectionLast);

//Funcion para deslizar las imganes hacia la derecha
function deslizarDerecha() {
    let sliderSectionFirst = document.querySelectorAll(".deslizar-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

//Funcion para deslizar las imganes hacia la izquierda
function deslizarIzquierda() {
    let sliderSection = document.querySelectorAll(".deslizar-section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

//Botones 
btnDerecha.addEventListener("click", function() {
    deslizarDerecha();
});

btnIzquierdo.addEventListener("click", function() {
    deslizarIzquierda();
});

