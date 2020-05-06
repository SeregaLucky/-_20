// const list = document.querySelector(".list_js");
// console.log(list);

// createElement
// const li = document.createElement("li");
// console.log(li);
// li.textContent = "222";
// li.setAttribute("class", "js_item");

// list.append(li);

//
//

// createElement
// const li = "<li class='js_item'></li>";
// console.log(li);

// list.insertAdjacentHTML("beforeend", li);

// const findLi = document.querySelector(".js_item");
// // console.log(findLi);
// findLi.textContent = "222";

//
//
//
//

// const list = document.querySelector(".js_list");
// const item = list.querySelector("li");
// const item = document.querySelector(".js_list > li");
// console.log(item);

// setInterval(() => {
//   item.remove();
//   // list.children[0].remove();
// }, 3000);

//
//
//
//
// const form = document.querySelector(".js_form");
// console.log(form);
// // console.log(form.children);
// console.log(form.elements);
// console.log(form.elements.myInput111);

// form.elements.myInput111.value = "111";
// console.log("value", form.elements.myInput111.value);

//
//
//
//

// const form = document.querySelector(".js_form");

// form.addEventListener("submit", handleSubmitForm);

// function handleSubmitForm(event) {
//   event.preventDefault();
//   console.log(111);
// }

// // form.addEventListener("submit", (event) => {
// //   event.preventDefault();
// //   console.log(111);
// // });

// const buttonStop = document.querySelector('button[data-action2="click11"]');
// console.log(buttonStop);
// buttonStop.addEventListener("click", stopForm);

// function stopForm() {
//   form.removeEventListener("submit", handleSubmitForm);
// }

//
//
//
//
// const input = document.querySelector("input");

// input.addEventListener("input", handleInput);

// function handleInput() {
//   console.log(111);
// }

// // input.addEventListener("input", () => {
// //   console.log(111);
// // });

// const buttonStop = document.querySelector('button[data-action2="click11"]');
// console.log(buttonStop);
// buttonStop.addEventListener("click", stopForm);

// function stopForm(event) {
//   console.log(event);
//   console.log(event.currentTarget);
//   // console.log("STOP input");

//   // input.removeEventListener("input", handleInput);

//   // input.removeEventListener("input", () => {
//   //   console.log(111);
//   // });
// }
