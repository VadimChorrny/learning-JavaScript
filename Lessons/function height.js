// function foo() {
//     console.log('hello world');
// }

// foo();

// foo.field = 'Vadim';

// console.log(foo.field);

// const arr = ["Vadim", "Ivan", "Maks", "Olga"];
// // => [5, 4 ,4 ,4];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i.length]);
// }

// console.log(newArr);

// let newArr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr2.push(arr[i].toUpperCase());
// }

// console.log(newArr2);

const name = ["Vadim", "Ivan", "Maks", "Olga"];

function mapArray(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}

function nameLength(el) {
  console.log(el);
  return el.length;
}

function nameToUpperCase(el) {
  return el.nameToUpperCase();
}

const result = mapArray(name, nameLength);
const result2 = mapArray(name, nameToUpperCase);

// console.log(result2);

function greeting(firstName) {
  return function (lastName) {
    return `Hellpp, ${firstName} ${lastName}`;
  };
}

const testGreeting = greeting("Denis");
const fullName = testGreeting("kakoyto");
console.log(fullName);

function question(job) {
  if (job === "developer") {
    return function (name) {
      return `${name}, что такое JavaScript?`;
    };
  } else if (job === "teacher") {
    return function (name) {
      return `${name}, какой предмет вы ведете?`;
    };
  }
}

const developerQuestion = question("developer");
console.log(developerQuestion("Vadim"));
const teacherQuestion = question("teacher");
console.log(teacherQuestion("Vadim"));
