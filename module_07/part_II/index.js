// const button = document.querySelector(".js_button");
// const body = document.body;

// button.addEventListener("click", clickFun);

// function clickFun() {
//   console.log(111);
//   //   body.style.background = "orange";
//   body.classList.toggle("body_active");
// }

//
//
//
//

// const input = document.querySelector(".js_input");
// const p = document.querySelector(".js_show_text");

// // const showText = (event) => (p.textContent = event.target.value);

// input.addEventListener("input", showText);

// function showText(event) {
//   const value = event.target.value;
//   p.textContent = value;
// }

//
//
//
//

// const p = document.querySelector(".js_show_text_keys");
// const btnStop = document.querySelector(".js_button2");

// window.addEventListener("keypress", fn1);
// // window.addEventListener("keypress", (event) => {
// //   console.log(event);
// //   console.log(event.key);
// //   p.textContent += event.key;
// // });

// btnStop.addEventListener("click", stopWork);

// function fn1(event) {
//   //   console.log(event);
//   //   console.log(event.key);
//   p.textContent += event.key;
// }

// function stopWork() {
//   console.log("STOP");
//   window.removeEventListener("keypress", fn1);
//   btnStop.removeEventListener("click", stopWork);
//   //   window.removeEventListener("keypress", (event) => {
//   //     console.log(event);
//   //     console.log(event.key);
//   //     p.textContent += event.key;
//   //   });
// }

//
//
//
//

// const form = document.querySelector(".js_form");

// form.addEventListener("submit", submitForm);

// function submitForm(e) {
//   e.preventDefault();
//   //   console.log(e.currentTarget.elements.login.value);
//   //   const valueLigin = e.currentTarget.elements.login.value;
//   //   const valuepassword = e.currentTarget.elements.password.value;
//   //   const valuefirstName = e.currentTarget.elements.firstName.value;
//   //   const valuelastName = e.currentTarget.elements.lastName.value;
//   //   const valueage = e.currentTarget.elements.age.value;
//   //   console.log(valueLigin);
//   //   console.log(valuepassword);
//   //   console.log(valuefirstName);
//   //   console.log(valuelastName);
//   //   console.log(valueage);

//   const formData = new FormData(e.currentTarget);
//   console.log(formData);

//   const obj = {};
//   formData.forEach((value, name) => {
//     // console.log(name, value);
//     obj[name] = value;
//   });

//   console.log(obj);
// }

//
//
//
//

// const data = {
//     title: '',
//     anchor: '',
//     price: '',
//     description: ''
// }

// export function getNewItemInfo(e) {
//     data[e.target.name] = e.target.value;
// }

//
//
//
//

// const input = document.querySelector(".js_input");

// input.addEventListener("focus", fn1);
// input.addEventListener("blur", fn2);

// function fn1(e) {
//   //   console.log(111);
//   e.target.classList.add("active_inp");
// }

// function fn2(e) {
//   //   console.log(222);
//   e.target.classList.remove("active_inp");
// }

//
//
//
//

// const button = document.querySelector(".js_btn");
// const p = document.querySelector(".js_text");

// const person = {
//   name: "Alex",

//   // showName: function(){}

//   showName() {
//     console.log(this);
//     p.textContent = this.name;
//   },
// };

// button.addEventListener("click", person.showName.bind(person));

//
//
//
//
const PASSWORD = "1111";

const body = document.body;
const overlay = document.createElement("div");
const input = document.createElement("input");

overlay.style.top = 0;
overlay.style.bottom = 0;
overlay.style.right = 0;
overlay.style.left = 0;
overlay.style.background = "orange";
overlay.style.display = "flex";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
overlay.style.position = "fixed";
overlay.style.zIndex = 99999;
// overlay.style.  =  ;

overlay.append(input);
body.append(overlay);

input.addEventListener("input", fn1);
function fn1(e) {
  if (e.target.value === PASSWORD) {
    overlay.style.display = "none";
    input.removeEventListener("input", fn1);
  }
}
