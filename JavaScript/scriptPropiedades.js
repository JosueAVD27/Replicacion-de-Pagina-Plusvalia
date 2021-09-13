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

/*Seccion 4*/
const btnIzquierdo4 = document.querySelector("#btn-izquierda4");
const btnDerecha4 = document.querySelector("#btn-derecha4");

const slider4 = document.querySelector("#deslizar4");
let sliderSection4 = document.querySelectorAll(".deslizar-section4");

let sliderSectionLast4 = sliderSection4[sliderSection4.length -1];

slider4.insertAdjacentElement("afterbegin", sliderSectionLast4);

//Botones 
btnDerecha4.addEventListener("click", function() {
    deslizarDerecha4();
});

btnIzquierdo4.addEventListener("click", function() {
    deslizarIzquierda4();
});

//Funcion para deslizar las imganes hacia la derecha
function deslizarDerecha4() {
    let sliderSectionFirst4 = document.querySelectorAll(".deslizar-section4")[0];
    slider4.style.marginLeft = "-200%";
    slider4.style.transition = "all 0.5s";
    setTimeout(function() {
        slider4.style.transition = "none";
        slider4.insertAdjacentElement("beforeend", sliderSectionFirst4);
        slider4.style.marginLeft = "-100%";
    }, 500);
}

//Funcion para deslizar las imganes hacia la izquierda
function deslizarIzquierda4() {
    let sliderSection4 = document.querySelectorAll(".deslizar-section4");
    let sliderSectionLast4 = sliderSection4[sliderSection4.length -1];
    slider4.style.marginLeft = "0";
    slider4.style.transition = "all 0.5s";
    setTimeout(function() {
        slider4.style.transition = "none";
        slider4.insertAdjacentElement("afterbegin", sliderSectionLast4);
        slider4.style.marginLeft = "-100%";
    }, 500);
}

/*Seccion 5*/
const btnIzquierdo5 = document.querySelector("#btn-izquierda5");
const btnDerecha5 = document.querySelector("#btn-derecha5");

const slider5 = document.querySelector("#deslizar5");
let sliderSection5 = document.querySelectorAll(".deslizar-section5");

let sliderSectionLast5 = sliderSection5[sliderSection5.length -1];

slider5.insertAdjacentElement("afterbegin", sliderSectionLast5);

//Botones 
btnDerecha5.addEventListener("click", function() {
    deslizarDerecha5();
});

btnIzquierdo5.addEventListener("click", function() {
    deslizarIzquierda5();
});

//Funcion para deslizar las imganes hacia la derecha
function deslizarDerecha5() {
    let sliderSectionFirst5 = document.querySelectorAll(".deslizar-section5")[0];
    slider5.style.marginLeft = "-200%";
    slider5.style.transition = "all 0.5s";
    setTimeout(function() {
        slider5.style.transition = "none";
        slider5.insertAdjacentElement("beforeend", sliderSectionFirst5);
        slider5.style.marginLeft = "-100%";
    }, 500);
}

//Funcion para deslizar las imganes hacia la izquierda
function deslizarIzquierda5() {
    let sliderSection5 = document.querySelectorAll(".deslizar-section5");
    let sliderSectionLast5 = sliderSection5[sliderSection5.length -1];
    slider5.style.marginLeft = "0";
    slider5.style.transition = "all 0.5s";
    setTimeout(function() {
        slider5.style.transition = "none";
        slider5.insertAdjacentElement("afterbegin", sliderSectionLast5);
        slider5.style.marginLeft = "-100%";
    }, 500);
}

/*Seccion 6*/
const btnIzquierdo6 = document.querySelector("#btn-izquierda6");
const btnDerecha6 = document.querySelector("#btn-derecha6");

const slider6 = document.querySelector("#deslizar6");
let sliderSection6 = document.querySelectorAll(".deslizar-section6");

let sliderSectionLast6 = sliderSection6[sliderSection6.length -1];

slider6.insertAdjacentElement("afterbegin", sliderSectionLast6);

//Botones 
btnDerecha6.addEventListener("click", function() {
    deslizarDerecha6();
});

btnIzquierdo6.addEventListener("click", function() {
    deslizarIzquierda6();
});

//Funcion para deslizar las imganes hacia la derecha
function deslizarDerecha6() {
    let sliderSectionFirst6 = document.querySelectorAll(".deslizar-section6")[0];
    slider6.style.marginLeft = "-200%";
    slider6.style.transition = "all 0.5s";
    setTimeout(function() {
        slider6.style.transition = "none";
        slider6.insertAdjacentElement("beforeend", sliderSectionFirst6);
        slider6.style.marginLeft = "-100%";
    }, 500);
}

//Funcion para deslizar las imganes hacia la izquierda
function deslizarIzquierda6() {
    let sliderSection6 = document.querySelectorAll(".deslizar-section6");
    let sliderSectionLast6 = sliderSection6[sliderSection6.length -1];
    slider6.style.marginLeft = "0";
    slider6.style.transition = "all 0.5s";
    setTimeout(function() {
        slider6.style.transition = "none";
        slider6.insertAdjacentElement("afterbegin", sliderSectionLast6);
        slider6.style.marginLeft = "-100%";
    }, 500);
}

/*Seccion 7*/
const btnIzquierdo7 = document.querySelector("#btn-izquierda7");
const btnDerecha7 = document.querySelector("#btn-derecha7");

const slider7 = document.querySelector("#deslizar7");
let sliderSection7 = document.querySelectorAll(".deslizar-section7");

let sliderSectionLast7 = sliderSection7[sliderSection7.length -1];

slider7.insertAdjacentElement("afterbegin", sliderSectionLast7);

//Botones 
btnDerecha7.addEventListener("click", function() {
    deslizarDerecha7();
});

btnIzquierdo7.addEventListener("click", function() {
    deslizarIzquierda7();
});

//Funcion para deslizar las imganes hacia la derecha
function deslizarDerecha7() {
    let sliderSectionFirst7 = document.querySelectorAll(".deslizar-section7")[0];
    slider7.style.marginLeft = "-200%";
    slider7.style.transition = "all 0.5s";
    setTimeout(function() {
        slider7.style.transition = "none";
        slider7.insertAdjacentElement("beforeend", sliderSectionFirst7);
        slider7.style.marginLeft = "-100%";
    }, 500);
}

//Funcion para deslizar las imganes hacia la izquierda
function deslizarIzquierda7() {
    let sliderSection7 = document.querySelectorAll(".deslizar-section7");
    let sliderSectionLast7 = sliderSection7[sliderSection7.length -1];
    slider7.style.marginLeft = "0";
    slider7.style.transition = "all 0.5s";
    setTimeout(function() {
        slider7.style.transition = "none";
        slider7.insertAdjacentElement("afterbegin", sliderSectionLast7);
        slider7.style.marginLeft = "-100%";
    }, 500);
}

//funciones para la lista desplegable

//Lista Bajo precio
const changeIcon_bajoPrecio = document.querySelector('.icon_bajoPrecio');

const opciones_bajoPrecio = document.querySelector('#opciones_bajoPrecio');
const contenido_bajoPrecio = document.querySelector('#bajoPrecio .contenido_bajoPrecio');
const input_bajoPrecio = document.querySelector('#input_bajoPrecio');

bajoPrecio.addEventListener('click', () => {
    opciones_bajoPrecio.classList.toggle('active');
    changeIcon_bajoPrecio.classList.toggle('fa-chevron-up');
});

document.querySelectorAll('#opciones_bajoPrecio > .opcion_bajoPrecio').forEach((opcion_bajoPrecio) => {
    opcion_bajoPrecio.addEventListener('click', (ebajoPrecio) => {
        ebajoPrecio.preventDefault();
        contenido_bajoPrecio.innerHTML = ebajoPrecio.currentTarget.innerHTML;
        opciones_bajoPrecio.classList.toggle('active');
        input_bajoPrecio.value = ebajoPrecio.currentTarget.querySelector('.contenido_opcion_bajoPrecio>p').innerText;
    });
});

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

//Lista Superficie
const changeIcon_superficie = document.querySelector('.icon_superficie');

const opciones_superficie = document.querySelector('#opciones_superficie');
const contenido_superficie = document.querySelector('#superficie .contenido_superficie');
const input_superficie = document.querySelector('#input_superficie');

superficie.addEventListener('click', () => {
    opciones_superficie.classList.toggle('active');
    changeIcon_superficie.classList.toggle('fa-chevron-up');
});

document.querySelectorAll('#opciones_superficie > .opcion_superficie').forEach((opcion_superficie) => {
    opcion_superficie.addEventListener('click', (e_superficie) => {
        e_superficie.preventDefault();
        contenido_superficie.innerHTML = e_superficie.currentTarget.innerHTML;
        opciones_superficie.classList.toggle('active');
        input_superficie.value = e_superficie.currentTarget.querySelector('.contenido_opcion_superficie>p').innerText;
    });
});