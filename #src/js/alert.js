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
});