let form = document.getElementById("formulario")
let username = document.getElementById("campoNombre")
let password = document.getElementById("campoContraseña")
let email = document.getElementById("campoCorreo")

let telefono = document.getElementById("campoTelefonoMovil")

let datosRegistro = [];

let guardar = form.addEventListener('submit', function(even) {
    even.preventDefault()
    if (datosRegistro.length <= 30) {

        let nuevoRegistro = {
            nombre: username.value,
            contraseña: password,
            correo: email.value,
            telefonoMovil: telefono.value,
        };

        datosRegistro.push(nuevoRegistro);
    }

    form.reset();
});


function almacenarRegistros() {
    guardar
}



function ordenarRegistros(datosRegistro) {

    datosRegistro.sort((a, b) => {
        nombreA = a.nombre.toUpperCase()
        nombreB = b.nombre.toUpperCase()
        if (nombreA > nombreB)
            return 1
        if (nombreA < nombreB)
            return -1

        return 0

    });

    return datosRegistro;
}

module.exports.almacenarRegistros = almacenarRegistros();
module.exports.ordenarRegistros = ordenarRegistros();