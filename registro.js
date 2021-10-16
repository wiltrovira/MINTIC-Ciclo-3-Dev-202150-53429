let arreglo = [];


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
module.exports.almacenarRegistros = almacenarRegistros;
module.exports.ordenarRegistros = ordenarRegistros;