// const list = document.querySelector("ul");
// console.log(list);
// const allLi = list.children;
// console.log(allLi);

// const allLists = document.querySelectorAll("ul");
// console.log(allLists);

// const allListsRealArr = [...allLists];
// console.log(allListsRealArr);

// //
// //
// //
// //

// const alldiv = document.querySelectorAll("div");
// console.log(alldiv);

// //
// //
// //
// //

// const p = document.querySelector("p");
// // const li = p.parentNode;
// // console.log(li);
// // const ul = li.parentNode;
// // console.log(ul);

// const ul = p.closest("ul");
// console.log(ul);

// //
// //
// //
// //

// const li = document.querySelector("li");
// console.log(li);

// const nextLi = li.nextElementSibling;
// console.log("nextLi", nextLi);

//
//
// const ul = document.querySelector("ul");
// const allLi = ul.childNodes;
// console.log(allLi);
// const allLi2 = ul.children;
// console.log(allLi2);

// //
// //
// //
// //

// const allLi = document.querySelectorAll("li");
// console.log(allLi);

// const ul = document.querySelector("ul");
// // console.log(ul.children);
// const allLiInUl = ul.querySelectorAll("li");
// console.log(allLiInUl);

// allLiInUl.forEach((item) => console.log(item));

//
//
//
//
//
//
//
//
//
//

// debugger;
// const p = document.querySelector("p");
// console.log(p);
// console.log(p.textContent);
// p.textContent = "New text =)";

// p.style.background = "orange";
// p.style.fontSize = "22px";

// //
// //
// //
// //

// debugger;
// const list = document.querySelector(".js_list");
// console.log(list);
// list.classList.add("list");

// //
// //
// //
// //

// const list = document.querySelector("#list_id");
// console.log(list);

// const li1 = document.createElement("li");
// const li2 = document.createElement("li");

// li1.textContent = "New item 111";
// li2.textContent = "New item 222";

// // list.appendChild(li1, li2);
// list.append(li1, li2);

// //
// //
// //
// //

// const array = [{ text: "11111111111" }, { text: "22222222222" }];
// const list = document.querySelector("#list_id");

// // const allLi = array.forEach((item) => {
// //   console.log(item);

// //   const li = document.createElement("li");
// //   li.textContent = item.text;
// //   list.appendChild(li);
// // });

// const allLi = array.map((item) => {
//   console.log(item);

//   const li = document.createElement("li");
//   li.textContent = item.text;
//   return li;
// });
// console.log(allLi);

// list.append(...allLi);

//
//

const array = [{ text: "11111111111" }, { text: "22222222222" }];
const list = document.querySelector("#list_id");

// const allLi = array.forEach((item) => {
//   console.log(item);

//   const li = `<li>${item.text}</li>`;

//   //   list.innerHTML = li;
//   list.insertAdjacentHTML("beforeend", li);
// });

const allLi = array
  .map((item) => {
    console.log(item);

    // return `<li>${text}</li>`;
    return tamplate(item.text);
  })
  .join("");

function tamplate(text) {
  return `<li>${text}</li>`;
}

console.log(allLi);

// list.innerHTML += allLi;
// list.innerHTML += allLi;
list.insertAdjacentHTML("beforeend", allLi);
