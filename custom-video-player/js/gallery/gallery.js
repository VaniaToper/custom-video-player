import { images } from './gallery-images.js';

const pictureInnerContainer = document.querySelector(
  '.picture-inner-container'
);

const galleryArr = images.map((img) => {
  const content = document.createElement('img');
  content.classList.add('gallery-img');
  content.src = img.src;
  content.alt = img.alt;
  return content;
});

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(galleryArr);
galleryArr.map((x) => {
  pictureInnerContainer.append(x);
});

const galleryImages = document.querySelectorAll('.gallery-img');
const offset = (el) => {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
};
const animGallery = () => {
  for (let index = 0; index < galleryImages.length; index++) {
    const image = galleryImages[index];
    const imageHeight = image.offsetHeight;
    const imageOffset = offset(image).top;
    const imageStart = 4;
    let imagePoint = window.innerHeight - imageHeight / imageStart;

    if (
      pageYOffset > imageOffset - imagePoint &&
      pageYOffset < imageOffset + imageHeight
    ) {
      image.classList.add('animate');
    } else if (pageYOffset < 3200) {
      image.classList.remove('animate');
    }
  }
};
window.addEventListener('scroll', animGallery);
animGallery();
