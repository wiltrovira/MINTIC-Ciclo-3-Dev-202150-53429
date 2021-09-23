const user = document.getElementById('campoNombre')
const password = document.getElementById('campoContraseña')
const correo = document.getElementById('campoCorreo')
const usuario = /[A-Z]/
const pass = /[A-Z]/

function validar_correo {

}

function validar_contrasena_usuario(user, password) {
    user = usuario.test(user.value) && user.value.length > 5 && user.value.length < 12
    password = pass.test(password.value) && password.value.length > 5 && password.value.length < 12
    if (user, password)
        return true
    return false
}
module.exports.validar_correo = validar_correo;
module.exports.validar_contrasena_usuario = validar_contrasena_usuario;