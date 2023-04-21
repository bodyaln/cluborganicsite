// let elem = document.querySelectorAll('.header__nav__active li');
//     elem.forEach(el =>{
//       console.log(el.firstElementChild.style.color = 'red');

//     });


function Header(){
  let sections = document.getElementsByTagName('section');
  window.addEventListener('scroll', function() {
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i]; //dataset.id
      // let elem = document.querySelectorAll('.header__nav__active li');
      if (isAnyPartOfElementInViewport(section)) {
        section.classList.add('active');

        // elem.forEach(el =>{
        //    if(el.dataset.section === section.dataset.section){
        //       el.firstElementChild.style.color = 'red';
        //     }
        // });
  
      } else {
        section.classList.remove('active');
        let elem = document.querySelectorAll('.header__nav__active li'); //firstElementChild
        elem.forEach(el =>{
              el.firstElementChild.style.color = 'black';
        });
      }
    }
  });
  window.addEventListener('scroll',()=>{
    let elem = document.querySelectorAll('.header__nav__active li'); //firstElementChild
    elem.forEach(el =>{
      sections.forEach(sect =>{
        if(sect.classList.contains('active') && el.dataset.section === sect.dataset.section){
          el.firstElementChild.style.color = 'red';
        }
      });
    });
  });
  
  function isAnyPartOfElementInViewport(el) {
  
    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
  
    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
  
    return (vertInView && horInView);
  }
}

module.exports = Header;