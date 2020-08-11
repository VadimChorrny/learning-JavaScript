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
