const exploreInput = document.querySelector('.explore__input');
const foregroundImage = document.querySelector('.slider__foreground-img');
exploreInput.addEventListener('mousemove', (e) => {
  foregroundImage.style.width = `${exploreInput.value}` + '%';
});
