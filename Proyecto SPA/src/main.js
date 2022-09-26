import "bootstrap/dist/css/bootstrap.min.css";
import './main.scss'
import {enrutador} from "./router/index.routes"

enrutador(window.location.hash)

window.addEventListener('hashchange', ()=>{
    enrutador(window.location.hash)
})