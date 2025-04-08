let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function mostrarSlide(index) {
    if (index >= slides.length) { slideIndex = 0; }
    if (index < 0) { slideIndex = slides.length - 1; }

    document.querySelector(".carousel-images").style.transform = `translateX(-${slideIndex * 100}vw)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");
}

function mudarSlide(n) {
    slideIndex += n;
    mostrarSlide(slideIndex);
}

function irParaSlide(n) {
    slideIndex = n;
    mostrarSlide(slideIndex);
}

// Troca automática de slides a cada 5 segundos
setInterval(() => mudarSlide(1), 5000);

// Inicializa o carrossel
mostrarSlide(slideIndex);
