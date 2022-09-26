import Home from './home.controller'
import Filosofia from './filosofia.controller'
import Articulos from './articulos.controller'
import Contacto from './contacto.controller'
import Error from './404.controller'

const pagina = {
    home: Home,
    filo: Filosofia,
    art: Articulos,
    cont: Contacto,
    error: Error,



}
export {pagina};