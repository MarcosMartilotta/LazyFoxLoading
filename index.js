import { registerImage } from './lazy.js'

const linkAleatorio = () => {
    const numAleatorio = Math.floor(Math.random() * (117 - 1) + 1);
    return `https://randomfox.ca/images/${numAleatorio}.jpg`
}

const addImg = () => {
    const image = document.createElement('img');
    image.className = 'newFox'; 
    image.dataset.src = linkAleatorio();
    const container = document.querySelector('#images');
    container.append(image);
    appendImages++;
    /* debugger; */
    printTotal(appendImages, loadImages);
    registerImage(image);

}

const clean = (cleaner) => {
    const container = document.querySelector('#images');
    const image = document.querySelectorAll('img'); //obtengo un nodeList
    const imageArray = [...image];
   /*  debugger; */
    imageArray.forEach(element => container.removeChild(element));
    
}

/* export const printTotal = (appendImages, loadImages) => {
    console.log(`⚪ Se han agregado ${appendImages} imagenes`)
    console.log(`🟣 Se han cargado ${loadImages} imagenes`)
    console.log(`------------------------------------------`)
} */
const button = document.querySelector('#add');
button.addEventListener('click', addImg);

const cleaner = document.querySelector('#clean');
cleaner.addEventListener('click', clean);

/* let appendImages = 0;
let loadImages = 0; */


