const decreaseBasic = document.querySelector('#decreaseBasic');
const increaseBasic = document.querySelector('#increaseBasic');
const decreaseSenior = document.querySelector('#decreaseSenior');
const increaseSenior = document.querySelector('#increaseSenior');
const ticketsTotalPrice = document.querySelector('.tickets-amount__price');
const spinnerBasic = document.querySelector('#spinnerBasic');
const spinnerSenior = document.querySelector('#spinnerSenior');
const ticketsPermanent = document.querySelector('#ticketsPermanent');
const ticketsTemporary = document.querySelector('#ticketsTemporary');
const ticketsCombined = document.querySelector('#ticketsCombined');
const ticketsRadioButton = document.querySelector('.tickets-type');

let price = 20;

const ticketsCalc = (spinner) => {
  if (ticketsPermanent.checked && spinner === spinnerBasic) {
    price = 20;
  }
  if (ticketsTemporary.checked && spinner === spinnerBasic) {
    price = 25;
  }
  if (ticketsCombined.checked && spinner === spinnerBasic) {
    price = 40;
  }
  ticketsTotalPrice.innerHTML =
    `${spinnerBasic.value}` * price + (`${spinnerSenior.value}` * price) / 2;
};

decreaseBasic.addEventListener('click', () => {
  decreaseBasic.nextElementSibling.stepDown();
  ticketsCalc(spinnerBasic);
});
increaseBasic.addEventListener('click', () => {
  increaseBasic.previousElementSibling.stepUp();
  ticketsCalc(spinnerBasic);
});
decreaseSenior.addEventListener('click', () => {
  decreaseSenior.nextElementSibling.stepDown();
  ticketsCalc(spinnerSenior);
});
increaseSenior.addEventListener('click', () => {
  increaseSenior.previousElementSibling.stepUp();
  ticketsCalc(spinnerSenior);
});

ticketsRadioButton.addEventListener('change', () => {
  ticketsCalc(spinnerBasic);
});
