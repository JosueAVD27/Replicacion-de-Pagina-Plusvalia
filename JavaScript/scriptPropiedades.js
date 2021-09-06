/*No usar etiquetas unicas para dar estilos, prioricen usar las class o id*/
/*Aqui pueden poner lo que quieran pero ordenado y comentado para saber que hacer*/

/*==============Seccion 1==============*/
const btnIzquierdo = document.querySelector("#btn-izquierda");
const btnDerecha = document.querySelector("#btn-derecha");

const slider = document.querySelector("#deslizar");
let sliderSection = document.querySelectorAll(".deslizar-section");

let sliderSectionLast = sliderSection[sliderSection.length -1];

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

//Botones 
btnDerecha.addEventListener("click", function() {
    deslizarDerecha();
});

btnIzquierdo.addEventListener("click", function() {
    deslizarIzquierda();
});

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

/*=============Seccion 2==============*/
const btnIzquierdo2 = document.querySelector("#btn-izquierda2");
const btnDerecha2 = document.querySelector("#btn-derecha2");

const slider2 = document.querySelector("#deslizar2");
let sliderSection2 = document.querySelectorAll(".deslizar-section2");

let sliderSectionLast2 = sliderSection2[sliderSection2.length -1];

slider2.insertAdjacentElement("afterbegin", sliderSectionLast2);

//Botones 
btnDerecha2.addEventListener("click", function() {
    deslizarDerecha2();
});

btnIzquierdo2.addEventListener("click", function() {
    deslizarIzquierda2();
});

//Funcion para deslizar las imganes hacia la derecha
function deslizarDerecha2() {
    let sliderSectionFirst2 = document.querySelectorAll(".deslizar-section2")[0];
    slider2.style.marginLeft = "-200%";
    slider2.style.transition = "all 0.5s";
    setTimeout(function() {
        slider2.style.transition = "none";
        slider2.insertAdjacentElement("beforeend", sliderSectionFirst2);
        slider2.style.marginLeft = "-100%";
    }, 500);
}

//Funcion para deslizar las imganes hacia la izquierda
function deslizarIzquierda2() {
    let sliderSection2 = document.querySelectorAll(".deslizar-section2");
    let sliderSectionLast2 = sliderSection2[sliderSection2.length -1];
    slider2.style.marginLeft = "0";
    slider2.style.transition = "all 0.5s";
    setTimeout(function() {
        slider2.style.transition = "none";
        slider2.insertAdjacentElement("afterbegin", sliderSectionLast2);
        slider2.style.marginLeft = "-100%";
    }, 500);
}

/*Seccion 3*/
const btnIzquierdo3 = document.querySelector("#btn-izquierda3");
const btnDerecha3 = document.querySelector("#btn-derecha3");

const slider3 = document.querySelector("#deslizar3");
let sliderSection3 = document.querySelectorAll(".deslizar-section3");

let sliderSectionLast3 = sliderSection3[sliderSection3.length -1];

slider3.insertAdjacentElement("afterbegin", sliderSectionLast3);

//Botones 
btnDerecha3.addEventListener("click", function() {
    deslizarDerecha3();
});

btnIzquierdo3.addEventListener("click", function() {
    deslizarIzquierda3();
});

//Funcion para deslizar las imganes hacia la derecha
function deslizarDerecha3() {
    let sliderSectionFirst3 = document.querySelectorAll(".deslizar-section3")[0];
    slider3.style.marginLeft = "-200%";
    slider3.style.transition = "all 0.5s";
    setTimeout(function() {
        slider3.style.transition = "none";
        slider3.insertAdjacentElement("beforeend", sliderSectionFirst3);
        slider3.style.marginLeft = "-100%";
    }, 500);
}

//Funcion para deslizar las imganes hacia la izquierda
function deslizarIzquierda3() {
    let sliderSection3 = document.querySelectorAll(".deslizar-section3");
    let sliderSectionLast3 = sliderSection3[sliderSection3.length -1];
    slider3.style.marginLeft = "0";
    slider3.style.transition = "all 0.5s";
    setTimeout(function() {
        slider3.style.transition = "none";
        slider3.insertAdjacentElement("afterbegin", sliderSectionLast3);
        slider3.style.marginLeft = "-100%";
    }, 500);
}

//funciones para la lista desplegable

//Lista1
const changeIcon = document.querySelector('.icon_lista1');

const opciones1 = document.querySelector('#opciones1');
const contenidoSelect1 = document.querySelector('#select1 .contenido_select1');
const inputSelect1 = document.querySelector('#inputSelect1');

select1.addEventListener('click', () => {
    opciones1.classList.toggle('active');
    changeIcon.classList.toggle('fa-chevron-up');
});

document.querySelectorAll('#opciones1 > .opcion1').forEach((opcion1) => {
    opcion1.addEventListener('click', (e1) => {
        e1.preventDefault();
        contenidoSelect1.innerHTML = e1.currentTarget.innerHTML;
        opciones1.classList.toggle('active');
        inputSelect1.value = e1.currentTarget.querySelector('.contenido_opcion1>p').innerText;
    });
});

//Lista2
const changeIcon2 = document.querySelector('.icon_lista2');

const opciones2 = document.querySelector('#opciones2');
const contenidoSelect2 = document.querySelector('#select2 .contenido_select2');
const inputSelect2 = document.querySelector('#inputSelect2');

select2.addEventListener('click', () => {
    opciones2.classList.toggle('active');
    changeIcon2.classList.toggle('fa-chevron-up');
});

document.querySelectorAll('#opciones2 > .opcion2').forEach((opcion2) => {
    opcion2.addEventListener('click', (e2) => {
        e2.preventDefault();
        contenidoSelect2.innerHTML = e2.currentTarget.innerHTML;
        opciones2.classList.toggle('active');
        inputSelect2.value = e2.currentTarget.querySelector('.contenido_opcion2>p').innerText;
    });
});

//Lista 3
const changeIcon3 = document.querySelector('.icon_lista3');

const opciones3 = document.querySelector('#opciones3');
const contenidoSelect3 = document.querySelector('#select3 .contenido_select3');
const inputSelect3 = document.querySelector('#inputSelect3');

select3.addEventListener('click', () => {
    opciones3.classList.toggle('active');
    changeIcon3.classList.toggle('fa-chevron-up');
});

document.querySelectorAll('#opciones3 > .opcion3').forEach((opcion3) => {
    opcion3.addEventListener('click', (e3) => {
        e3.preventDefault();
        contenidoSelect3.innerHTML = e3.currentTarget.innerHTML;
        opciones3.classList.toggle('active');
        inputSelect3.value = e3.currentTarget.querySelector('.contenido_opcion3>p').innerText;
    });
});

//Lista 4
const changeIcon4 = document.querySelector('.icon_lista4');

const opciones4 = document.querySelector('#opciones4');
const contenidoSelect4 = document.querySelector('#select4 .contenido_select4');
const inputSelect4 = document.querySelector('#inputSelect4');

select4.addEventListener('click', () => {
    opciones4.classList.toggle('active');
    changeIcon4.classList.toggle('fa-chevron-up');
});

/*document.querySelectorAll('#opciones4 > .opcion4').forEach((opcion4) => {
    opcion4.addEventListener('click', (e4) => {
        e4.preventDefault();
        contenidoSelect4.innerHTML = e4.currentTarget.innerHTML;
        opciones4.classList.toggle('active');
        inputSelect4.value = e4.currentTarget.querySelector('.contenido_opcion4>p').innerText;
    });
});*/