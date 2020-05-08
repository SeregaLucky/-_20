// import images from "./data.js";
// window.addEventListener("contextmenu", fn1);

// function fn1(e) {
//   console.log(111);
//   e.preventDefault();
// }
// https://habr.com/ru/post/165645/

//
//
//
//

// const parentDiv = document.querySelector(".js_container_img");

// const allDiv = images.map((amage) => tamplate(amage.src)).join("");

// function tamplate(src) {
//   return `
//     <div>
//         <img src="" data-source="${src}" alt="">
//     </div>
//     `;
// }

// parentDiv.insertAdjacentHTML("beforeend", allDiv);

// // //
// // //

// const allImage = document.querySelectorAll("img");

// allImage.forEach((image) => lazyLoad(image));

// function lazyLoad(image) {
//   const options = {
//     rootMargin: "500px",
//   };
//   //   console.log(image);
//   const entryFn = (entry, observer) => {
//     console.log(entry);
//     // console.log(entry[0]);
//     // console.log(entry[0].isIntersecting);

//     if (entry[0].isIntersecting) {
//       //   console.log(entry[0].target);
//       const src = entry[0].target.dataset.source;
//       //   console.log(src);
//       entry[0].target.src = src;

//       observer.disconnect();
//     }
//   };

//   const intOb = new IntersectionObserver(entryFn, options);

//   intOb.observe(image);
// }

//
//
//
//

// let a = [11, 22];

// const b = a;

// a = [...a, 33];

// console.log(a);
// console.log(b);

//
//
//
//

// // const allDiv2 = document.querySelectorAll(".js_div");
// const allDiv2 = document.querySelectorAll("img");

// const entryFn = (entry, observer) => {
//   console.log(entry);

//   entry.forEach((entry) => {
//     // console.log(entry);

//     if (entry.isIntersecting) {
//       //   console.log(entry.target);
//       const src = entry.target.dataset.source;
//       //   console.log(src);
//       entry.target.src = src;

//       // observer.disconnect();
//       //   console.log(observer);
//       observer.unobserve(entry.target);
//     }
//   });
// };

// const intOb = new IntersectionObserver(entryFn, {});

// // intOb.observe(image);
// // intOb.observe(...allDiv);
// allDiv2.forEach((div) => intOb.observe(div));

//
//
//
//

// const btn = document.querySelector(".js_btn");

// // btn.addEventListener("click", fn1);
// // btn.addEventListener("click", (e) => fn1(e, "Hello"));

// btn.addEventListener("click", function (e) {
//   fn1(e, "Hello");
// });

// function fn1(e, text) {
//   console.log(e);
//   console.log(text);
// }

//
//
//
//

const input = document.querySelector("#controls > input");
const btnRender = document.querySelector("button[data-action='render']");
const btnDestroy = document.querySelector("button[data-action='destroy']");
const box = document.querySelector("#boxes");

btnRender.addEventListener("click", takeValueInput);

function takeValueInput() {
  const valueInput = Number(input.value);
  createBoxes(valueInput);
}

function createBoxes(amount) {
  const allDiv = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    // div.style.height = `${30 + i * 10}px`;
    // div.style.width = `${30 + i * 10}px`;
    // // div.style.background = creatColor();
    // div.style.background = "#" + generateColor();

    div.style.cssText = `width: ${30 + i * 10}px; height: ${
      30 + i * 10
    }px; background-color: #${generateColor()}`;

    allDiv.push(div);
  }

  box.append(...allDiv);
}

function creatColor() {
  //   const first = Math.random() * 255;
  //   const second = Math.random() * 255;
  //   const therd = Math.random() * 255;
  //   return `rgb(${first},${second},${therd})`;
}
const generateColor = () => Math.floor(Math.random() * 16777216).toString(16);
