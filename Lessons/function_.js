function sayHello(firstName, lastName) {
  if (!firstName) return;
  console.log(firstName, lastName);
  console.log("hello world");
  return `Hello ${firstName} ${lastName}`; // ask
}

let res = sayHello("Vadim", "Chorrny");
let res2 = sayHello("Vadim", "Chorrny") + "!";
let res3 = sayHello();
console.log(res3);
