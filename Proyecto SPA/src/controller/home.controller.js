import views from '../vistas/home.html'

export default () => {
    var divElement = document.createElement('div');
    divElement.classList = 'text-white';
    divElement.innerHTML = views;

    return divElement
}