let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

// Muestra la primera imagen
slides[currentSlide].classList.add('active');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides; // Cambia el índice
    slides[currentSlide].classList.add('active');
}

// Opcional: Cambiar automáticamente las imágenes cada 3 segundos
setInterval(() => {
    changeSlide(1);
}, 3000);

