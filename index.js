
const slides = Array.from(document.querySelectorAll('.slider-piece'));
let counter = 0;
let currentSlide = slides[0];

const nextSlide = () => {
    currentSlide.classList.remove('current')
    if(counter === slides.length - 1 ) {
        counter = 0;
    } else {
        counter++;
    }
    currentSlide = slides[counter];
    currentSlide.classList.add('current');
}

const previousSlide = () => {
    currentSlide.classList.remove('current');
    if(counter === 0) {
        counter = slides.length - 1;
    } else {
        counter--;
    }
    currentSlide = slides[counter];
    currentSlide.classList.add('current');
}