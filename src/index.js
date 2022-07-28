import { registerImage } from './lazy.js'

const linkAleatorio = () => {
    const numAleatorio = Math.floor(Math.random() * 118);
    return `https://randomfox.ca/images/${numAleatorio}.jpg`
}

const addImg = () => {
    const image = document.createElement('img');
    image.dataset.src = linkAleatorio();
    const container = document.querySelector('#images');
    container.append(image);
    registerImage(image);
}


const button = document.querySelector('#add');

button.addEventListener('click', addImg);



