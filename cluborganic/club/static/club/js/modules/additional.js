function Additional() {

    let lastScroll = 0;
const defaultOffset = 100;
const header = document.querySelector('.header');
//border: none
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('header__hide');

window.addEventListener('scroll', () => {
    if(!(window.matchMedia("(max-width: 576px)").matches) || !(document.querySelector('.header__wrapper').classList.contains('header__wrapper__active'))){
        if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
            //scroll down
            header.classList.add('header__hide');
        }
        else if(scrollPosition() < lastScroll && containHide()){
            //scroll up
            header.classList.remove('header__hide');
        }
    }
    lastScroll = scrollPosition();
});

function DropdownBlock(btn){
    let content = btn.nextSibling.nextSibling ;

    content.style.border ='none';
    if(content.style.maxHeight){
        content.style.maxHeight = null;
    }
    else{
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}


let addTopic = document.querySelector('#addtopic');
    addTopic.addEventListener('click', ()=>{
        DropdownBlock(addTopic);
    });
const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
}
window.addEventListener('resize', appHeight);
appHeight();

function search(inputdata, uldata) {
    let input = document.getElementById(inputdata);
    let filter = input.value.toUpperCase();
    let ul = document.querySelector(uldata);
    let li = ul.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
};

document.addEventListener('keyup',()=> search("inputSearch", ".discussing__main"));


document.getElementById("club").addEventListener("click", function() {
  window.location.hash = "#up";
});

document.getElementById("store").addEventListener("click", function() {
    window.location.hash = "#shop";
  });

    window.addEventListener('scroll', () => { 
        let scrollTop = window.pageYOffset;
    
    let arrowup = document.querySelector('#toTop');
    
    if(scrollTop >= 700 ){
        arrowup.style.display ="block";
    }
    else{    
        arrowup.style.display ="none";
    }
});
}

module.exports = Additional;


