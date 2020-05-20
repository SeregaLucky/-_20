import { template } from './template.js';

const baseUrl = 'https://api.openweathermap.org/data/2.5';
const key = '076084f1cb78dea40d3faad499cbbb8a';

export const giveWeather = city => {
  console.log(city);
  const bodyFetch = `/weather?q=${city}&appid=`;

  return fetch(baseUrl + bodyFetch + key)
    .then(respons => respons.json())
    .then(data => template(data.name, data.main.temp))
    .catch(() => null);
};
