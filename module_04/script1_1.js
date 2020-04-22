// function fn1() {
//     console.log("fn1");
//   }

// console.log(aa);
// const aa = 5;
// // console.log(aa);

//
//

// console.log(aa);
// var aa = 5;
//
//
// var aa;
// console.log(aa);
// aa = 5;

//
//
//
//
// fn1();
// function fn1() {
//   console.log("fn1");
// }

// // fn1();

// fn2();
// const fn2 = () => {
//   console.log("fn2");
// };

// fn2();

//
//
//
const obj = {
  aaa: 5,
  bbb: 7,
  ccc: 9,
};

const ord = {
  ccc: 2,
  aaa: 4,
  ggg: 5,
};

function fn1(object, order) {
  const arrEnt = Object.entries(order);
  console.log("arrEnt", arrEnt);

  let total = 0;
  for (const [key, value] of arrEnt) {
    if (!object[key]) continue;

    // if (object[key]) {
    //   total = total + object[key] * value;
    // }

    total = total + object[key] * value;
  }

  return total;
}

console.log(fn1(obj, ord));
