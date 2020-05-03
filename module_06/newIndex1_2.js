// /*
//  * 1
//  */
// // Код ниже получает из массива строк новый массив, содержащий их длины:
// const arr = ["Есть", "жизнь", "на", "Марсе"];

// const fn1 = (array) => array.map((item) => item.length);
// // Ваш код (логику засовываем в функцию)

// console.log(fn1(arr)); // [4, 5, 2, 5]

// //
// //
// //
// //
// /*
//  * 2
//  */
// // Найти объект с id=2
// const users1 = [
//   { id: 1, name: "Вася" },
//   { id: 2, name: "Петя" },
//   { id: 3, name: "Маша" },
// ];

// // Ваш код (логику засовываем в функцию)

// console.log(); // { id: 2, name: "Петя" }

// //
// //
// //
// //
// /*
//  * 3
//  */
// // Вернуть только массив первых вдух объектов
// const users2 = [
//   { id: 1, name: "Вася" },
//   { id: 2, name: "Петя" },
//   { id: 3, name: "Маша" },
// ];

// const fn2 = (array, numb) => {
//   return array.filter((item, idx) => idx < numb);
// };

// console.log(fn2(users2, 1)); // [{ id: 1, name: "Вася" }, { id: 2, name: "Петя" }]

// //
// //
// //
// //
// /*
//  * 4
//  */
// // Вернуть только массив без объекта у которого id === 2
// const users3 = [
//   { id: 1, name: "Вася" },
//   { id: 2, name: "Петя" },
//   { id: 3, name: "Маша" },
// ];

// const fn4 = (array, id) => array.filter((item) => item.id !== id);
// console.log(fn4(users3, 2)); // [{ id: 1, name: "Вася" }, { id: 3, name: "Маша" }]

// //
// //
// //
// //
// /*
//  * 5
//  */
// // Произвести общий подсчет кроме чисел которые идут под четными индексами массива
// const nums = [10, 20, 30, 40, 50];
// // debugger;
// const fn5 = (array) => {
//   return array.reduce((total, number, idx) => {
//     // if (!(idx % 2)) {
//     //   return (total += number);
//     // }

//     // !(idx % 2) && (total += number);

//     // console.log(111);
//     // return total;

//     return idx % 2 ? (total += number) : total;
//   }, 0);
// };

// console.log(fn5(nums)); // 90

// //
// //
// //
// //
// /*
//  * 6
//  */
// // Вернуть массив в котором будут персонажи которые родились с 1850 года и прожили 80 или больше лет
// const scientist = [
//   {
//     first: "Albert",
//     last: "Einstein",
//     year: 1879,
//     passed: 1955,
//   },
//   {
//     first: "Isaac",
//     last: "Newton",
//     year: 1643,
//     passed: 1727,
//   },
//   {
//     first: "Galileo",
//     last: "Galilei",
//     year: 1564,
//     passed: 1642,
//   },
//   {
//     first: "Marie",
//     last: "Curie",
//     year: 1867,
//     passed: 1934,
//   },
//   {
//     first: "Johannes",
//     last: "Kepler",
//     year: 1571,
//     passed: 1630,
//   },
//   {
//     first: "Nicolaus",
//     last: "Copernicus",
//     year: 1473,
//     passed: 1543,
//   },
//   {
//     first: "Max",
//     last: "Planck",
//     year: 1858,
//     passed: 1947,
//   },
//   {
//     first: "Katherine",
//     last: "Blodgett",
//     year: 1898,
//     passed: 1979,
//   },
//   {
//     first: "Ada",
//     last: "Lovelace",
//     year: 1815,
//     passed: 1852,
//   },
//   {
//     first: "Sarah E.",
//     last: "Goode",
//     year: 1855,
//     passed: 1905,
//   },
//   {
//     first: "Lise",
//     last: "Meitner",
//     year: 1878,
//     passed: 1968,
//   },
//   {
//     first: "Hanna",
//     last: "Hammarström",
//     year: 1829,
//     passed: 1909,
//   },
// ];
// // {
// //   first: "Albert",
// //   last: "Einstein",
// //   year: 1879,
// //   passed: 1955,
// // },

// const fn6 = (array, age, yearOfBeath) =>
//   array.filter(
//     ({ year, passed }) => passed - year > age && year >= yearOfBeath
//   );

// console.table(fn6(scientist, 80, 1850));

// //
// //
// //
// //
// /*
//  * 7
//  */
// // Подщитать общее количество проживших лет персонажей

// // Ваш код (логику засовываем в функцию)

// console.log(); // 861

// //
// //
// //
// //
// /*
//  * 11
//  */
// // Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0
// const numbers = [1, 2, 3, 0, 4, 5, 6];

// // let count = 0;
// // debugger;
// const fn11 = (array, stopNumber) => {
//   let count = 0;

//   array.reduce((acc, num) => {
//     if (num === stopNumber) {
//       count = acc;
//     }

//     return (acc += num);
//   }, 0);

//   return count;
// };

// console.log(fn11(numbers, 0));
// // console.log(count);

// //
// //
// //
// //
// /*
//  * 13
//  */
// // Подсчитать количество активных или не активных участинков
// const arrayMy = [
//   { id: 1, name: "Alex", isActive: true },
//   { id: 2, name: "Bob", isActive: false },
//   { id: 3, name: "Ania", isActive: true },
//   { id: 4, name: "Tom", isActive: true },
//   { id: 5, name: "Liza", isActive: false },
// ];

// console.log();

// //
// //
// //
// //
// /*
//  * 15
//  */
// // Сделать изминения только в указанном в id обьекте и вернуть обновленный массив
// const arrayMy = [
//   { id: 1, name: "Alex", phone: 432234 },
//   { id: 2, name: "Bob", phone: 234234 },
//   { id: 3, name: "Ania", phone: 786788 },
//   { id: 4, name: "Tom", phone: 258664 },
//   { id: 5, name: "Liza", phone: 238755 },
// ];

// const newData = {
//   name: " Fly Tom",
//   phone: 103,
// };

// const id = 4;

// const fn15 = (array, newObj, id) => {
//   return array.map((item) => {
//     // if (item.id === id) {
//     //   return { ...item, ...newObj };
//     // }

//     // return item;

//     return item.id === id ? { ...item, ...newObj } : item;
//   });
// };

// console.table(fn15(arrayMy, newData, id));

// //
// //
// //
// //
// /*
//  * 16
//  */
// // Нужно сделать один сплошной массив со всех и с возможностью фильтрации по числу с которого оставлять числа
// const superArr = [
//   [1, 5, 58, 11],
//   [54, 15, 16, 17],
//   [2, 65, 47, 89],
// ];

// const fn16 = (array) => {
//   return array.reduce((acc, item) => [...acc, ...item]);
// };

// console.log(fn16(superArr));

// //
// //
// //
// //
// /*
//  * 16.1
//  */
// // Нужно сделать один сплошной массив со всех и с возможностью фильтрации по числу с которого оставлять числа
// const superArr = [
//   [1, 5, 58, 11],
//   [54, 15, 16, 17],
//   [2, 65, 47, 89],
// ];

// const fn16 = (array) => {
//   return array.flatMap((item) => item);
// };

// console.log(fn16(superArr));

// const arr = [1, 2, [3, 4, [6, [7]]]];
// console.log(arr.flat(Infinity));

//
//

// const arr = [1, 1, 2, 2, 3, 3];
// const set = new Set(arr);
// console.log(set);
// set.add(5);
// console.log(set);

// const newArr = [...set];
// console.log(newArr);

//
//
