const bookingButtonPlusBasic = document.querySelector('#booking-basic__plus');
const bookingButtonMinusBasic = document.querySelector('#booking-basic__minus');
const bookingSeniorPlusBasic = document.querySelector('#booking-senior__plus');
const bookingSeniorMinusBasic = document.querySelector(
  '#booking-senior__minus'
);
const ticketsTypePermanent = document.querySelector('#select__permanent');
const ticketsTypeTemporary = document.querySelector('#select__temporary');
const ticketsTypeCombined = document.querySelector('#select__combined');
const ticketsTypeBasic = document.querySelector('#tickets-type__basic');
const ticketsTypeSenior = document.querySelector('#tickets-type__senior');
const inputBasic = document.querySelector('#input-basic');
const inputSenior = document.querySelector('#input-senior');
const basicTotal = document.querySelector('#basic__total');
const seniorTotal = document.querySelector('#senior__total');
const ticketsTotal = document.querySelector('#tickets__total');
const ticketsFormRadioButton = document.querySelector('.select__options');
const paymentEntrance = document.querySelector('.payment__entrance');
const paymentTime = document.querySelector('.payment__time');
const paymentDate = document.querySelector('.payment__date');
const ticketsInputDate = document.querySelector('#tickets__input-date');
const ticketsInputTime = document.querySelector('#tickets__input-time');
const ticketsInputName = document.querySelector('#tickets__input-name');
const ticketsInputEmail = document.querySelector('#tickets__input-email');
const ticketsInputTel = document.querySelector('#tickets__input-tel');
const ticketsInputCVV = document.querySelector('.card-back__cvv-input');
const ticketsSubmitButton = document.querySelector('.payment__button');
const nameError = document.querySelector('.name__error');
const emailError = document.querySelector('.email__error');
const telError = document.querySelector('.tel__error');
const buttonBookingOpen = document.querySelector('.tickets__buttonBuy');
const buttonBookingClose = document.querySelector('.booking__close');
const ticketsBooking = document.querySelector('.tickets__booking');
const ticketsBookingContainer = document.querySelector('.booking__overlay');

const formClose = () => {
  ticketsBooking.classList.remove('booking-anim-open');
  ticketsBooking.classList.add('booking-anim-close');
  ticketsBookingContainer.style.background = 'rgba(255,255,255, 0)';
  setTimeout(() => {
    ticketsBookingContainer.style.display = 'none';
  }, 300);
};
const formOpen = () => {
  ticketsBookingContainer.style.display = 'block';
  setTimeout(() => {
    ticketsBookingContainer.style.background = 'rgba(255,255,255, 0.3)';
  }, 0);
  ticketsBooking.classList.remove('booking-anim-close');
  ticketsBooking.classList.add('booking-anim-open');
};

ticketsBookingContainer.addEventListener('click', formClose);
buttonBookingClose.addEventListener('click', formClose);
buttonBookingOpen.addEventListener('click', formOpen);


// ticketsBooking.addEventListener('click', ()=>{
//   ticketsInputDate.style.setProperty('--rotate', '0deg')
//   console.log('bo');
// })
// ticketsInputDate.addEventListener('click', () => {
//   ticketsInputDate.style.setProperty('--rotate', '180deg')
// });
ticketsInputTime.addEventListener('change', () => {
  paymentTime.innerHTML = ticketsInputTime.value;
});

const formError = (inputName, error, message = 'Field error') => {
  error.style.display = 'block';
  error.innerHTML = message;
  inputName.classList.add('invalid-form');
};

// const validationForm = () => {
//   if (ticketsInputName.value.length === 0) {
//     formError(ticketsInputName, nameError, 'Field is required');
//   }
//   if (ticketsInputName.value.length < 3 && ticketsInputName.value.length > 0) {
//     formError(ticketsInputName, nameError, 'Field is too short');
//   }
//   if (ticketsInputName.value.length > 15) {
//     formError(ticketsInputName, nameError, 'Field is too long');
//   }
//   if (ticketsInputName.value.match(/[^A-Za-z0-9]/)) {
//     formError(ticketsInputName, nameError, 'Write a name');
//   }
//   if (ticketsInputEmail.value.length === 0) {
//     formError(ticketsInputEmail, emailError, 'Field is required');
//   }
//   if (ticketsInputEmail.value.match(/[^A-Za-z0-9_-]/)) {
//     formError(ticketsInputEmail, emailError, 'Write an email');
//   }
//   if (ticketsInputTel.value.length === 0) {
//     formError(ticketsInputTel, telError, 'Field is required');
//   }
//   if (ticketsInputCVV.value.length < 3) {
//     ticketsInputCVV.classList.add('invalid-form');
//   }
//   else {
//     ticketsInputName.style.border = '1px solid black';
//     nameError.style.display = 'none';
//   }
// };

function ripple(e) {
  // const rippleEffect = ticketsSubmitButton.querySelector('.ripple-effect');
  // const posX = ticketsSubmitButton.offsetLeft;
  // const posY = ticketsSubmitButton.offsetTop;
  // let buttonWidth = ticketsSubmitButton.offsetWidth;
  // let buttonHeight = ticketsSubmitButton.offsetHeight;
  // const span = document.createElement('span');
  // span.classList.add('ripple-effect');
  // ticketsSubmitButton.appendChild(span);
  // if (buttonWidth >= buttonHeight) {
  //   buttonHeight = buttonWidth;
  // } else {
  //   buttonWidth = buttonHeight;
  // }
  // const x = e.pageX - posX - buttonWidth / 2;
  // const y = e.pageY - posY - buttonHeight / 2;
  // span.style.width = buttonWidth + 'px';
  // span.style.height = buttonHeight + 'px';
  // span.style.left = x + 'px';
  // span.style.top = y + 'px';
  // span.classList.add('ripple-animation');
}
ticketsSubmitButton.addEventListener('click', (e) => {
  // let buttonWidth = ticketsSubmitButton.offsetWidth;
  // let buttonHeight = ticketsSubmitButton.offsetHeight;
  // const rippleEffect = ticketsSubmitButton.querySelector('.ripple-effect');
  // if (rippleEffect) rippleEffect.remove();
  // const span = document.createElement('span');
  // span.classList.add('ripple-effect');
  // ticketsSubmitButton.appendChild(span);
  // span.style.left = 50 + '%';
  // span.style.top = 50 + '%';
  // span.style.transform = 'translate(-50%, -50%)'
  // span.style.width = buttonWidth + 'px';
  // span.style.height = buttonHeight + 'px';
  // span.classList.add('ripple-animation');

  // const rippleEffect = ticketsSubmitButton.querySelector('.ripple-effect');
  // if (rippleEffect) rippleEffect.remove();

  // const posX = ticketsSubmitButton.offsetLeft;
  // const posY = ticketsSubmitButton.offsetTop;
  // let buttonWidth = ticketsSubmitButton.offsetWidth;
  // let buttonHeight = ticketsSubmitButton.offsetHeight;

  // const span = document.createElement('span');
  // if (ticketsSubmitButton.classList.contains('dark')) {
  //   span.classList.add('ripple-effect-dark');
  // } else {
  //   span.classList.add('ripple-effect');
  // }

  // ticketsSubmitButton.appendChild(span);

  // if (buttonWidth >= buttonHeight) {
  //   buttonHeight = buttonWidth;
  // } else {
  //   buttonWidth = buttonHeight;
  // }

  // const x = e.pageX - posX - buttonWidth / 2;
  // const y = e.pageY - posY - buttonHeight / 2;

  // span.style.width = buttonWidth + 'px';
  // span.style.height = buttonHeight + 'px';
  // span.style.left = x + 'px';
  // span.style.top = y + 'px';

  // span.classList.add('ripple-animation');
  // console.log(e.pageX - posX);
  validationForm();
});

let entrance;
ticketsTypeBasic.title = '0';
ticketsTypeSenior.title = '0';

const calcFunction = (ticketsType, input, typeTotal) => {
  if (ticketsTypePermanent.checked && ticketsType === ticketsTypeBasic) {
    paymentEntrance.innerHTML = 'Permanent exhibition';
    entrance = 20;
  }
  if (ticketsTypeTemporary.checked && ticketsType === ticketsTypeBasic) {
    paymentEntrance.innerHTML = 'Temporary exhibition';
    entrance = 25;
  }
  if (ticketsTypeCombined.checked && ticketsType === ticketsTypeBasic) {
    paymentEntrance.innerHTML = 'Combined Admission';
    entrance = 40;
  }
  if (ticketsTypePermanent.checked && ticketsType === ticketsTypeSenior)
    entrance = 10;
  if (ticketsTypeTemporary.checked && ticketsType === ticketsTypeSenior)
    entrance = 12.5;
  if (ticketsTypeCombined.checked && ticketsType === ticketsTypeSenior)
    entrance = 20;
  ticketsType.title = `${input.value}`;
  typeTotal.innerHTML = `${input.value}` * entrance + ' ' + '€';
  ticketsTotal.innerHTML =
    parseFloat(basicTotal.innerHTML.match(/[\d\.]+/)) +
    parseFloat(seniorTotal.innerHTML.match(/[\d\.]+/)) +
    ' ' +
    '€';
};

bookingButtonPlusBasic.addEventListener('click', () => {
  bookingButtonPlusBasic.previousElementSibling.stepUp();
  entrance = 20;
  calcFunction(ticketsTypeBasic, inputBasic, basicTotal);
});

bookingButtonMinusBasic.addEventListener('click', (e) => {
  bookingButtonMinusBasic.nextElementSibling.stepDown();
  entrance = 20;
  calcFunction(ticketsTypeBasic, inputBasic, basicTotal);
});

bookingSeniorPlusBasic.addEventListener('click', () => {
  bookingSeniorPlusBasic.previousElementSibling.stepUp();
  entrance = 10;
  calcFunction(ticketsTypeSenior, inputSenior, seniorTotal);
});
bookingSeniorMinusBasic.addEventListener('click', () => {
  bookingSeniorMinusBasic.nextElementSibling.stepDown();
  entrance = 10;
  calcFunction(ticketsTypeSenior, inputSenior, seniorTotal);
});

ticketsFormRadioButton.addEventListener('change', () => {
  if (ticketsTypeSenior) {
    calcFunction(ticketsTypeSenior, inputSenior, seniorTotal);
  }
  if (ticketsTypeBasic) {
    calcFunction(ticketsTypeBasic, inputBasic, basicTotal);
  }
});

const monthList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const dayList = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const numDateToString = () => {
  let dateValue = ticketsInputDate.value;
  if (dateValue.charAt(5) === '0') {
    paymentDate.innerHTML =
      dayList[new Date(dateValue).getDay()] +
      ',' +
      ' ' +
      monthList[dateValue.charAt(6) - 1] +
      ' ' +
      dateValue.charAt(8) +
      dateValue.charAt(9);
  } else
    paymentDate.innerHTML =
      dayList[new Date(dateValue).getDay()] +
      ',' +
      ' ' +
      monthList[dateValue.charAt(5) + dateValue.charAt(6) - 1] +
      ' ' +
      dateValue.charAt(8) +
      dateValue.charAt(9);
};

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

today = yyyy + '-' + mm + '-' + dd;
ticketsInputDate.setAttribute('min', today);
ticketsInputDate.setAttribute('value', today);
ticketsInputDate.addEventListener('change', numDateToString);
numDateToString();

const cardYearPlusButton = document.querySelector('#year__button-plus');
const cardYearMinusButton = document.querySelector('#year__button-minus');
const cardMonthPlusButton = document.querySelector('#month__button-plus');
const cardMonthMinusButton = document.querySelector('#month__button-minus');
const inputYear = document.querySelector('#input__year');
const inputMonth = document.querySelector('#input__month');
const ticketsInputCardName = document.querySelector(
  '.card-front__number-input'
);
let num = 1;

function setInputFilter(textBox, inputFilter) {
  [
    'input',
    'keydown',
    'keyup',
    'mousedown',
    'mouseup',
    'select',
    'contextmenu',
    'drop',
  ].forEach(function (event) {
    textBox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty('oldValue')) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = '';
      }
    });
  });
}

cardYearPlusButton.addEventListener('click', () => {
  ++inputYear.value;
});
cardYearMinusButton.addEventListener('click', () => {
  if (inputYear.value > yyyy + 1) --inputYear.value;
});

cardMonthPlusButton.addEventListener('click', () => {
  if (num < 9) {
    inputMonth.value = '0' + ++num;
  } else if (num > 8 && num < 12) inputMonth.value = ++num;
});

cardMonthMinusButton.addEventListener('click', () => {
  if (num > 1 && num < 11) {
    inputMonth.value = '0' + --num;
  } else if (num > 1) inputMonth.value = --num;
});

setInputFilter(ticketsInputCVV, function (value) {
  return /^-?\d*$/.test(value);
});
setInputFilter(ticketsInputCardName, function (value) {
  return /^-?\d*$/.test(value);
});
