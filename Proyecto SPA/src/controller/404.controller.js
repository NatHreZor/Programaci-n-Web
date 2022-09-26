import views from '../vistas/404.html'

export default () => {
    var divElement = document.createElement('div');
    divElement.classList = 'text-white';
    divElement.innerHTML = views;

    return divElement
}