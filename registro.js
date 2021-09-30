var DatosRegistro = [];

function almacenarRegistro(){
    var username = document.getElementById("campoNombre").value;
    var password = document.getElementById("campoContraseña").value;
    var email = document.getElementById("campoCorreo").value;
    var telefono = document.getElementById("campoTelefonoMovil").value;
    
    var nuevoRegistro = {
        nombre: username.value,
        contraseña: password.value,
        correo: email.value,
        telefonoMovil: telefono.value,
    };

    console.log(nuevoRegistro); 
    DatosRegistro.push(nuevoRegistro);
}




 /*   myForm.addEventListener("submit",function (event){
        event.preventDefault */