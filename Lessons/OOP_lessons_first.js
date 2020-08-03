// let user = new Object;
// let user = {  // create object :) 
//     name: "Vadim", // name - це ключ під яким зберігається значення "John"
//     age: 16 // age - key, 16 - Значення
//  };

//  // отримуємо властивості 
// console.log( user.name ); // Vadim
// console.log( user.age ); // 16

// // так же можна добавлять ще перемінні

// user.isAdmin = true; // додали перемінну isAdmin

// delete user.age; // за допомогою delete можна удалять пермінні

// // тепер в нас залишилось дві властивості name i isAdmin

// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true,  // якщо ми хочемо створити властивість з декількох слів,тоді ми беремо в лапки.
// }

// // Якщо так викликати властивість user.likes birds <-- буде синтаксична помилка

// // Приклад як правильно

// let user = {};

// // присваивание значения свойству
// user["likes birds"] = true;

// // получение значения свойства
// alert(user["likes birds"]); // true

// // удаление свойства
// delete user["likes birds"];

// // Квадратні( [] ) скобки можуть дозволити відкликнуться до властивості,
// // імя якого може буть результатом выражения 
// // імя властивості може зберігатись в перемінній 

// let key = "likes birds";

// // то же самое, что и user["likes birds"] = true;
// user[key] = true; // in variable key буде "likes birds"

// // Приклад

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = prompt("Что вы хотите узнать о пользователе?", "name");
  
//   // доступ к свойству через переменную
//   alert( user[key] ); // John (если ввели "name")

//   // Властивість з перемінної

//   function makeUser(name, age) {
//     return {
//       name: name,
//       age: age
//     };
//   }
  
//   let user = makeUser("John", 30);
//   alert(user.name); // John

//   // Замість name:name - можна просто написать name.

//   function makeUser(name, age) {
//     return {
//       name, // то же самое, что и name: name
//       age   // то же самое, что и age: age
//     };
//   }

//  // Например, если использовать как ключ число 0, то оно превратится в строку "0":

// let obj = {
//   0: "Тест" // то же самое что и "0": "Тест"
// };

// // обе функции alert выведут одно и то же свойство (число 0 преобразуется в строку "0")
// alert( obj["0"] ); // Тест
// alert( obj[0] ); // Тест (то же свойство)

// // Цикл «for…in»

let codes = {
    "432": "Германия",
    "431": "Швейцария",
    "44": "Великобритания",
    "110": "США"
  };
  
  for (let code in codes) { // let code це переміна в якій буде обєкт codes.
    alert(code); // 1, 41, 44, 49
  }

  //  for in а ще ця єбана хуйня може впорядковувати цифри))))
  // числа йдуть в порядку зростання
  // але якщо в обєкті є не тільки цифри, а наприклад перемінні 

  // Копіювання по силці

let message = "Hello!";
let phrase = message;

  // example

let user = { name: "John" };
let admin = user; // копируется ссылка


// variable change

let user = { name: 'John' };
let admin = user;
admin.name = 'Pete'; // изменено по ссылке из переменной "admin"
alert(user.name); // 'Pete', изменения видны по ссылке из переменной 

// clone object

let user = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // новый пустой объект
  
  // скопируем все свойства user в него
  for (let key in user) {
    clone[key] = user[key];
  }
  
  // теперь в переменной clone находится абсолютно независимый клон объекта.
  clone.name = "Pete"; // изменим в нём данные
  
  alert( user.name ); // в оригинальном объекте значение свойства `name` осталось прежним – John
 // Кроме того, для этих целей мы можем использовать метод Object.assign.

 // Синтаксис:
  
  Object.assign(dest, [arg]) // ця дічь робить клонування arg = argument

 // Например, объединим несколько объектов в один:

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }

let user = { name: "John" };

// свойство name перезапишется, свойство isAdmin добавится
Object.assign(user, { name: "Pete", isAdmin: true });

// now user = { name: "Pete", isAdmin: true }

// Мы также можем использовать Object.assign для простого клонирования:

let user = {
    name: "John",
    age: 30
  };
  
  let clone = Object.assign({}, user);

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

let user = {
    name: "John",
    surname: "Smith",
}

user.name = "Pete";

delete user.name;