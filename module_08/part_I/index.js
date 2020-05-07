// const mainDid = document.querySelector(".js_parent_div");

// mainDid.addEventListener("click", fn1);

// function fn1(e) {
//   //   console.log(e.target);
//   //   console.log(e.currentTarget);

//   //   if (e.target !== e.currentTarget) {
//   //     console.log("CHILD");
//   //   }

//   if (e.target.nodeName === "FOOTER") {
//     console.log("CHILD");
//   }
// }

//
//
//
//

// const input = document.querySelector(".js_input");

// input.addEventListener("focus", fn2);

// function fn2() {
//   console.log("FOCUS");
// }

//
//
//
//

// const allItems = document.querySelectorAll(".js_item");
// console.log(allItems);

// allItems.forEach((item) => {
//   item.addEventListener("click", fn1);
// });

// function fn1() {
//   console.log(111);
// }

//
//
//
//

// const list = document.querySelector(".js_list_nav");

// list.addEventListener("click", fn1);

// function fn1(e) {
//   if (e.target === e.currentTarget) return;

//   const activeItem = e.currentTarget.querySelector(".active");

//   if (activeItem) {
//     activeItem.classList.remove("active");
//   }

//   e.target.classList.add("active");
// }

//
//
//
//

// const list = document.querySelector(".js_list_nav");

// list.addEventListener("click", fn1);

// function fn1(e) {
//   e.target.classList.toggle("active");
// }

//
//
//
//

// import users from "./data.js";
// import { tamplate } from "./tamplate.js";

// const listMain = document.querySelector(".js_list");

// const allLi = users.map((item) => tamplate(item)).join("");

// listMain.insertAdjacentHTML("beforeend", allLi);

// listMain.addEventListener("click", deleteItem);

// function deleteItem(e) {
//   if (e.target.nodeName !== "BUTTON") return;

//   const li = e.target.closest("li");
//   li.remove();
// }

//
//
//
//

// window.addEventListener("scroll", _.throttle(fn1, 50));

// let count = 0;

// function fn1() {
//   count += 1;
//   console.log(count);
// }
