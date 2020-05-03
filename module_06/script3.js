"use strict";

/*
 * BIG ARRAY
 */
const arr = [];

if (true) return;

// Пушим в массив с 2 милионама объектов
for (let i = 0; i <= 2000000; i += 1) {
  arr.push({ id: i });
}

console.log(arr);

const nowDateStart = Date.now(); // берет времмя в этот момент до поиска объекта по id
const needObj = arr.find((nowId) => nowId.id === 2000000);
const nowDateFinish = Date.now(); // берет времмя в этот момент после поиска объекта по id
console.log(needObj); // выводим объект который мы нашли
console.log(nowDateFinish - nowDateStart); // покажет время поиска данного объекта по id

/*
 * BIG ARRAY - MAP
 */
// Получим новый массив где id увеличено в 999999
const needMap = arr.map((nowId) => {
  return { ...nowId, id: nowId.id * 999999 };
});
const nowDateStart = Date.now();
console.log(needMap);
const nowDateFinish = Date.now();
console.log(nowDateFinish - nowDateStart); // Время операции map

//
//
const doFind = (numb) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].id === numb) {
      return arr[i];
    }
  }
};

const nowDateStart = Date.now();
console.log(doFind(2000000));
const nowDateFinish = Date.now();
console.log(nowDateFinish - nowDateStart);

/*
 * BIG ARRAY - new MAP
 */
const map = new Map();
console.log(map);

// Дождитесь когда все запишется. Где мы можем протестировать скорость работы создав карту где как и в примере выше будет объект с ключом индекса объекта и значением этого ключа будет сам объект
for (let i = 0; i <= 200000; i += 1) {
  map.set(i, { id: i });
}

// Когда он запил можем проверить скорость выполнения операции
console.log(map);
const nowDateStart = Date.now();
console.log(map.get(200000)); // идем и берем объект с нужным ключом
const nowDateFinish = Date.now();
console.log(nowDateFinish - nowDateStart);
// const r = {1: {dfsdfdf}}
