console.log("Start");

console.log("Start 2");

// window.setTimeout(function() {/* сюда пихаєм функцію, якщо вона нада*/}, 2000)
// 2000 - це наприклад

window.setTimeout(function () {
  console.log("inside timeout,after 2000 seconds");
}, 2000);

console.log("end");

function sEtTimeout() {
  console.log("Я тут ахаххах");
}

setTimeout(sEtTimeout, 2000);
