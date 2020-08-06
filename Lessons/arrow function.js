// Стрелочна функция

const plus = (x = 5, y = 5) => x + y; // 10
const plusRes = plus(1, 2);
console.log(plusRes);

// function plusFoo(x, y) {   // все те саме, що і стрелочна функція
//   return x + y;
// }

const withoutArgs = () => console.log("Hello world!");
const singleArg = (x = 1) => x * 2;
const moreActions = (a, b) => {
  // звичайна функція
  a *= 2;
  b *= 3;
  return a + b;
};
const returnObj = (str = "") => ({
  value: str,
  length: str.length,
});

function plusFoo(x, y) {
  console.log(arguments);
  return x + y;
}

// plusFoo(1,2,3, 'hello'); // not array its object

const obj = {
  firstName: "Vodem",
  getFirstName() {
    console.log(this);
  },
  getAgeArrow: null,
  getAge() {
    // this.getAgeArrow = () => console.log(this);
    setTimeout(() => console.log(this));
  },
};

obj.getAge();
// obj.getAgeArrow();
