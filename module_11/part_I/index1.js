// console.log(111111111);

// setTimeout(() => {
//   console.log(222);
// }, 0);

// for (let i = 0; i < 10; i += 1) {}

// console.log(333333333);

//
//
//
//
// const good = () => console.log('GOOD');
// const bad = () => console.log('BAD');

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('success!');
//   }, 2000);
// });

// console.log(promise);

// promise.then(
//   res => {
//     console.log(res);
//   },
//   err => {
//     console.log('err', err);
//   },
// );

//
//
//
//

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// console.log(promise);

// promise
//   .then(res => res * 2)
//   .then(res => console.log(res * 2))
//   .catch(err => console.log('err', err));

//
//
//
//

// function aaa(params, callBack) {
//   const res = params * params;

//   callBack(res);
// }

// function show(numb) {
//   console.log(numb);
// }

// aaa(10, show);

//
//
//
//

// function aaa(params) {
//   const allNum = params * params;

//   return new Promise((res, rej) => {
//     return res(allNum);
//   });
// }

// function show(numb) {
//   console.log(numb);
// }

// const allGood = allN => console.log(allN);

// aaa(10)
//   // .then(allGood)
//   .then(allN => allGood(allN))
//   .catch(() => console.log('error'));

//
//
//
//
