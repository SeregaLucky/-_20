/*
 * ForEach
 */
// const arrayForObj = [
//   { id: 1, name: "Alex", age: 24 },
//   { id: 2, name: "Tom", age: 8 },
//   { id: 3, name: "Jerry", age: 6 },
// ];
// // console.log(arrayForObj);

// arrayForObj.forEach((item, idx, array) => {
//   // console.log(item);
//   item.age = item.age + 1;
// });
// // console.log(arrayForObj);

//
//
//
//
/*
 * Map
 */
// const arrayMapObj = [
//   { id: 1, name: "Alex", age: 24 },
//   { id: 2, name: "Tom", age: 8 },
//   { id: 3, name: "Jerry", age: 6 },
// ];
// console.log(arrayMapObj);

// // const resMap = arrayMapObj.map((item) => {
// //   return { ...item, age: item.age + 1 };
// //   //  return {id: 1, name: "Alex", age: 24, age: item.age + 1}
// // });

// const resMap = arrayMapObj.map((item) => ({ ...item, age: item.age + 1 }));

// console.log(resMap);

//
//
//
//
/*
 * Map для DOM
 */
// const arrayMapObjDOM = [
//   { id: 1, name: "Alex", age: 24 },
//   { id: 2, name: "Tom", age: 8 },
//   { id: 3, name: "Jerry", age: 6 },
// ];

// const allLi = arrayMapObjDOM.map((item) => {
//   const { name, age } = item;
//   return tamplate(name, age);
// });

// function tamplate(name, age) {
//   return `<li>Имя: ${name}; возраст: ${age}</li>`;
// }

// console.log(allLi);

//
//
//
//
/*
 * Filter
 */
// const arrayFilterObj = [
//   { id: 1, name: "Alex", age: 24 },
//   { id: 2, name: "Tom", age: 22 },
//   { id: 3, name: "Jerry", age: 29 },
// ];

// // const resFilter = arrayFilterObj.filter((item) => {
// //   return item.age <= 23;
// // });
// // console.log(resFilter);

// function fff(array, age) {
//   return array.filter((item) => {
//     return item.age <= age;
//   });
// }

// // const age1 = prompt("Возраст");
// const age1 = 25;

// console.log(fff(arrayFilterObj, age1));

//
//
//
//
/*
 * Find
 */
// const arrayFindObj = [
//   { id: 1, name: "Alex", age: 24 },
//   { id: 2, name: "Tom", age: 8 },
//   { id: 3, name: "Jerry", age: 6 },
// ];

// const resFind = arrayFindObj.find((item) => {
//   return item.id === 5;
// });
// console.log(resFind);

// function fff1(array, id) {
//   return array.find((item) => {
//     return item.id === id;
//   });
// }

// const myId = 2;
// console.log(fff1(arrayFindObj, myId));

//
//
//
//
/*
 * Some
 */
// const arraySomeObj = [
//   { id: 1, name: "Alex", age: 24 },
//   { id: 2, name: "Tom", age: 8 },
//   { id: 3, name: "Jerry", age: 6 },
// ];

// const resSome = arraySomeObj.some((item) => {
//   return item.age === 8;
// });

// console.log(resSome);

//
//
//
//
/*
 * Every
 */
// const arrayEveryObj = [
//   { id: 1, name: "Alex", age: 24 },
//   { id: 2, name: "Tom", age: 8 },
//   { id: 3, name: "Jerry", age: 6 },
// ];

// const resEvery = arrayEveryObj.every((item) => {
//   return item.age < 30;
// });

// console.log(resEvery);

//
//
//
//
/*
 * Sort
 */
// const arraySortObj = [
//   { id: 1, name: "Alex", age: 24 },
//   { id: 3, name: "Jerry", age: 6 },
//   { id: 2, name: "Tom", age: 8 },
// ];
// console.log(arraySortObj);
// const copyArraySortObj = [...arraySortObj];

// const resSort = copyArraySortObj.sort((firstItem, secondItem) => {
//   return firstItem.age - secondItem.age;
// });

// console.log(resSort);

//
//
//
//
/*
 * Sort
 */
// const arraySortObj = [
//   { id: 3, name: "Jerry", age: 6 },
//   { id: 2, name: "Tom", age: 8 },
//   { id: 1, name: "Alex", age: 24 },
// ];
// console.log(arraySortObj);
// const copyArraySortObj = [...arraySortObj];

// const resSort = copyArraySortObj.sort((firstItem, secondItem) => {
//   return firstItem.name > secondItem.name;
// });

// console.log(resSort);

// //
// //
// //
// //
// /*
//  * Reduce
//  */
// const arrayReduceObj = [
//   { id: 1, name: "Tom", salary: 900 },
//   { id: 2, name: "Alex", salary: 1000 },
//   { id: 3, name: "Tom", salary: 950 },
//   { id: 4, name: "Ania", salary: 1200 },
// ];

// const resReduce = arrayReduceObj.reduce((acc, item, idx) => {
//   if (idx === 1) {
//     console.log("acc", acc);
//   }

//   console.log(item);
// });

//
//
//
//
/*
 * Reduce
 */
// const arrayReduceObj = [
//   { id: 1, name: "Tom", salary: 900 },
//   { id: 2, name: "Alex", salary: 1000 },
//   { id: 3, name: "Tom", salary: 950 },
//   { id: 4, name: "Ania", salary: 1200 },
// ];

// const resReduce = arrayReduceObj.reduce((acc, item) => {
//   return (acc = acc + item.salary);
// }, 0);

// console.log(resReduce);

// //
// //
// //
// //
// /*
//  * Reduce
//  */
// const arrayReduceObjDOM = [
//   { id: 1, name: "Tom", salary: 900 },
//   { id: 2, name: "Alex", salary: 1000 },
//   { id: 3, name: "Tom", salary: 950 },
//   { id: 4, name: "Ania", salary: 1200 },
// ];

// import arratFreinds from "./allFreinds.js";
// console.log(arratFreinds);
// import { aaa, rrr } from "./allFreinds.js";

// console.log(aaa);
// console.log(rrr);

// import arrayMy from "./allFreinds.js";
// console.log(arrayMy);
// console.log(arrayMy.aaa);
// console.log(arrayMy.rrr);
