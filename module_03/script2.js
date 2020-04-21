// про стрикт и модули
// Рест, сред и диструктуризация

//
//
//
/* Делаем короткую запись для создания уникального массива */
// const arr1 = [1, 2];
// const arr2 = [2, 3];

// const makeUnikArr = (array1, array2) => [...new Set([...array1, ...array2])];
// console.log(makeUnikArr(arr1, arr2));

// //
// //
// //
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [
//     // { id: 1, amount: 200, type: "deposit" },
//     // { id: 2, amount: 160, type: "deposit" },
//     // { id: 3, amount: 60, type: "withdraw" },
//     // { id: 4, amount: 70, type: "withdraw" },
//   ],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     return {
//       id: this.transactions.length + 1,
//       amount,
//       type,
//     };
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     console.log("59", Transaction.DEPOSIT);
//     // console.log("60", Transaction);
//     // console.log(amount);
//     this.balance += amount;
//     const newObj = this.createTransaction(amount, Transaction.DEPOSIT);
//     // console.log(newObj);
//     this.transactions = [...this.transactions, newObj];
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (this.balance < amount) {
//       return "Cнятие такой суммы не возможно, недостаточно средств.";
//     }

//     this.balance -= amount;
//     const newObj = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions = [...this.transactions, newObj];
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//     // return account.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     console.log(id);
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }

//     // return "Not Found";
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     console.log(type);
//     let total = 0;
//     let arr = [];

//     for (const transaction of this.transactions)
//       if (transaction.type === type) {
//         total += transaction.amount;
//         // arr.push(transaction);
//         // arr = [...arr, transaction];
//       }

//     return total;
//     // return arr;
//   },
// };

// {
//   // console.log(account.transactions);
//   // const trEl = account.getTransactionDetails(44);
//   // if (trEl) {
//   //   console.log(trEl);
//   // } else {
//   //   console.log("Not Found Obj");
//   // }
//   // console.log(account.getTransactionTotal(Transaction.DEPOSIT));
//   //
//   //
// }

// account.deposit(700);
// console.log(account.balance);
// console.log(account.transactions);

// console.log(account.withdraw(800));
// console.log(account.balance);
// console.log(account.transactions);

//
//
//
//

// const a = 4;
// const b = 3;
// const c = 3;

// // let a;
// // let b;
// // let c;
// console.log(a);
// console.log(b);

//
//
//
//
// /* Деструктуризацией с объекта массва */
// const obj = {
//   name123: "Alex",
//   age: 22,
//   urlCat: "sdfdsfdsfsdfsd",
// };

// // let name, age
// const { name123: name = "Vika", age, urlCat: url } = obj;
// console.log(name, age, url);

// const name = obj.name;
// const age = obj.age;

// const arr = ["Text 111", "Text 222", "Text 333"];
// const [t1, , t3] = arr;

// // const t1 = arr[0];
// // const t2 = arr[1];
// // const t3 = arr[2];

// console.log(t1);
// // console.log(t2);
// console.log(t3);

//
//
//
//
/* Деструктуризацией прямо в параметрах массива */
// const obj = {
//   name123: "Alex",
//   age: 22,
//   urlCat: "sdfdsfdsfsdfsd",
// };

// const allEntries = Object.entries(obj);
// console.log(allEntries);
// // Без диструктуризации
// for (const entry of allEntries) {
//   console.log("key", entry[0]);
//   console.log("value", entry[1]);
//   console.log("==================");
// }
// // диструктуризацией сразу
// for (const [key, entry] of allEntries) {
//   console.log("key", key);
//   console.log("value", entry);
//   console.log("==================");
// }

//
//
//
//
// /* Деструктуризацией прямо в параметрах массива */
// // // По обычному
// // function fn1(obj) {
// //   const { name, id } = obj;
// //   //   console.log(obj);
// //   console.log(name);
// //   console.log(id);
// // }

// // С использованием диструктуризации
// function fn1({ id, name }) {
//   console.log(name);
//   console.log(id);
// }

// fn1({ id: 1, name: "Serg" });
