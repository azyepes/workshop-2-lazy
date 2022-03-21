// IntersectionObserver
// Objerva la imagen

let contador2 = 0;

const isIntersecting = (entry) => {
    // 200px lejos de la pantalla -> haz x o y cosa
    return entry.isIntersecting // true (dentro de la pantalla)
}

const loadImage = (entry) => {
    // Encontrar url imagen
    const container = entry.target; // container (div)
    const image = container.firstChild;
    const urlImage = image.dataset.src;

    //Cargar Imagen
    image.src = urlImage;

    // contador1 += 1;
    // console.log(`Imágenes cargadas: ${contador1}`);
    // Cuando ya la registre, necesitamos dejar de hacerlo
    observer.unobserve(container);
}

// Instancia - iniciar la API (IntersectionObserver)
const observer = new IntersectionObserver ( (entries) => {
    let loads = document.querySelectorAll('.m-4');

    if (entries[0].isIntersecting) {
        contador2 += 1;
    }

    console.log(`Total Imágenes: ${loads.length}
Imagenes caragdas: ${contador2}
-------------------------------`);
    entries
        .filter(isIntersecting)
        .forEach(loadImage);

})

export const registerImage = (image) => {
    // IntersectionObserver -> Observer(Image)
    // La función va estar viendo cada imagen creada

    observer.observe(image);
};
