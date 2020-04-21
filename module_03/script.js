"use strict";

// 1 obj 2 word && .key && [key]
// 2 промпт взять и изминить
// 3 Перебок ин и три других
// 4 методы
// 5 базово this и чуточку 5 модуля по зис
// 6 имутабельнность + два обьекта в один

// const obj1 = {};
// const obj2 = {};

// console.log(obj1 === obj2);

//
//
//
//

// const obj1 = {
//   name: "Alex",
// };
// // console.log(obj1);

// obj1.car = "BMW";
// obj1.age = 22;
// // console.log(obj1);

// obj1.name = "Tom";
// console.log(obj1);

//
//
//
// 1 obj 2 word && .key && [key]

// const obj = {
//   name: "Alex",
//   car: "BMW",
// };
// // console.log(obj.car);
// // console.log(obj["car"]);

// const valueTake = prompt("Что ты хочешь изменить в объекте?");

// console.log(obj[valueTake]);
// // console.log(obj["car"]);
// // console.log(obj["name"]);

// // if ('car') {
// if (obj[valueTake]) {
//   const valueChange = prompt("На что ты хочешь поменять");
//   obj[valueTake] = valueChange;
// } else {
//   alert("Такого ключа нету");
// }

// console.log(obj);

//
//
//
//

// const obj = {
//   name: "Alex",
//   car: "BMW",
//   "my Key": "123",
//   "Доходы с пассивных 3": "",
// };

// console.log(obj["my Key"]);
// obj["my Key222222"] = 333333;
// console.log(obj);

//
//
//
//
// 3 Перебок ин и три других

// const obj = {
//   name: "Alex",
//   car: "BMW",
//   //   key: 222
// };

// for (const key in obj) {
//   console.log(key);
//   console.log(obj[key]);
//   //   console.log(obj['name']);
// }

//
//
//
//

// const obj = {
//   name: "Alex",
//   car: "BMW",
// };

// const allKeys = Object.keys(obj);
// console.log(allKeys);

// const allValue = Object.values(obj);
// console.log(allValue);

// const allEntries = Object.entries(obj);
// console.log(allEntries);

//
//
//
//

// const obj = {
//   Alex: 1000,
//   Bob: 900,
// };

// const allSelery = Object.values(obj);
// console.log(allSelery);

// let allSeleryNumber = 0;

// for (const selery of allSelery) {
//   allSeleryNumber += selery;
// }

// console.log(allSeleryNumber);

//
//
//
//

// 4 методы

// const obj = {
//   count: 1,

//   inc() {
//     this.count = this.count + 1;
//     // obj.count = obj.count + 1;
//     return "Увеличелось на 1";
//   },
// };

// console.log(obj);
// const res = obj.inc();
// // inc();
// console.log(obj);
// console.log(res);
// // obj.count = obj.count + 1;
// // console.log(obj);
// obj.inc();
// obj.inc();
// console.log(obj);

// 6 имутабельнность
// const obj = {
//   name: "Alex",
//   car: "BMW",

//   children: ["Vika", "Bob"],
// };
// console.log(obj);
// // obj.name = "Tom";
// // console.log(obj);

// const newObj = { ...obj, children: [...obj.children] };
// // const newObj = { name: "Alex", car: "BMW", children: ["Vika", "Bob"], children: [...obj.children] };
// // console.log(newObj);
// newObj.car = "BMW6";
// // console.log(newObj);
// newObj.children.push("Ania");
// console.log(newObj);

// const obj1 = { age: 22, name: "Tom", age: 27 };
// console.log(obj1);

// delete obj1.age;
// console.log(obj1);

