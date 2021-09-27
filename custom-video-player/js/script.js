const player = document.querySelector('.player');
const video = player.querySelector('.player__viewer');
const playerIcon = document.querySelector('.player__icon');
const toggle = player.querySelector('.toggle');
const videoProgress = player.querySelector('.player__progress__input');
const volumeSlider = player.querySelector('.volume__slider__input');
const volumeOn = document.querySelector('.volume__button__on');
const volumeOff = document.querySelector('.volume__button__off');
const muteButton = player.querySelector('.volume__button');
const fullscreen = player.querySelector('.player__fullscreen');
const playIcon = document.querySelector('.toggle__play');
const pauseIcon = document.querySelector('.toggle__pause');

const getFullscreenElement = () => {
  return document.fullscreenElement;
};
const getColor = (x) => `linear-gradient(90deg, #24809E ${x}%, #C4C4C4 ${x}%)`;
let mousedown = false;

const togglePlay = () => {
  if (video.paused) {
    playerIcon.classList.remove('player__icon-unhidden');
    video.play();
  } else {
    playerIcon.classList.add('player__icon-unhidden');
    video.pause();
  }
};

const changeIcon = () => {
  if (video.paused) {
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
  } else {
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
  }
};

const volumeUpdate = () => {
  const { value, name } = volumeSlider;
  video[name] = value;
};
const volumeButton = () => {
  video.muted = !video.muted;
  muteButton.classList.toggle('muted');
  volumeProgress();
};
const volumeProgress = () => {
  const x = volumeSlider.value * 100;
  volumeSlider.style.background = getColor(x);
};

const progressUpdate = () => {
  const { currentTime, duration } = video;
  const x = (currentTime / duration) * 100;
  videoProgress.style.background = getColor(x);
  if (!mousedown) {
    videoProgress.value = x;
  }
};

const scrub = () => {
  video.currentTime = (videoProgress.value * video.duration) / 100;
};

const changeFullscreen = () => {
  if (getFullscreenElement()) {
    document.exitFullscreen().catch((e) => {
      console.error(e);
    });
    player.classList.remove('fullscreen');
  } else {
    player.requestFullscreen().catch((e) => {
      console.error(e);
    });
    player.classList.add('fullscreen');
  }
};

fullscreen.addEventListener('click', changeFullscreen);

video.addEventListener('play', changeIcon);
video.addEventListener('pause', changeIcon);
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
playerIcon.addEventListener('click', togglePlay);

volumeSlider.addEventListener('change', volumeUpdate);
volumeSlider.addEventListener('mousemove', volumeUpdate);
volumeSlider.addEventListener('mousemove', volumeProgress);
muteButton.addEventListener('click', volumeButton);

video.addEventListener('timeupdate', progressUpdate);
videoProgress.addEventListener('click', scrub);
videoProgress.addEventListener('oninput', () => mousedown && scrub());
videoProgress.addEventListener('mousedown', () => (mousedown = true));
videoProgress.addEventListener('mouseup', () => (mousedown = false));
videoProgress.addEventListener('mousemove', () => {
  const x = videoProgress.value;
  videoProgress.style.background = getColor(x);
});

document.addEventListener('keydown', (e) => {
  const { keyCode } = e;
  if (keyCode === 190 && video.playbackRate < 2) {
    video.playbackRate += 0.25;
  } else if (keyCode === 188 && video.playbackRate > 0.25) {
    video.playbackRate -= 0.25;
  }
  switch (keyCode) {
    case 32:
      togglePlay();
      break;
    case 77:
      volumeButton();
      break;
    case 70:
      changeFullscreen();
      break;
    case 48:
      video.currentTime = 0;
      break;
    case 49:
      video.currentTime = (video.duration / 100) * 10;
      break;
    case 50:
      video.currentTime = (video.duration / 100) * 20;
      break;
    case 51:
      video.currentTime = (video.duration / 100) * 30;
      break;
    case 52:
      video.currentTime = (video.duration / 100) * 40;
      break;
    case 53:
      video.currentTime = (video.duration / 100) * 50;
      break;
    case 54:
      video.currentTime = (video.duration / 100) * 60;
      break;
    case 55:
      video.currentTime = (video.duration / 100) * 70;
      break;
    case 56:
      video.currentTime = (video.duration / 100) * 80;
      break;
    case 57:
      video.currentTime = (video.duration / 100) * 90;
      break;
    case 39:
      video.currentTime += 5;
      break;
    case 37:
      video.currentTime -= 5;
      break;
    default:
      break;
  }
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}