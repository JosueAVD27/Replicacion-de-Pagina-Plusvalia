//Ejecuta las acciones de las funciones
document.getElementById("btn_registrar").addEventListener("click", register);
document.getElementById("btn_iniciarsesion").addEventListener("click", login);

document.getElementById("logear").addEventListener("click", logear);



//efecto para el registro
var login_registro = document.querySelector(".login_registro");
var formulario_login = document.querySelector(".formulario_login");
var formulario_register = document.querySelector(".formulario_register");
var login_trasero = document.querySelector(".login_trasero");
var registro_trasero = document.querySelector(".registro_trasero");


//funciones par los efectos del login
function login(){
    formulario_register.style.display = "none";
    login_registro.style.left = "10px";
    formulario_login.style.display = "block";
    registro_trasero.style.opacity = "1";
    login_trasero.style.opacity = "0";
}

function register(){
    formulario_register.style.display = "block";
    login_registro.style.left = "410px";
    formulario_login.style.display = "none";
    registro_trasero.style.opacity = "0";
    login_trasero.style.opacity = "1";
}

//funcion para abrir otra ventana del repositorio
function logear(){
        window.open('../index.html');
        window.close('../login.html');
}