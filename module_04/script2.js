// Замыкание
// Запись в функцию
// this

// function fn1() {}
// console.log(typeof fn1);

// fn1.age = 88;

// console.log(fn1.age);
// console.log(fn1);

//
//
//
//

// Замыкание

// // Global
// // Parent: null

// // [[ENV: Global]]
// const createCounter = function () {
//   // Env: createCounter
//   // Parent: Global
//   let privateValue = 0;
//   // Env: createCounter
//   // Parent: Global
//   // privateValue: 0

//   // [[ENV: createCounter]]
//   const increment = function () {
//     // Env: increment
//     // Parent: createCounter
//     privateValue += 1;
//     console.log(privateValue);
//   };

//   return increment;
// };
// // Global
// // Parent: null
// // createCounter: func

// const counterA = createCounter();

// // Global
// // Parent: null
// // createCounter: func, counterA: func

// counterA(); // 1
// counterA(); // 2

//
//
//
//

// // Global
// // Parent: null

// // [[ENV: Global]]
// const createCounter = function () {
//   // Env: createCounter
//   // Parent: Global

//   // [[ENV: createCounter]]
//   const increment = function () {
//     // Env: increment
//     // Parent: createCounter
//     privateValue += 1;
//     console.log(privateValue);
//   };

//   return increment;
// };
// // Global
// // Parent: null
// // createCounter: func

// const counterA = createCounter();
// // Global
// // Parent: null
// // createCounter: func, counterA: func

// let privateValue = 0;
// // Global
// // Parent: null
// // createCounter: func, counterA: func, privateValue: 0

// counterA(); // 1
// counterA(); // 2
const a = 6;
