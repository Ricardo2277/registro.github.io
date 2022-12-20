const correo = document.querySelector('#correo');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const pais = document.querySelector('#pais');
const usuario = document.querySelector('#usuario');

const btnEnviar = document.querySelector('#btn-env');
//const miForm = document.querySelector('#contactForm');
/* console.log(correo)
console.log(password)
console.log(password2)
console.log(pais)
console.log(usuario)
console.log(btnEnviar) */

cargarEventos();

function cargarEventos(){
    btnEnviar.addEventListener('click', validarDatos);
    usuario.addEventListener('blur', validarUsuario);
}

//función para Validar Nombre
function validarUsuario(){
    console.log('Validando el nombre');
}

function validarDatos(evt){
    evt.preventDefault();
    //console.log(claveUno.value, claveDos.value);
    if (password.value === password2.value){
        if (password.value.length >= 8){
            alert("Todo bien");
            enviarDatos();
        }else{
            alert("La Contraseña debe ser al menos de 8 caracteres");
            password.focus();
        }
        
    }else{
        alert('Las contraseñas deben ser iguales');
    }
}

function enviarDatos(){

    url = `http://localhost:4000/api/clientes/registrar`;

    fetch(url,{
                method: 'POST',

                headers: { "Content-Type": "application/json", },

                body: JSON.stringify({
                    ciudadCliente:pais.value,
                    nombreUsuario:usuario.value,
                    correoElectronicoUsuario:correo.value,
                    contrasenaUsuario:password.value})

        })
        .then( respuesta => {
            console.log('Hubo respuesta')
            return respuesta.json();
        } )
        .then( resultado => {
            console.log(resultado)
            alert(resultado.mensaje);
        })
}