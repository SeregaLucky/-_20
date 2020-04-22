// еще показать через дом
// еще на декларативном методе

// const fn1 = () => {
//   return console.log("111");
//   //   return "111";
// };

// console.log(fn1());

//
//
//
//

// const arr = ["Alex", "Bob", "Ania"];

// const fn2 = (array, name) => array.includes(name);

// const fn1 = (array, name, callback) => {
//   console.log(array);

//   const isFindFreind = callback(array, name);
//   //   const isFindFreind = ((array, name) => array.includes(name))(array, name);

//   if (isFindFreind) {
//     console.log("Find =)");
//     return;
//   }

//   console.log("Not find =(");
// };

// fn1(arr, "Ania", fn2);
// // fn1(arr, "Ania", (array, name) => array.includes(name));

//
//
//
//

// const button = document.querySelector(".js_btn");
// // console.log(button);

// // button.addEventListener("click", handleClick);
// button.addEventListener("click", function handleClick() {
//   count += 1;
//   console.log(count);
// });

// let count = 0;

// function handleClick() {
//   count += 1;
//   console.log(count);
// }

//
//
//
//

// const arr = ["Alex", "Bob", "Ania"];
// console.log(arr);

// arr.forEach((name) => console.log(name));

// arr.forEach(function (name) {
//   console.log(name);
// });

//
//
//
//

// // Global
// // Parent: null

// // [[Env: Global]]
// function fn11() {
//   // Env: fn11,
//   // Parent: Global
//   fn22();
// }

// // Global
// // Parent: null
// // fn11: func

// // [[Env: Global]]
// function fn22() {
//   // Env: fn22,
//   // Parent: Global
//   const zzz = 6;
//   // Env: fn22,
//   // Parent: Global
//   // zzz: 6
//   fn33();
// }

// // Global
// // Parent: null
// // fn11: func, fn22: func

// // [[Env: Global]]
// function fn33() {
//   // Env: fn33,
//   // Parent: Global
//   console.log(zzz);
// }

// // Global
// // Parent: null
// // fn11: func, fn22: func, fn33: func

// fn11();

//
//
//
//

// // Global
// // Parent: null

// // [[Env: Global]]
// function fn11() {
//   // Env: fn11,
//   // Parent: Global
//   fn22();
// }

// // Global
// // Parent: null
// // fn11: func

// // [[Env: Global]]
// function fn22() {
//   // Env: fn22,
//   // Parent: Global
//   fn33();
// }

// // Global
// // Parent: null
// // fn11: func, fn22: func

// // [[Env: Global]]
// function fn33() {
//   // Env: fn33,
//   // Parent: Global
//   console.log(zzz);
// }

// const zzz = 6;
// // Global
// // Parent: null
// // fn11: func, fn22: func, fn33: func, zzz: 6

// fn11();

//
//
//
//

// // Global
// // Parent: null

// // [[Env: Global]]
// function fn11() {
//   const zzz = 6;
//   // Env: fn11, zzz: 6
//   // Parent: Global
//   fn22(zzz);
// }

// // Global
// // Parent: null
// // fn11: func

// // [[Env: Global]]
// function fn22(param) {
//   // Env: fn22,
//   // Parent: Global, param: 6
//   fn33(param);
// }

// // Global
// // Parent: null
// // fn11: func, fn22: func

// // [[Env: Global]]
// function fn33(param1) {
//   // Env: fn33,
//   // Parent: Global, param1: 6
//   console.log(param1);
// }

// // Global
// // Parent: null
// // fn11: func, fn22: func, fn33: func

// fn11();

//
//
//
//

// // Global
// // Parent: null

// // [[Env: Global]]
// function fn11() {
//   // Env: fn11,
//   // Parent: Global
//   fn22();
// }

// // Global
// // Parent: null
// // fn11: func

// // [[Env: Global]]
// function fn22() {
//   // Env: fn22,
//   // Parent: Global
//   fn33();
// }

// // Global
// // Parent: null
// // fn11: func, fn22: func

// // [[Env: Global]]
// function fn33() {
//   // Env: fn33,
//   // Parent: Global
//   console.log(zzz);
// }

// // Global
// // Parent: null
// // fn11: func, fn22: func, fn33: func

// fn11();

// const zzz = 6;

//
//
//
//

// // Global
// // Parent: null

// // [[Env: Global]]
// function fn11() {
//   // Env: fn11
//   // Parent: Global
//   fn22();
// }

// // Global
// // Parent: null
// // fn11: func

// // [[Env: Global]]
// function fn22() {
//   // Env: fn22
//   // Parent: Global
//   const aa = 7;
//   // Env: fn22
//   // Parent: Global
//   // aa: 7

//   // [[Env: fn22]]
//   function fn33() {
//     // Env: fn33
//     // Parent: fn22
//     console.log(aa);
//   }

//   // Env: fn22
//   // Parent: Global
//   // aa: 7, fn33: func

//   fn33();
// }

// // Global
// // Parent: null
// // fn11: func, fn22: func

// fn11();

//
//
//
//

// // Global
// // Parent: null

// // [[Env: Global]]
// function fn11() {
//   // Env: fn11
//   // Parent: Global
//   fn22();
// }

// // Global
// // Parent: null
// // fn11: func

// // [[Env: Global]]
// function fn22() {
//   // Env: fn22
//   // Parent: Global

//   // [[Env: fn22]]
//   function fn33() {
//     // Env: fn33
//     // Parent: fn22
//     console.log(aa);
//   }

//   const aa = 7;
//   // Env: fn22
//   // Parent: Global
//   // aa: 7, fn33: func

//   fn33();
// }

// // Global
// // Parent: null
// // fn11: func, fn22: func

// fn11();

//
//
//
//

// // Global
// // Parent: null

// // [[Env: Global]]
// function fn11() {
//   // Env: fn11
//   // Parent: Global
//   fn22();
// }

// // Global
// // Parent: null
// // fn11: func

// // [[Env: Global]]
// function fn22() {
//   // Env: fn22
//   // Parent: Global

//   // [[Env: fn22]]
//   function fn33() {
//     // Env: fn33
//     // Parent: fn22
//     console.log(aa);
//   }

//   // Env: fn22
//   // Parent: Global
//   // fn33: func

//   fn33();

//   const aa = 7;
//   // Env: fn22
//   // Parent: Global
//   // aa: 7, fn33: func
// }

// // Global
// // Parent: null
// // fn11: func, fn22: func

// fn11();

//
//
//
//

// Global
// Parent: null

// [[Env: Global]]
function fn11() {
  // Env: fn11
  // Parent: Global
  fn22();
}

// Global
// Parent: null
// fn11: func

// [[Env: Global]]
function fn22() {
  // Env: fn22
  // Parent: Global

  // [[Env: fn22]]
  function fn33() {
    // Env: fn33
    // Parent: fn22
    console.log(aa);
  }

  // Env: fn22
  // Parent: Global
  // fn33: func

  fn33();
}

const aa = 7;

// Global
// Parent: null
// fn11: func, fn22: func, aa: 7

fn11();
