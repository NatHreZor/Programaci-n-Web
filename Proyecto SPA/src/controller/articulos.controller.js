import views from '../vistas/articulos.html'

const getArticulo = async() =>{
    const rta = await fetch('https://jsonplaceholder.typicode.com/photos');
    return await rta.json();
         
}
export default async() => {
    var divElement = document.createElement('div');
    divElement.classList = 'text-white';
    divElement.innerHTML = views;

    const galeria = divElement.querySelector('#galeria')

     const articulos = await getArticulo();
     
    articulos.slice(-50).forEach(articulos => {
        galeria.innerHTML += `
    
        <img src="${articulos.url}" alt="${articulos.title}" class="w-25 shadow-1-strong rounded mb-4">
        
        `
    });



    return divElement
}