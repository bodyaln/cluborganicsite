function Slider(){
    const images = document.querySelectorAll('.promo__slide');
const sliderLine = document.querySelector('.promo__slider-inner');
let count = 0;
let width;

function init() {
    width = document.querySelector('.promo__slider-wrapper').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.promo__slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.promo__slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}
}
module.exports = Slider;
