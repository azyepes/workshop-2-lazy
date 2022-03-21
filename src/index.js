import { registerImage } from "./lazy";

const BASE_URL = 'https://randomfox.ca';

// ramdon images
const min = 1;
const max = 124;
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
const getRandomInt = () => Math.floor(Math.random() * (max - min)) + min; 


// crear (1) imagen
// agregar #imagen

const createImageNode = () => {

    const container = document.createElement('div');
        container.className = 'm-4 rounded-md';
        container.style.width = '220px';
        // container.style.height = '100px';
        container.style.backgroundColor = 'grey';
    
    const image = document.createElement('img');
        image.className = 'mx-auto rounded-md';
        image.width = '220';
        image.dataset.src = `${BASE_URL}/images/${getRandomInt()}.jpg`; //to do
    
    container.appendChild(image);

    return container;
}

// const newImage = createImageNode();
// Montaje de nodo en div principal 'app'
const mountNode = document.getElementById('app');

// Agregando botón de nuevas imagenes
const addButton = document.getElementById('add');

// Acción para el botón
const addImage = () => {
    const newImage = createImageNode(); //genera imagen
    mountNode.append(newImage); // renderiza imagen
    registerImage(newImage); // Registrar imagen importando función desde lazy.js
};

// Evento para agregar imagen aleatoria
addButton.addEventListener('click', addImage);

// Botón de limpiar
const clearButton = document.getElementById('clear');

// Acción para limpiar pantalla
const clearScreen = () => {
    const removeAllImage = document.querySelectorAll('.m-4');

    for (let i = 0; i < removeAllImage.length; i++) {
        removeAllImage[i].remove();
    }
};

// Evento para limpiar pantalla
clearButton.addEventListener('click', clearScreen);