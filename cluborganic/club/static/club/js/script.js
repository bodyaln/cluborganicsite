require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';
import Additional from './modules/additional';
import Buttons from './modules/buttons';
import Cart from './modules/cart';
import cheackForm from './modules/cheackForm';
import Form from './modules/form';
import Media from './modules/media';
import Slider from './modules/slider';
import sliderSwap from './modules/sliderSwap';
import Pagination from './modules/pagination';
import Header from './modules/header';

window.addEventListener("scroll", () => {
    const indicatorBar = document.querySelector(".scroll-indicator-bar");

    const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = (pageScroll / height) * 100;

    indicatorBar.style.width = scrollValue + "%";
  });
    const loadingScreen = document.getElementById('preloader');

    window.addEventListener('load', () => {
      loadingScreen.style.opacity = 0;
      setTimeout(()=>{loadingScreen.style.display = 'none'}, 500);

});


window.addEventListener('DOMContentLoaded', function() {
    Additional();
    Buttons();
    Cart();
    cheackForm();
    Form();
    Pagination();
    Media();
    Slider();  
    sliderSwap();
    Header();
});