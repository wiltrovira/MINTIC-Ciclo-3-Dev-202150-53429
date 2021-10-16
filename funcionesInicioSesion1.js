let arreglo = [];

// var Id, Nombre, Correo, Conf_correo, Contrasena, Telefono;

function verificarInicioSesion(correo,contrasena){
    for (let i = 0; i < arreglo.length; i++) {


        if(arreglo[i].Correo === correo && arreglo[i].Contrasena === contrasena){
            return true;
        };
        return false;

    };
};


function verificarCaptcha(respuesta){
    return respuesta === (33*43);
};



function almacenarRegistros() {

    let objeto = {
        'nombre': document.getElementById("campoNombre").value,
        'contrasena': document.getElementById("campoContrasena").value,
        'correo': document.getElementById("campoCorreo").value,
        'confirmacionCorreo': document.getElementById("campoConfirmacionCorreo").value,
        'telefonoMovil': document.getElementById("campoTelefono").value
    };
    if (arreglo.length <= 30) {
        arreglo.push(objeto);
    }

}


function ordenarRegistros(args) {
    args.sort((a, b) => a.nombre.localeCompare(b.nombre))
    return args;
}

module.exports.arreglo = arreglo;
module.exports.verificarInicioSesion = verificarInicioSesion;
module.exports.verificarCaptcha = verificarCaptcha;
module.exports.almacenarRegistros = almacenarRegistros();
