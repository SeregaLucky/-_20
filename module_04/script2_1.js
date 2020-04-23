// "use strict";
// function fn1() {
//   console.log(this);
// }

//
//
//
//

// const obj = {
//   name: "Alex",
//   fn22() {
//     console.log(this);
//   },
// };

// console.log(obj.fn22());

//
//
//
//

// function fn1() {
//   console.log(this);
// }

// const obj = {
//   name: "Alex",
// };
// obj.fn22 = fn1;

// console.log(obj.fn22());

//
//
//
//

// const obj = {
//   name: "Alex",
//   fn22() {
//     console.log(this);
//   },
// };

// function callFn(callback) {
//   callback();
// }

// // callFn(obj.fn22);
// callFn(obj.fn22.bind(obj));
// // callFn(obj.fn22.bind(666));
// const aaa = obj.fn22.bind(obj);
// callFn(aaa);

//
//
//
//

// function fn22(a, b) {
//   console.log(this);
//   console.log(a);
//   console.log(b);
// }

// const obj = {
//   name: "Alex",
// };

// fn22.call(obj, 222, 444);
// fn22.apply(obj, [222, 444]);

//
//
//
//

// const obj = {
//   name: "Alex",
//   fn22() {
//     // console.log(this);

//     const fn33 = () => {
//       console.log(this);
//     };

//     fn33();
//   },

//   fn44: () => console.log(this),
// };

// obj.fn22();

// obj.fn44();

//
//
//
//

// const obj = {
//   name: "Alex",
//   fn22() {
//     console.log(this);
//     const cont = this;

//     function fn33() {
//       console.log(this);
//       // console.log(cont);
//     }

//     fn33();
//   },
// };

// obj.fn22();

//
//
//
//

// function fn1() {
//   console.log(111);
// }

// const aa = 5;

// // const copyFun = JSON.stringify(fn1);
// const copyFun = JSON.stringify(aa);
// // const copyFun = JSON.stringify(() => console.log(111));
// console.log(copyFun);
// const retFun = JSON.parse(copyFun);
// console.log(retFun);

//
//
//
//

// function fn1() {
//   console.log(111);
// }

// const aa = { ...fn1 };

// console.log(aa);
// console.log(aa);
