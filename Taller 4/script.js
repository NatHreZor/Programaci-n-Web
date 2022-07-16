const form = document.getElementById("Form")

const Name = document.getElementById("Nombre")
const lastname = document.getElementById("lastName")
const iu = document.getElementById("IU")
const password = document.getElementById("Password")
const cpassword = document.getElementById("Cpassword")
const direccion = document.getElementById("Direccion")
const email = document.getElementById("Email")
const number = document.getElementById("Number")
const pais = document.getElementById("Pais")
const parrafo = document.getElementById("Warnings")

/** Validacion de datos  */

form.addEventListener("submit", e=>{

    e.preventDefault()

    let regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    let regexContra1 = /[A-Z]/
    let regexContra2 = /[a-z]/
    let regexContra3 = /[0-9]/
    let entrar = false
    let warnings = "<br>"
    parrafo.innerHTML = " "
    let palabra = ['cll', 'cra', 'av', 'anv', 'trans']
    // Nombre 

    if(Name.value.length > 25 || Name.value.length == 0 ){

        warnings += "El nombre es demasiado largo o corto [1 a 25 carácteres] <br>"
        entrar = true
        console.log("Error en Nombre")
        
    }

    // Apellido
    if(lastname.value.length > 25 || lastname.value.length == 0){

        warnings += "El apellido es demasiado largo o corto [1 a 25 carácteres] <br>"
        entrar = true
        console.log("Error en Apellido")
    }

    // ID Users:

    if(iu.value.length < 9 || iu.value.length > 21){

        warnings += "El Usuario es demasiado largo o corto [10 a 20 carácteres] <br>"
        entrar = true
        console.log("Error en IU")

    }

    // Dirección

    if(direccion.value.length == 0){

        warnings += "La dirección está incompleta <br>"
        entrar = true
        console.log("Error en Direccion")
    } else {
        
        if(!buscarPalabra(direccion, palabra)){

            warnings += "A la dirección le falta: cll, cra, av, anv o trans. <br>"
            entrar = true
            console.log("Error en Direccion")

        } else {
            if(!primeraPalabra(direccion, palabra)){
                
                warnings += "La direccion debe comenzar por: cll, cra, av, anv o trans. <br>"
                entrar = true
                console.log("Error en Direccion")
            
            }

        }

    }

    // Funciones para Direccion

        // Buscar palabra
    function buscarPalabra(direccion, palabra){
        var identificador = false
        let palabras = direccion.value.split(' ');
        for (var i = 0; i < palabras.length; i++){
        for (var j = 0; j < palabra.length; j++){

            if (palabra[j] == palabras[i]){

                identificador = true

            }
        }
        }

        return identificador;
    }

        // Orden de la palabra
    
    function primeraPalabra(direccion, palabra){
        var identificador = false 
        let palabras = direccion.value.split(' ')
        for (var i = 0; i < palabra.length; i++){

            if (palabra[i] == palabras[0]){

                identificador = true

            }
        }
        return identificador
    }



    // Email
    if(!regexEmail.test(email.value)){

        warnings += "El email es inválido <br>"
        entrar = true
        console.log("Error en Email")

    }

    // Contraseña

    if(password.value.length < 15 || password.value.length > 20 ){

        warnings += "La contraseña necesita mínimo 15 caracteres y máximo 20.<br>"
        entrar = true
        console.log("Error en Password")

    }

    if(!regexContra1.test(password.value)){

        warnings += "La contraseña necesita mínimo una mayúscula <br>"
        entrar = true
        console.log("Error en Password2")

    }

    if(!regexContra2.test(password.value)){

        warnings += "La contraseña necesita mínimo una minúscula <br>"
        entrar = true
        console.log("Error en Password 3")
    }

    if(!regexContra3.test(password.value)){

        warnings += "La contraseña necesita mínimo un número <br>"
        entrar = true
        console.log("Error en Password 4")

    }

    if(password.value != cpassword.value){

        warnings += "Las contraseñas no coinciden <br>"
        entrar = true
        console.log("Error en CPassword")

    }

    if(entrar){

        Warnings.innerHTML = warnings
        console.log("Error en Todo")

    } 



})

/* Despliegue de las casillas de gustos del usuario */

function showContent(){
    let checkP = document.getElementById("dig");
    let gudiv = document.getElementById("GUDIV");


    if(checkP.checked){

        gudiv.style.display="block";
    }
    else {
        
        gudiv.style.display="none";


    }

    /*Función encargada de controlar el valor del range*/

    var slider = document.getElementById('valor');
    var selector = document.getElementById('cantidadFav');

    selector.innerHTML = slider.value;

    slider.oninput = function(){

        selector.innerHTML = numberWithCommas(this.value);

    }

/*Esta función se encarga de poner punto o coma a los números*/

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
};

}