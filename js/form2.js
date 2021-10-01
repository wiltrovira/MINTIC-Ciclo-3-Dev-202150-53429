//const user = document.getElementById('campoNombre')
//const password = document.getElementById('campoContraseña')
//const correo = document.getElementById('campoCorreo')
//const usuario = /[A-Z]/
//const pass = /[A-Z]/
//const email = /\w+@\w\.+[a-z]/


// console.log(validar_correo("wrovira@gmail.com"));
// console.log(validar_contrasena_usuario("wilt","Password"));


/**
 * validar_correo
 * @param {*} correo 
 * @returns 
 */
function validar_correo(correo) {
    // if (correo.length <15 || correo.length>40 ){
    //     return false;
    // }


    if (correo.length > 14 && correo.length < 41 && (correo.endsWith('.com') || correo.endsWith('.es') || correo.endsWith('.co') ||
            correo.endsWith('.org')) && correo.includes('@')) {
        return true;
    }

    // && 


    // var expresionregular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // if (correo.match(expresionregular)){
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return false
}

/**
 * validar_contrasena_usuario
 * @param {*} user 
 * @param {*} password 
 * @returns 
 */
function validar_contrasena_usuario(pass, usuario) {
    //user = usuario.test(user.value) && user.value.length > 5 && user.value.length < 12
    // if (user.length <6 || user.length>12){
    //     return false;
    // }

    //password = pass.test(password.value) && password.value.length > 5 && password.value.length < 12
    if (typeof pass !== 'string' || typeof usuario !== 'string') {
        return false;
    }

    if (usuario.length >= 6 && usuario.length <= 12 && usuario.charAt(0) === usuario.charAt(0).toUpperCase() &&
        pass.length >= 6 && pass.length <= 12 && pass.charAt(0) === pass.charAt(0).toUpperCase()) {
        return true;
    }

    return false;


    // if (user, password)
    //     return true
    // return false
}
module.exports.validar_correo = validar_correo;
module.exports.validar_contrasena_usuario = validar_contrasena_usuario;