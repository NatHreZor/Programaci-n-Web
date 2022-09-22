const nombre = document.getElementById("Name")
const apellido = document.getElementById("LastName")
const fecha = document.getElementById("Date")
const email = document.getElementById("Email")
const usuario = document.getElementById("User")
const contraseña = document.getElementById("Password")
const Ccontraseña = document.getElementById("Cpassword")
const parrafo = document.getElementById("Warnings")
const form = document.getElementById("Form")

const checkP = document.getElementById("Enfermedad");
const checkC = document.getElementById("EnfermedadCheck")
const enfermedadC = document.getElementById("EnfermedadC");
const enfermedadN = document.getElementById("EnfermedadName");


const nombre2 = document.getElementById("Name2")
const apellido2 = document.getElementById("LastName2")
const fecha2 = document.getElementById("Date2")
const email2 = document.getElementById("Email2")
const usuario2 = document.getElementById("User2")
const contraseña2 = document.getElementById("Password2")
const enfermedad2 = document.getElementById("Enfermedad2")
const enfermedadc2 = document.getElementById("EnfermedadC2")
const enfermedadname2 = document.getElementById("EnfermedadName2")

form.addEventListener("submit", e=>{

    e.preventDefault()
    let warnings = "<br>"
    let entrar = false
    let regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    let regexContra1 = /[A-Z]/
    let regexContra2 = /[a-z]/
    let regexContra3 = /[0-9]/
    parrafo.innerHTML = " "
    let checkp = "NO"
    let checkc = "NO"
    let fechan = new Date().getFullYear() - new Date(fecha.value).getFullYear()

    if(nombre.value.length < 3){

        warnings += "El nombre es demasiado corto <br>"
        entrar = true

    }

    if(apellido.value.length < 5){

        warnings += "El apellido es demasiado corto <br>"
        entrar = true

    }

    if(!regexEmail.test(email.value)){

        warnings += "El email es inválido <br>"
        entrar = true

    }

    if(contraseña.value.length < 8){

        warnings += "La contraseña necesita mínimo 8 caracteres <br>"
        entrar = true

    }

    if(!regexContra1.test(contraseña.value)){

        warnings += "La contraseña necesita mínimo una mayúscula <br>"
        entrar = true

    }

    if(!regexContra2.test(contraseña.value)){

        warnings += "La contraseña necesita mínimo una minúscula <br>"
        entrar = true

    }

    if(!regexContra3.test(contraseña.value)){

        warnings += "La contraseña necesita mínimo un número <br>"
        entrar = true

    }

    if(contraseña.value != Ccontraseña.value){

        warnings += "Las contraseñas no coinciden <br>"
        entrar = true

    }

    if(checkP.checked){

        checkp = "SI"

    } 

    if(checkC.checked){

        checkc = "SI"

        if(enfermedadN.value.length < 5){

            warnings += "Ingrese al menos una enfermedad <br>"
            entrar = true
    
        }

    }

    if(entrar){

        parrafo.innerHTML = warnings

    } 
    
    /* Enviar datos */ 

    

    $("#buttomR").on("click", () => {

    nombre2.innerHTML = nombre.value
    apellido2.innerHTML = apellido.value
    fecha2.innerHTML = fechan
    email2.innerHTML = email.value
    usuario2.innerHTML = usuario.value
    contraseña2.innerHTML = contraseña.value
    enfermedad2.innerHTML = checkp
    enfermedadc2.innerHTML = checkc
    enfermedadname2.innerHTML = enfermedadN.value
    
    
    
    });
    
})

/* Despliegue de las casillas enfermedades */

function showContent(){

    if(checkP.checked){

        enfermedadC.style.display="block";

    }
    else {
        
        enfermedadC.style.display="none";
        $("#EnfermedadCheck").prop("checked", false);
        
    }

    if(checkC.checked){

        enfermedadN.style.display="block";

    }
    else {
        
        enfermedadN.style.display="none";
        
    }

}

