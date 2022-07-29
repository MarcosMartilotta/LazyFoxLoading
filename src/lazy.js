//
const isIntersecting = (entry) => {
    return entry.isIntersecting; //true dentro de la pantalla
}

const loadImage = (entry) => {
    //const container = entry.target; //aca tengo el contenedor, el div
    const imagen = entry.target; //Ya se que dentro de el div el primer hijo es la imagen
    //debugger
    const url = imagen.dataset.src; //Dentro de data en src tengo la urlque le comunique con js
    //debugger;

    //Desrregistra dentro de la pantalla
    imagen.src = url; //ahora si, pongo en el src de mi etiqueta imgan en la url de la imagen;
    observer.unobserve(imagen)

};

//MAs info de la api del viewport en MDN 
const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage);
})

export const registerImage = (imagen) => {
    observer.observe(imagen);
}