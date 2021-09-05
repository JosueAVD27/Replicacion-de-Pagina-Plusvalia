/*Landa*/
const opcion = document.querySelectorAll('.opcion');

// Permite recorrer cada una de nuestras opciones
opcion.forEach(e => {

    // Añadimos un evento a cada elemento seleccionado
    e.addEventListener('click', function(e){

        // Alteranmos las clases de nuestros enlaces
        const padre = e.target.parentNode;
        padre.children[1].classList.toggle('animation');
        padre.parentNode.children[1].classList.toggle('animation');
    });


});

/*Daniela*/
window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel_lista'), {
        slidesToShow: 4,
        slidesToScroll: 4,
        draggable: true,
        arrows: {
          prev: '.carousel_anterior',
          next: '.carousel_siguiente'
        }
      });
});
