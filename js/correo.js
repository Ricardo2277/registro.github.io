const btnIni=document.querySelector('#btn-env')
btnIni.addEventListener('click',(e)=>{
    e.preventDefault()

    const miEmail=document.querySelector('#correo').value
    emailValido=validarEmail(miEmail)
    if(!emailValido){
        alert('Email incorrecto, teclee un email válido')
        miEmail.focus()
        return
    }
})

function validarEmail(email) {
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }