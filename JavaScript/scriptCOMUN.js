//Esta hoja de script es solo para aquiellos elementos que se repiten en todas las hojas del html para ahorrar codigo

//Ejecuta las acciones de las funciones
document.getElementById("login").addEventListener("click", logear);


//funcion para abrir otra ventana del repositorio
function logear(){
    window.open('../login.html');
    window.close('../index.html');
}