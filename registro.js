// console.log("ejecutando registros");

var registros = [];

var myForm = document.getElementById("formulario-registro");

var usuario = document.getElementById("campoNombre");
var contrasena = document.getElementById("campoContraseña");
var correo = document.getElementById("campoCorreo");
var telefono = document.getElementById("campoTelefonoMovil");


myForm.addEventListener("submit", function(event){
    event.preventDefault();
    
    // console.log("clic presionado");
    almacenarRegistros();
});


//Función para almacenar registros
function almacenarRegistros(){
    // console.log("entro a almacenarRegistros()...");

    var nuevoRegistro = {
        "campoNombre": usuario.value,
        "campoContraseña": contrasena.value,
        "campoCorreo": correo.value,
        "campoTelefonoMovil": telefono.value
    };

    if (registros.length <30){
        registros.push(nuevoRegistro);
        return true;
    }else{
        return false;
    } 
}


// Función para ordenar registros
function ordenarRegistros(args){


}

// almacenarRegistros();

module.exports.registros = registros;
module.exports.almacenarRegistros = almacenarRegistros();
module.exports.ordenarRegistros = ordenarRegistros();
