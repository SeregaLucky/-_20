/* Как будет делатся разметка - пока что только логика */
// const arr = [
//   { _id: 1, name: "Alex", car: "bmw" },
//   { _id: 2, name: "Vika", car: "porsh" },
//   { _id: 3, name: "Ania", car: "bmw7" },
//   { _id: 4, name: "Ania22", car: "bmw744" },
//   { _id: 5, name: "Ania33", car: "bmw755" },
// ];

// function makeAll(array) {
//   let allPeople = "";

//   for (const item of array) {
//     console.log(item);
//     const { _id: id, name, car } = item;

//     allPeople = allPeople + template(id, name, car);
//   }

//   console.log(allPeople);
// }

// function template(id, name, car) {
//   return `
//    <li id="${id}">
//         <p>Имя: ${name}</p>
//         <p>Машина: ${car}</p>
//    </li>
//    `;
// }

// makeAll(arr);

//
//
//
//

// let a = 5;

// if (true) {
//   var b = 7;
// }

// function aaaa() {
//   var c = 5;
// }

// console.log(b);
// console.log(c);

//
//
//
//

// let a = 5;
// let x = 5;
// if (true) {
//   // let a

//   console.log(x);
//   //   console.log(a);

//   let a = 7;
// }

// //
// //
// const a = 6;
// a = 7;

//
//
//
//

// 1 Палиндром
// Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.

// const name = "anna4";

// function polin(word) {
//   const arrWord = word.split("").reverse();
//   console.log(arrWord);
// //   if (arrWord.join("") === word) {
// //     return 'sfedfsdf'
// //   };
//   return arrWord.join("") === word ? "true1" : "false2";

//   //   console.log(word);

//   //   const halfWord = Math.floor(word.length / 2);

//   //   for (let i = 0; i < halfWord; i += 1) {
//   //     if (word[i] !== word[word.length - i - 1]) {
//   //       console.log("word[i]", word[i]);
//   //       console.log("word[word.length - i]", word[word.length - i - 1]);
//   //       return "false";
//   //     }
//   //   }
// }
// // polin(name);
// console.log(polin(name));

//
//
//
//

// 4 Math.pow - как самому через рукурсия

// const a = Math.pow(2, 4);
// console.log(a);
// debugger;
// function mathPow(a, b) {
//   if (b === 1) {
//     return b;
//   } else {
//     return a * mathPow(a, b - 1);
//   }
// }
// console.log(mathPow(2, 4));

//
//
//
//

// // 7 Задачка на проверку на тип данных
// const bb = {};
// const cc = 333;
// const xx = [];
// const mm = null;
// // console.log(typeof null);

// function fn1(aa) {
//   if (typeof aa === "object" && aa !== null) {
//     return "This is OBJ";
//   } else {
//     return "This is NOT OBJ!!!";
//   }
// }

// console.log(fn1(mm));

//
//
//
//

// 8 Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
//   multiplyNumeric(menu);
//   // после вызова функции
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };

//
//
//
//

// const menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(menu) {
//   console.log(menu);

//   for (const key in menu) {
//     console.log(isNaN(menu[key]));
//     if (!isNaN(menu[key])) {
//       menu[key] = menu[key] * 2;
//     }
//   }
// }

// multiplyNumeric(menu);

//
//
//
//

// const menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(width, height) {
//   //   console.log(menu);

//   const allSw = menu[width] * menu[height];
//   menu.allSw = allSw;
// }

// multiplyNumeric("width", "height");
// console.log(menu);

//
//
//
//

// 9 Через алерт и цикл создавать объекты и помещять в массив с введенными именно числами и что бы ети айди были уникальны с длинной от 2 до 5

let id = "";
const arr = [];

const doObj = (id) => ({ id });

do {
  id = prompt("Введите число от 2 чисед до 5 что бы уникальное");
  console.log(id);

  if (id === null) continue;

  const isNumber = isNaN(Number(id));

  if (isNumber) continue;

  if (id.length < 2 || id.length > 5) {
    continue;
  }

  arr.push(doObj(id));
} while (id !== null);

console.log(arr);
