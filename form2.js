const user = document.getElementById('campoNombre')
const password = document.getElementById('campoContraseña')
const correo = document.getElementById('campoCorreo')
const usuario = /[A-Z]/
const pass = /[A-Z]/
const email = /\w+@\w\.+[a-z]/

function validar_correo(correo) {
    correo = email.test(correo.value) && correo.value.length > 15 && correo.value.length < 40
    if (correo)
        return true
    return false
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