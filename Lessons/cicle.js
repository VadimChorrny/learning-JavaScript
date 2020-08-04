// Theme: Цикли

// while, do while, for ,for of, for in

// ітератор це лічильник який рахує ітерації

// let i = 0;

// while(i < 10) {
//     console.log(i);
//     i++; // inkrement
// } // 0 1 2 3 4 5 6 7 8 9 10

// let i = 10;
// while(i--) {
//     console.log(i);
// } // 9 8 7 6 5 4 3 2 1 0

// do {
//     console.log('action');
// } while(i > 0);

//  for (let i = 0; i < 10; i++) {
//      if (i === 5){
//          break;
//      }
//      console.log(i);
//  }

// let str = 'Hello';
// let res = '';

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]); // при кожній ітерації будемо отримувати один символ
// }

// console.log(res);

// let colors = ['white', 'black', 'yellow', 'orange'];

// for (let i = 0; i < colors.length; i++){
//     console.log(colors[i]);
//     colors[i] = colors[i].toUpperCase();
// }

// console.log(colors);

// const users = [
// {
//     name: 'Vadim',
//     age: 30
// },
// {
//     name: 'Denis',
//     age: 12
// },
// {
//     name: 'Maks',
//     age: 25
// },
// {
//     name: 'Olga',
//     age: 2
// },
// ];

// const usersObj = {  }

// for ( let i = 0; i < users.length; i++ ) {
//     console.log(users[i].age);
//     usersObj[users[i].name] = users[i];
// }

// console.log(usersObj['Vadim']);

// const user = {
//     name: 'Vadim',
//     age = 16
// };

// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

for ( let value of users ) {
    console.log(value);
}