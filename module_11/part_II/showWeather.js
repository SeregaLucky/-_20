import { giveWeather } from './api.js';

const body = document.body;
const form = document.querySelector('.js_form');

form.addEventListener('submit', give);

function give(e) {
  e.preventDefault();

  const textValue = e.currentTarget.elements.text.value;
  console.log(textValue);

  // const markup = giveWeather(textValue);
  // console.log(markup);

  // console.log(giveWeather(textValue));

  const aaa = giveWeather(textValue)
    .then(markup => body.insertAdjacentHTML('beforeend', markup))
    .then(() => console.log(aaa))
    .catch(() => null);
}

// const promise = new Promise(res => {
//   setTimeout(() => res(444), 0);
// });

// console.log(promise);

// promise.then(data => console.log(promise));
