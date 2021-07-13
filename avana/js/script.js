// alert('Hello world');

$(document).ready(function () {
   $('.main__slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      fade: true,
      cssEase: 'linear'
   });
<<<<<<< HEAD
});;
=======
});


function headerHidden() {
   let posWindow = 0;
   window.addEventListener('scroll', function () {
      let pos = document.getElementById('anchor').getBoundingClientRect();
      let posWindow2 = pos.y;
      if (posWindow < posWindow2) {
         document.querySelector('.header').classList.remove('header__fixed')
      } else {
         document.querySelector('.header').classList.add('header__fixed')
      }
      posWindow = posWindow2;
   })
}
headerHidden();;
>>>>>>> origin/tim

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});