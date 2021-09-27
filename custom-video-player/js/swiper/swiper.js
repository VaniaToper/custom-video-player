const welcomeSwiper = new Swiper('.slider', {
  navigation: {
    nextEl: '.swiper-right',
    prevEl: '.swiper-left',
  },
  pagination: {
    el: '.welcome__slider-pagination',
    clickable: true,
  },
  loop: true,
});
const videoSwiper = new Swiper('.video__slider', {
  pagination: {
    el: '.slider-pagination',
    clickable: true,
  },
  loop: true,
  navigation: {
    nextEl: '.video__swiper-right',
    prevEl: '.video__swiper-left',
  },
  slidesPerView: 3,
  spaceBetween: 42,
  autoHeight: true,
});
const current = document.querySelector('.slider__value-current');
const total = document.querySelector('.slider__value-max');

welcomeSwiper.on('slideChange', () => {
  let currentSlide = ++welcomeSwiper.realIndex;
  current.innerHTML = '0' + currentSlide;
});

// videoSwiper.on('slideChange', () => {
//   let currentVideo = ++videoSwiper.realIndex;
//   video.src = `assets/video/video` + currentVideo + `.mp4`;
//   video.poster = `/assets/Images/video/poster` + currentVideo + `.jpg`;
// });
