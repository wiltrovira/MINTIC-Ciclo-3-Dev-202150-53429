var DatosRegistro = [];

function almacenarRegistro() {
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

function ordenarRegistros(DatosRegistro) {

    DatosRegistro.sort((a, b) => {

        if (a.nombre.toLowelcase > b.nombre.toLowerCase)
            return DatosRegistro
        if (a.nombre < b.nombre)
            return DatosRegistro

        return DatosRegistro

    });
}


/*   myForm.addEventListener("submit",function (event){
       event.preventDefault */