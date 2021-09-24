'use strict';

const gallery = document.querySelector('.gallery');
const btn = document.querySelector('.slider__btn');
const mapContainer = document.querySelector('.map');

const cord = [40.7259613, -73.93364];
const cords = {
  wooster: [40.7219635, -74.0033414],
  five825: [40.7670351, -73.970568],
  five277Cords: [40.7455527, -73.9863295],
  unp: [40.7517355, -73.9683118],
  queens: [40.7128744, -73.8798245],
  wtc: [40.7135086, -74.0145361],
  oscar: [40.6773028, -73.9853445],
};
console.log(Object.values(cords));
console.log(Object.keys(cords));

const map = L.map('map').setView(cord, 12);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

Object.values(cords).forEach((cord, i) => {
  L.marker(cord)
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: true,
        closeOnClick: true,
      })
    )
    .setPopupContent(`<button class="button ${i}">Open gallery</button>`);
  // popun event handler
  map.on('popupopen', function () {
    $('.0').click(function () {
      gallery.insertAdjacentHTML('afterbegin', sliderZero);
      nowa();
      slider();
    });
    //
    $('.1').click(function () {
      gallery.insertAdjacentHTML('afterbegin', sliderOne);
      nowa();
      slider();
    });
    $('.2').click(function () {
      gallery.insertAdjacentHTML('afterbegin', sliderTwo);
      nowa();
      slider();
    });
    $('.3').click(function () {
      gallery.insertAdjacentHTML('afterbegin', sliderThree);
      nowa();
      slider();
    });
    $('.4').click(function () {
      gallery.insertAdjacentHTML('afterbegin', sliderFour);
      nowa();
      slider();
    });
    $('.5').click(function () {
      gallery.insertAdjacentHTML('afterbegin', sliderFive);
      nowa();
      slider();
    });
    $('.6').click(function () {
      gallery.insertAdjacentHTML('afterbegin', sliderSix);
      nowa();
      slider();
    });
  });
});

const nowa = function () {
  gallery.style.transition = '2s';
  gallery.style.opacity = '100%';
  btn.style.opacity = '100%';
  btn.style.transition = '1s';
  mapContainer.style.opacity = '0%';
};

//////////////////////////////////////
// Slider

const slider = function () {
  const slides = document.querySelectorAll('.img');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  let curSlide = 0;

  const maxSlide = slides.length;
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      gallery.style.opacity = '0';
      gallery.style.transition = '3s';
      mapContainer.style.opacity = '100%';
      mapContainer.style.transition = '2s';
    }
  });
};

// webp or jpg use picture
const sliderZero = `<div class="slide slide--0">
<picture class="picture">
  <source srcset="img/wooster.1.webp" type="image/webp" />
  <source srcset="img/wooster.1.jpg" type="image/png" />
  <img src="img/wooster.1.jpg" class="img" alt="image Wooster.1" />
</picture>
<picture class="picture">
  <source srcset="img/wooster.2.webp" type="image/webp" />
  <source srcset="img/wooster.2.jpg" type="image/png" />
  <img src="img/wooster.2.jpg" class="img" alt="image Wooster.2" />
</picture>
<picture class="picture">
  <source srcset="img/wooster.3.webp" type="image/webp" />
  <source srcset="img/wooster.3.jpg" type="image/png" />
  <img src="img/wooster.3.jpg" class="img" alt="image Wooster.3" />
</picture>
<picture class="picture">
  <source srcset="img/wooster.4.webp" type="image/webp" />
  <source srcset="img/wooster.4.jpg" type="image/png" />
  <img src="img/wooster.4.jpg" class="img" alt="image Wooster.4" />
</picture>
<picture class="picture">
  <source srcset="img/wooster.5.webp" type="image/webp" />
  <source srcset="img/wooster.5.jpg" type="image/png" />
  <img src="img/wooster.5.jpg" class="img" alt="image Wooster.5" />
</picture>
<picture class="picture">
  <source srcset="img/wooster.6.webp" type="image/webp" />
  <source srcset="img/wooster.6.jpg" type="image/png" />
  <img src="img/wooster.6.jpg" class="img" alt="image Wooster.6" />
</picture>
<picture class="picture">
  <source srcset="img/wooster.7.webp" type="image/webp" />
  <source srcset="img/wooster.7.jpg" type="image/png" />
  <img src="img/wooster.7.jpg" class="img" alt="image Wooster.7" />
</picture>
<picture class="picture">
  <source srcset="img/wooster.8.webp" type="image/webp" />
  <source srcset="img/wooster.8.jpg" type="image/png" />
  <img src="img/wooster.8.jpg" class="img" alt="image Wooster.8" />
</picture>
<picture class="picture">
  <source srcset="img/wooster.9.webp" type="image/webp" />
  <source srcset="img/wooster.9.jpg" type="image/png" />
  <img src="img/wooster.10.jpg" class="img" alt="image Wooster.9" />
</picture>
<picture class="picture">
  <source srcset="img/wooster.10.webp" type="image/webp" />
  <source srcset="img/wooster.10.jpg" type="image/png" />
  <img src="img/wooster.10.jpg" class="img" alt="image Wooster.10" />
</picture>
</div>`;

const sliderOne = `<div class="slide slide--1">
<picture class="picture">
  <source srcset="img/825.1.webp" type="image/webp" />
  <source srcset="img/825.1.jpg" type="image/png" />
  <img src="img/825.1.jpg" class="img" alt="image 825.1" />
<picture class="picture">
  <source srcset="img/825.2.webp" type="image/webp" />
  <source srcset="img/825.2.jpg" type="image/png" />
  <img src="img/825.2.jpg" class="img" alt="image 825.2" />
<picture class="picture">
  <source srcset="img/825.3.webp" type="image/webp" />
  <source srcset="img/825.3.jpg" type="image/png" />
  <img src="img/825.3.jpg" class="img" alt="image 825.3" />
<picture class="picture">
  <source srcset="img/825.4.webp" type="image/webp" />
  <source srcset="img/825.4.jpg" type="image/png" />
  <img src="img/825.4.jpg" class="img" alt="image 825.4" />
<picture class="picture">
  <source srcset="img/825.5.webp" type="image/webp" />
  <source srcset="img/825.5.jpg" type="image/png" />
  <img src="img/825.5.jpg" class="img" alt="image 825.5" />
<picture class="picture">
  <source srcset="img/825.6.webp" type="image/webp" />
  <source srcset="img/825.6.jpg" type="image/png" />
  <img src="img/825.6.jpg" class="img" alt="image 825.6" />
<picture class="picture">
  <source srcset="img/825.7.webp" type="image/webp" />
  <source srcset="img/825.7.jpg" type="image/png" />
  <img src="img/825.7.jpg" class="img" alt="image 825.7" />
<picture class="picture">
  <source srcset="img/825.8.webp" type="image/webp" />
  <source srcset="img/825.8.jpg" type="image/png" />
  <img src="img/825.8.jpg" class="img" alt="image 825.8" />
</picture>
</div>`;

const sliderTwo = `<div class="slide slide--2">
<picture class="picture">
  <source srcset="img/277.1.webp" type="image/webp" />
  <source srcset="img/277.1.jpg" type="image/png" />
  <img src="img/277.1.jpg" class="img" alt="image 277.1" />
</picture>
<picture class="picture">
  <source srcset="img/277.2.webp" type="image/webp" />
  <source srcset="img/277.2.jpg" type="image/png" />
  <img src="img/277.2.jpg" class="img" alt="image 277.2" />
</picture>
<picture class="picture">
  <source srcset="img/277.3.webp" type="image/webp" />
  <source srcset="img/277.3.jpg" type="image/png" />
  <img src="img/277.3.jpg" class="img" alt="image 277.3" />
</picture>
<picture class="picture">
  <source srcset="img/277.4.webp" type="image/webp" />
  <source srcset="img/277.4.jpg" type="image/png" />
  <img src="img/277.4.jpg" class="img" alt="image 277.4" />
</picture>
<picture class="picture">
  <source srcset="img/277.1.webp" type="image/webp" />
  <source srcset="img/277.1.jpg" type="image/png" />
  <img src="img/277.1.jpg" class="img" alt="image 277.1" />
</picture>
<picture class="picture">
  <source srcset="img/277.5.webp" type="image/webp" />
  <source srcset="img/277.5.jpg" type="image/png" />
  <img src="img/277.5.jpg" class="img" alt="image 277.5" />
</picture>
<picture class="picture">
  <source srcset="img/277.6.webp" type="image/webp" />
  <source srcset="img/277.6.jpg" type="image/png" />
  <img src="img/277.6.jpg" class="img" alt="image 277.6" />
</picture>
<picture class="picture">
  <source srcset="img/277.7.webp" type="image/webp" />
  <source srcset="img/277.7.jpg" type="image/png" />
  <img src="img/277.7.jpg" class="img" alt="image 277.7" />
</picture>
<picture class="picture">
  <source srcset="img/277.8.webp" type="image/webp" />
  <source srcset="img/277.8.jpg" type="image/png" />
  <img src="img/277.8.jpg" class="img" alt="image 277.8" />
</picture>
<picture class="picture">
  <source srcset="img/277.9.webp" type="image/webp" />
  <source srcset="img/277.9.jpg" type="image/png" />
  <img src="img/277.9.jpg" class="img" alt="image 277.9" />
</picture>
<picture class="picture">
  <source srcset="img/277.10.webp" type="image/webp" />
  <source srcset="img/277.10.jpg" type="image/png" />
  <img src="img/277.10.jpg" class="img" alt="image 277.10" />
</picture>

</div>`;

const sliderThree = `<div class="slide slide--3">
<picture class="picture">
  <source srcset="img/unp.1.webp" type="image/webp" />
  <source srcset="img/unp.1.jpg" type="image/png" />
  <img src="img/unp.1.jpg" class="img" alt="image unp.1" />
</picture>
<picture class="picture">
  <source srcset="img/unp.2.webp" type="image/webp" />
  <source srcset="img/unp.2.jpg" type="image/png" />
  <img src="img/unp.2.jpg" class="img" alt="image unp.2" />
</picture>
<picture class="picture">
  <source srcset="img/unp.3.webp" type="image/webp" />
  <source srcset="img/unp.3.jpg" type="image/png" />
  <img src="img/unp.3.jpg" class="img" alt="image unp.3" />
</picture>
<picture class="picture">
  <source srcset="img/unp.4.webp" type="image/webp" />
  <source srcset="img/unp.4.jpg" type="image/png" />
  <img src="img/unp.4.jpg" class="img" alt="image unp.4" />
</picture>
<picture class="picture">
  <source srcset="img/unp.5.webp" type="image/webp" />
  <source srcset="img/unp.5.jpg" type="image/png" />
  <img src="img/unp.5.jpg" class="img" alt="image unp.5" />
</picture>
<picture class="picture">
  <source srcset="img/unp.6.webp" type="image/webp" />
  <source srcset="img/unp.6.jpg" type="image/png" />
  <img src="img/unp.6.jpg" class="img" alt="image unp.6" />
</picture>
</div>`;

const sliderFour = `<div class="slide slide--4">
<picture class="picture">
  <source srcset="img/7253.1.webp" type="image/webp" />
  <source srcset="img/7253.1.jpg" type="image/png" />
  <img src="img/7253.1.jpg" class="img" alt="image 7253.1" />
</picture>
<picture class="picture">
  <source srcset="img/7253.2.webp" type="image/webp" />
  <source srcset="img/7253.2.jpg" type="image/png" />
  <img src="img/7253.2.jpg" class="img" alt="image 7253.2" />
</picture>
<picture class="picture">
  <source srcset="img/7253.3.webp" type="image/webp" />
  <source srcset="img/7253.3.jpg" type="image/png" />
  <img src="img/7253.3.jpg" class="img" alt="image 7253.3" />
</picture>
<picture class="picture">
  <source srcset="img/7253.4.webp" type="image/webp" />
  <source srcset="img/7253.4.jpg" type="image/png" />
  <img src="img/7253.4.jpg" class="img" alt="image 7253.4" />
</picture>
<picture class="picture">
  <source srcset="img/7253.5.webp" type="image/webp" />
  <source srcset="img/7253.5.jpg" type="image/png" />
  <img src="img/7253.5.jpg" class="img" alt="image 7253.5" />
</picture>
<picture class="picture">
  <source srcset="img/7253.6.webp" type="image/webp" />
  <source srcset="img/7253.6.jpg" type="image/png" />
  <img src="img/7253.6.jpg" class="img" alt="image 7253.6" />
</picture>
<picture class="picture">
  <source srcset="img/7253.7.webp" type="image/webp" />
  <source srcset="img/7253.7.jpg" type="image/png" />
  <img src="img/7253.7.jpg" class="img" alt="image 7253.7" />
</picture>
<picture class="picture">
  <source srcset="img/7253.8.webp" type="image/webp" />
  <source srcset="img/7253.8.jpg" type="image/png" />
  <img src="img/7253.8.jpg" class="img" alt="image 7253.8" />
</picture>
</div>`;

const sliderFive = `<div class=" slide slide--5">
<picture class="picture">
  <source srcset="img/wtc.1.webp" type="image/webp" />
  <source srcset="img/wtc.1.jpg" type="image/png" />
  <img src="img/wtc.1.jpg" class="img" alt="image wtc.1" />
</picture>
<picture class="picture">
  <source srcset="img/wtc.2.webp" type="image/webp" />
  <source srcset="img/wtc.2.jpg" type="image/png" />
  <img src="img/wtc.2.jpg" class="img" alt="image wtc.2" />
</picture>
<picture class="picture">
  <source srcset="img/wtc.3.webp" type="image/webp" />
  <source srcset="img/wtc.3.jpg" type="image/png" />
  <img src="img/wtc.3.jpg" class="img" alt="image wtc.3" />
</picture>
<picture class="picture">
  <source srcset="img/wtc.4.webp" type="image/webp" />
  <source srcset="img/wtc.4.jpg" type="image/png" />
  <img src="img/wtc.4.jpg" class="img" alt="image wtc.4" />
</picture>
</div>`;

const sliderSix = `<div class="slide slide--6">
<picture class="picture">
  <source srcset="img/oscar.1.webp" type="image/webp" />
  <source srcset="img/oscar.1.jpg" type="image/png" />
  <img src="img/oscar.1.jpg" class="img" alt="image oscar.1" />
</picture>
<picture class="picture">
  <source srcset="img/oscar.2.webp" type="image/webp" />
  <source srcset="img/oscar.2.jpg" type="image/png" />
  <img src="img/oscar.2.jpg" class="img" alt="image oscar.2" />
</picture>
<picture class="picture">
  <source srcset="img/oscar.3.webp" type="image/webp" />
  <source srcset="img/oscar.3.jpg" type="image/png" />
  <img src="img/oscar.3.jpg" class="img" alt="image oscar.3" />
</picture>
<picture class="picture">
  <source srcset="img/oscar.4.webp" type="image/webp" />
  <source srcset="img/oscar.4.jpg" type="image/png" />
  <img src="img/oscar.4.jpg" class="img" alt="image oscar.4" />
</picture>
<picture class="picture">
  <source srcset="img/oscar.5.webp" type="image/webp" />
  <source srcset="img/oscar.5.jpg" type="image/png" />
  <img src="img/oscar.5.jpg" class="img" alt="image oscar.5" />
</picture>
<picture class="picture">
  <source srcset="img/oscar.6.webp" type="image/webp" />
  <source srcset="img/oscar.6.jpg" type="image/png" />
  <img src="img/oscar.6.jpg" class="img" alt="image oscar.6" />
</picture>
</div>`;
