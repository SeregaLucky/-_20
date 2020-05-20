const btn = document.querySelector('.js_btn');
const body = document.body;

btn.addEventListener('click', changeBcack);

let count = 0;
function changeBcack() {
  count += 1;
  console.log(count);

  body.classList.toggle('active');
}

if (false) {
  for (let i = 0; i < 12; i += 1) {
    for (let i = 0; i < 500000000; i += 1) {}
  }
}

if (false) {
  for (let i = 0; i < 12; i += 1) {
    setTimeout(() => {
      for (let i = 0; i < 500000000; i += 1) {}
    }, 0);
  }
}

if (false) {
  for (let i = 0; i < 12; i += 1) {
    Promise.resolve().then(() => {
      for (let i = 0; i < 500000000; i += 1) {}
    });
  }
}

// console.log(222);
// Promise.resolve().then(() => console.log(111));
// console.log(333);
/*
 * for await
 */
// const names = [
//   new Promise(resolve => resolve('Alex')),
//   new Promise(resolve => resolve('Serg')),
//   new Promise(resolve => resolve('Ania')),
// ];
// console.log(names);

// const showNames = async () => {
//   for (const name of names) {
//     console.log(name);
//   }
// };

// showNames();

// const showNames2 = async () => {
//   for await (const name of names) {
//     console.log(name);
//   }
// };
// showNames2();

//
//
//
//

// const showNames2 = () => {
//   fetch('')
//     .then(() => {
//       fetch('')
//         .then(() => {})
//         .catch(() => {});
//     })
//     .catch(() => {});
// };

// showNames2();

// const showNames2 = async () => {
//   try {
//     const res = await fetch('');
//     const res2 = await fetch('');
//   } catch {}
// };

// showNames2();

//
//
//
//

class Men {
  constructor({ name, selected }) {
    this.name = name;
    this.button = document.querySelector(selected);
  }

  changeName(newName) {
    this.name = newName;
    // alex.name = newName;
  }
}

const alex = new Men({ name: 'Alex', selected: '#js_btn' });
console.log(alex);

alex.changeName('Tom');
console.log(alex);

Promise.re