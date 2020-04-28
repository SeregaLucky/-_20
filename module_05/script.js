//
//
//
//

const Tank = function ({ speed = 1, power = 1, blocked = 1 }) {
  const a = 2;

  this.speed = speed * a;
  this.power = power * a;
  this.blocked = blocked * a;

  // this.makeFaster = function (speed) {
  //   this.speed = this.speed + speed;
  //   console.log(this);
  // };
};

// const obj = {};
// obj.rrr = 44;
// obj.ggg = 77;
// console.log(obj);

Tank.prototype.makeFaster = function (speed) {
  this.speed = this.speed + speed;
  console.log(this);
};

const t34 = new Tank({ speed: 40, power: 20, blocked: 0.2 });
// console.log("t34", t34);
// t34.makeFaster(10);

// const t95 = new Tank({ speed: 20, power: 60, blocked: 0.8 });
// console.log("t95", t95);
// t95.makeFaster(4);

const DublStvol = function ({ speed = 1, power = 1, blocked = 1, time = 1 }) {
  Tank.call(this, { speed, power, blocked });

  this.time = time;
};
// console.log("t11", DublStvol);

DublStvol.prototype = Object.create(Tank.prototype);
DublStvol.prototype.constructor = DublStvol;

const t11 = new DublStvol({ speed: 33, power: 22, blocked: 0.4, time: 55 });
// console.log("t11", t11);
console.log(Tank);

// t11.makeFaster(10);

//
//
//
//

// function randomInteger(min, max) {
//   // случайное число от min до (max+1)
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }

// const Hero = function ({ health = 100, speed = 1.1, strange = 2 }) {
//   this.health = health;
//   this.speed = speed;
//   this.strange = strange;
// };

// Hero.prototype.hit = function (hit, strange, speed) {
//   this.health = this.health - hit * strange * speed;
// };

// // 2. Создаем героев на основе прототипа
// const ironMan = new Hero({ health: 100, speed: 1.2, strange: 2 });
// const capAmerica = new Hero({ health: 100, speed: 1.4, strange: 3 });

// console.log("ironMan", ironMan);
// console.log("capAmerica", capAmerica);

// // 3. Тестируем возможности наших героев

// // ironMan.hit(10, capAmerica.strange, capAmerica.speed);
// // ironMan.hit(10, capAmerica.strange, capAmerica.speed);
// // capAmerica.hit(15, ironMan.strange, ironMan.speed);
// // capAmerica.hit(15, ironMan.strange, ironMan.speed);

// // console.log("ironMan :", ironMan);
// // console.log("capAmerica :", capAmerica);

// // 4
// // console.dir(Hero.prototype);

// // 5. Тестируем

// ironMan.hit(randomInteger(0, 10), capAmerica.strange, capAmerica.speed);
// console.log("Iron HP", Math.floor(ironMan.health));
// capAmerica.hit(randomInteger(0, 15), ironMan.strange, ironMan.speed);
// console.log("Cap HP", Math.floor(capAmerica.health));
// ironMan.hit(randomInteger(0, 10), capAmerica.strange, capAmerica.speed);
// console.log("Iron HP", Math.floor(ironMan.health));
// capAmerica.hit(randomInteger(0, 15), ironMan.strange, ironMan.speed);
// console.log("Cap HP", Math.floor(capAmerica.health));
// ironMan.hit(randomInteger(0, 10), capAmerica.strange, capAmerica.speed);
// console.log("Iron HP", Math.floor(ironMan.health));
// capAmerica.hit(randomInteger(0, 15), ironMan.strange, ironMan.speed);
// console.log("Cap HP", Math.floor(capAmerica.health));
// ironMan.hit(randomInteger(0, 10), capAmerica.strange, capAmerica.speed);
// console.log("Iron HP", Math.floor(ironMan.health));

// console.log("ironMan :", ironMan);
// console.log("capAmerica :", capAmerica);

// function aa() {}
// console.log(aa);

//
//
//
//

// Дан массив с элементами 1, 2, 3, 4, 5
// С помощью цикла for найдите произведение элементов этого массива.let result = 0;
// let result = 1;
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   // result = arr[i] * i;
//   result = result * arr[i];
// }

// console.log(result);

// class Man {
//   constructor(name) {
//     this.name = name;

//     // this.fn2 = () => {};
//   }

//   fn1(newName) {
//     this.name = newName;
//   }

//   // fn2 = () => {
//   //   console.log(this);
//   // };
// }

// const aaa = new Man("Alex");
// console.log(aaa);
// // aaa.fn2();
