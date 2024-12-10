let currentIndex = 0;
const images = document.querySelectorAll('.carrus img');
const totalImages = images.length;

function showNextImage() {
    // Ocultar la imagen actual
    images[currentIndex].classList.remove('active');

    // Incrementar el índice
    currentIndex = (currentIndex + 1) % totalImages;

    // Mostrar la siguiente imagen
    images[currentIndex].classList.add('active');
}

// Cambiar de imagen cada 3 segundos (3000 milisegundos)
setInterval(showNextImage, 3500);