import throttle from 'lodash.throttle';

const contactFormEl = document.querySelector('.feedback-form');
console.log(contactFormEl);
const userData = {};

const fillContactFormField = () => {
  const userInfoFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (userInfoFromLS === null) {
    return;
  }

  for (const key in userInfoFromLS) {
    contactFormEl.elements[key].value = userInfoFromLS[key];
  }
};

fillContactFormField();

const onContactFormFielChange = event => {
  const { target: contactFieldEl } = event;

  const contactFieldValue = contactFieldEl.value;
  const contactFieldName = contactFieldEl.name;

  userData[contactFieldName] = contactFieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
};

const onContactFormSubmit = event => {
  event.preventDefault();

  console.log(localStorage.getItem('feedback-form-state'));

  contactFormEl.reset();
  localStorage.removeItem('feedback-form-state');
};

contactFormEl.addEventListener('input', throttle(onContactFormFielChange, 500));
contactFormEl.addEventListener('submit', onContactFormSubmit);
// contactFormEl.addEventListener('change', onContactFormFielChange);

// contactFormEl.addEventListener('input', throttle(log, 500));

// // мейл
// const resultForm = document.querySelector('.feedback-form');
// console.log(resultForm);

// function addInfoForm(event) {
//   event.preventDefault();

//   const {
//     elements: { email, message },
//   } = event.currentTarget;

//   if (!email.value || !message.value) {
//     alert('Да пребудет с тобой сила, введи свой email и password');
//     return;
//   }

//   const newClient = {};
//   newClient.email = email.value;
//   newClient.password = message.value;
//   console.log(newClient);

//   resultForm.reset();
// }

// resultForm.addEventListener('submit', addInfoForm);

// мейл ==================

// const inputMessage = document.querySelector('#textarea');

// // const outMail = document.querySelector('#name-output');

// console.log(inputMail);
// console.log(inputMessage);

// const addInpunName = () => {
//   if (!nameIn.value) {
//     nameOut.textContent = 'Anonymous';
//   } else {
//     nameOut.textContent = nameIn.value;
//   }
// };

// nameIn.addEventListener('input', addInpunName);

// // мейл и пароль
// // const resultForm = document.querySelector('.login-form');

// // function addInfoForm(event) {
// //   event.preventDefault();

// //   const {
// //     elements: { email, password },
// //   } = event.currentTarget;

// //   if (!email.value || !password.value) {
// //     alert('Да пребудет с тобой сила, введи свой email и password');
// //     return;
// //   }

// //   const newClient = {};
// //   newClient.email = email.value;
// //   newClient.password = password.value;
// //   console.log(newClient);

// //   resultForm.reset();
// // }

// // resultForm.addEventListener('submit', addInfoForm);
