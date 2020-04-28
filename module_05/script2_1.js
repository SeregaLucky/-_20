/*
 * Переделываем на класс
 */
// class Tank {
//   // static const a = 2;

//   constructor({ speed = 1, power = 1, blocked = 1 }) {
//     this.speed = speed;
//     this.power = power;
//     this.blocked = blocked;

//     // this.makeFaster2 = function (speed) {
//     //   this.speed = this.speed + speed;
//     //   console.log(this);
//     // };
//   }

//   makeFaster(addSpeed) {
//     // console.log(this);
//     this.speed = this.speed + addSpeed;
//   }

//   fire(addPower) {
//     this.power = this.power + addPower;
//   }
// }

// // const t34 = new Tank({ speed: 40, power: 20, blocked: 0.2 });
// // console.log(t34);
// // t34.makeFaster(4);
// // console.log(t34);

// class DublStvol extends Tank {
//   constructor({ speed = 1, power = 1, blocked = 1, time = 1 }) {
//     super({ speed, power, blocked });
//     this.time = time;
//   }

//   fn111(addPower) {
//     super.fire(addPower);
//   }
// }

// const t11 = new DublStvol({ speed: 33, power: 22, blocked: 0.4, time: 55 });
// console.log(t11);
// // t11.makeFaster(4);
// // console.log(t11);

// // t11.fn111(7);
// t11.fire(7);
// console.log(t11);

//
//
//
//

/*
 * Публичные поля классов
 */
class Count {
  constructor() {
    this.count = 0;

    this.inc = () => (this.count = this.count + 1);
    this.dec = () => (this.count = this.count - 1);
  }

  // публичное свойство и оно запишется как в 63 строке
  //   count = 0;

  // Эти методы будут на прототипе
  //   inc() {
  //     this.count = this.count + 1;
  //   }
  //   dec() {
  //     this.count = this.count - 1;
  //   }

  // Эти методы запишутся на самом дела в конструктор как на 65-66 строки
  //   inc = () => {
  //     this.count = this.count + 1;
  //   };
  //   dec = () => {
  //     this.count = this.count - 1;
  //   };
}

// const count = new Count();
// console.log(count);
// count.inc();
// count.inc();
// console.log(count);
// count.dec();
// console.log(count);

//
//
//
//

// const ttt = {
//   name: "Alex",

//   fn5() {
//     // console.log(this);

//     const rr = () => console.log(this);

//     return rr;
//   },
// };

// const newObj = ttt.fn5();
// newObj();

//
//
//
//

// const ttt = {
//   name: "Alex",

//   fn5() {
//     // this = ttt
//     // console.log(this);

//     const rr = function () {
//       console.log(this);
//     };

//     // return rr;
//     return rr.bind(this);
//   },
// };

// const newObj = ttt.fn5();
// console.log(newObj);
// newObj();

//
//
//
//

// class Count {
//   constructor() {
//     this._count = 0;
//   }

//   inc() {
//     this._count = this._count + 1;
//   }
//   dec() {
//     this._count = this._count - 1;
//   }

//   returnNow() {
//     return this._count;
//   }
// }

// const count = new Count();
// console.log(count);
// console.log(count.returnNow());
// console.log(count._count);
// count._count = 99;
// console.log(count);

//
//
//
//

/*
 * Приватные поля классов
 */
// class Count {
//   #count = 0;

//   inc() {
//     this.#count = this.#count + 1;
//   }
//   dec() {
//     this.#count = this.#count - 1;
//   }

//   get count() {
//     return this.#count;
//   }
//   set count(value) {
//     this.#count = value;
//   }
// }

// const count1 = new Count();
// // console.log(count1);
// // console.log(count1.count);
// // count1.inc();
// // count1.inc();
// // console.log(count1.count);
// // count1.count = 9;
// // console.log(count1.count);
// // count1.count = 9;
// // console.log(count1.count);

// const btn = document.querySelector(".js_btn");
// btn.addEventListener("click", aaa);
// function aaa() {
//   count1.count = 9;
//   console.log(count1);
// }

//
//
//
//
// Приватные и публичные поля классов
// https://habr.com/ru/post/438202/
// https://medium.com/devschacht/javascripts-new-private-class-fields-c60daffe361b
