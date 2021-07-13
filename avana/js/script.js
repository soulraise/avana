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
headerHidden();

$(document).ready(function () {
   $('.related__items').slick({
      dots: false,
      infinite: true,
      arrows: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,

            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   });
});;

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