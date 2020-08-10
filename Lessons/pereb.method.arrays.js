const people = [
  { name: "Vadim", age: 25, budget: 10000000 },
  { name: "Vladislav", age: 17, budget: 3400 },
  { name: "Egor", age: 14, budget: 6000 },
  { name: "Misha", age: 7, budget: 180000 },
  { name: "Vasya", age: 45, budget: 45543 },
  { name: "Victoriya", age: 19, budget: 42312 },
];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]); // ES5
// }

// for (let person of people) {
//   console.log(person); // ES6
// }

// forEach

people.forEach(function (person) {
  console.log(person);
});

people.forEach((person) => console.log(person));

// filter

// const adults = people.filter((person) => {
//   if (person.age >= 18) {
//     return true;
//   }
// });

const adults = people.filter((person) => person.age >= 18);

console.log(adults);

// map

const newPeople = people.map((person) => person.age * 3);
console.log(newPeople);

// reduce

// let amount = 0
// for (let i = 0; i < people.length; i++){
//     amount += people[i].budget
// }

const amount = people.reduce((total, person) => {
  return total + person.budget;
});

// some/every

// sort

// find

people.find((person) => person.name === "Vodem");
console.log(vodem);

// findIndex

const vadimIndex = people.findIndex((person) => person.name === "Vodem");
console.log(vadimIndex);

// ==========

people.filter((person) => person.budget > 11111);
people.map((person) => {
  return {
    info: `${person.name} (${person.age})`,
    budget: person.budget,
  };
});

console.log(newPeople);
