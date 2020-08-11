const btn = document.querySelector("button");
const link = document.querySelector("a");
// btn.onclick = function () {
//   console.log("по єбалу хош?");
// }; ця єбеня застарівша

// btn.addEventListener("click", function (e) {
//   console.log(e);
// });

// btn.addEventListener("click", function () {
//   console.log("по єблу хоч?");
// });

btn.addEventListener("click", (e) => {
  console.log(this);
  console.log(e);
});

/*function clickHandler(e) {
  e.preventDefault();
  console.log(this);
  console.log("click");
}*/

//link.addEventListener("click", clickHandler);

//link.removeEventListener("click");

const container = document.querySelector(".container");

btn.addEventListener("click", (e) => {
  const div = document.createElement("div");
  const nestedBtn = document.createElement("button");
  div.textContent = Math.random();
  nestedBtn.textContent = "button";
  div.appendChild(nestedBtn);
  container.appendChild(div);
});

container.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.tagName === "Button") {
    console.log("button clicked");
  }
});
