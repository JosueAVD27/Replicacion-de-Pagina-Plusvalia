//Ejecuta las acciones de las funciones
document.getElementById("login").addEventListener("click", logear);






//funcion para abrir otra ventana del repositorio
function logear(){
    window.open('../login.html');
    window.close('../index.html');
}