const btn = document.querySelector("button");
const container = document.querySelector(".container");
function getPosts(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.addEventListener("load", () => {
    console.log(xhr.responseText);
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.addEventListener("error", () => {
    console.log("error");
  });

  xhr.send();
}

btn.addEventListener("click", (e) => {
  getPosts((response) => {
    const fragment = document.createDocumentFragment();
    response.forEach((post) => {
      const card = document.createElement("div");
      card.classList.add("card");
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      const title = document.createElement("h5");
      title.classList.add("card-title");
      const article = document.createElement("p");
      article.classList.add("card-text");
      cardBody.appendChild(title);
      cardBody.appendChild(article);
      cardBody.appendChild(cardBody);
      fragment.appendChild(card);
    });
    container.appendChild(fragment);
  });
});
