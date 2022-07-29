import { registerImage } from './lazy.js'

const linkAleatorio = () => {
    const numAleatorio = Math.floor(Math.random() * 118);
    return `https://randomfox.ca/images/${numAleatorio}.jpg`
}

const addImg = () => {
    const image = document.createElement('img');
    image.className = 'newFox'; 
    image.dataset.src = linkAleatorio();
    const container = document.querySelector('#images');
    container.append(image);
    registerImage(image);
    
}

const clean = (cleaner) => {
    const container = document.querySelector('#images');
    const image = document.querySelectorAll('img'); //obtengo un nodeList
    const imageArray = [...image];
   /*  debugger; */
    imageArray.forEach(element => container.removeChild(element));
    
}

const button = document.querySelector('#add');
button.addEventListener('click', addImg);

const cleaner = document.querySelector('#clean');
cleaner.addEventListener('click', clean);



