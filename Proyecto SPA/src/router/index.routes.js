import {pagina} from '../controller/index'
var content = document.getElementById('index')

const enrutador = async (ruta) => {
    content.innerHTML = "";
    switch(ruta) {


        case '#/':
            return content.appendChild(pagina.home())
        
        case '#/filosofia':
            return content.appendChild(pagina.filo())
        
        case '#/articulos':
            return content.appendChild(await pagina.art())
        
        case '#/contacto':
            return content.appendChild(pagina.cont())
        
        default:
            return content.appendChild(pagina.error())

    
    }

}
export {enrutador};