const div = document.querySelector("div");
const titles = document.querySelectorAll("h1");
// const h1 = document.getElementsByTagName("h1");
// console.dir(h1);
// console.log(titles);
// console.log(Array.from(titles));
// console.log(Array.prototype.slice.call(titles));
// console.log([...titles]);

console.log(div.parentElement); // в чому різниця parentElement і parentNode

const link = div.querySelector(".link");
// console.log(link.parentElement);
// console.log(link.closest(".content"));

div.classList.add("article", "custom");
div.classList.remove("article");
// div.classList.contains('custom')
console.log(div.classList);

// div.classList.toggle("toggle");  add
// div.classList.remove("toggle"); delete
// div.className; show all class name
// console.dir - info

div.setAttribute("id", "myId"); // add in class div new attribute id - myId
// div.getAttribute("id"); veref
// div.removeAttribute("id"); delete attribute
// div.hatAttribute("id");

// div.dataset.myattr // show myattr

// Манипуляция DOM

const title = document.querySelector("h1");
// title.innerHTML = "<span>text</span> ";
// title.textContent = "new text";
// title.appendChild('text')
title.insertAdjacentHTML("beforebegin", "<h2>text</h2>"); // заміна .innerHTML
// innerHTML - хрень небезпечна

// Create new element

const span = document.createElement("span");
span.textContent = "span created by createElement";
// .textContent додає в атрибут новий текст
span.classList.add("myClass");
console.log(span);
title.appendChild(span);
// переміщення атибуту span з класу title в клас div
// div.appendChild(span);

const fragment = document.createDocumentFragment();
const colors = ["black", "yellow", "orange"];
colors.forEach((color) => {
  const item = document.createElement("div");
  div.classList.add(`bg-${color}`);
  item.style.background = color;
  item.textContent = color;
  fragment.appendChild(item);
});

document.body.appendChild(fragment);

// delete element

title.remove();
