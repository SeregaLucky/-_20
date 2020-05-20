// function aa(callback) {
//   setTimeout(() => {
//     callback(44);

//     // bb(44);
//   }, 2000);
// }

// function bb(numb) {
//   console.log(numb);
// }

// function cc(numb) {
//   console.log('cc', numb);
// }

// aa(cc);

//
//
//
//

// function aa() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const random = Math.random();
//       if (random < 0.5) {
//         res(44);
//         return;
//       }

//       rej('Ошибка');
//     }, 500);
//   });
// }

// function bb(numb) {
//   console.log(numb);
// }

// function cc(numb) {
//   console.log('cc', numb);
// }

// aa().then(numb => bb(numb));

// aa().then(function (numb) {
//   bb(numb);
// });

//  aa()
//   .then(bb)
//   .catch(err => console.log(err));

//
//
//
//

// const result = aa();
// result.then(bb).catch(err => console.log(err));

// console.log(result);

// const fetch1 = fetch('', {
//   method: 'POST',

// });
// console.log(fetch1);
const body = document.body;

function template(city, temp) {
  const markup = `
    <h1>${city}</h1>
    <p>${temp}</p>
  `;

  body.insertAdjacentHTML('beforeend', markup);
}

const baseUrl = 'https://api.openweathermap.org/data/2.5';
const key = '076084f1cb78dea40d3faad499cbbb8a';

// fetch(`${baseUrl}/weather?q=Kiev&appid=${key}`)
//   .then(data => console.log(data))
//   .catch(() => null);

// fetch(baseUrl + bodyFetch + key)
//   .then(respons => respons.json())
//   .then(data => console.log(data))
//   .catch(() => null);

const giveWeather = city => {
  const bodyFetch = `/weather?q=${city}&appid=`;

  fetch(baseUrl + bodyFetch + key)
    .then(respons => respons.json())
    .then(data => template(data.name, data.main.temp))
    .catch(() => null);
};

giveWeather('Киев');
