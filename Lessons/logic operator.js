// Theme Условный оператор 

// >, <, >=, <=, ==, === , !=, !==

let value;

value = 1 > 2;
value = 1 <= 2;
value = 1 == 1;
value = 1 === '1';
value = 1 != '1';
value = 1 !== '1';
value = 'a' == 'A';
value = 'a'.charCodeAt(); // показує яке число в букви

console.log(value);

value = 10;

if (value === 10) {
    console.log('value: 10');
} else {
    console.log('else');
}

value = null;

if (value) {
    console.log('some actions');
} else {
    console.log('else', value);
}

// || && !

value = null;

if (value === null) {
    console.log(value);
}


value = [];

if (Array.isArray(value)) { // ask .length
    console.log(value);
} else {
    console.log('array is empty');
}

let user = {
    name: 'Vadim'
};

if (user.hasOwnProperty) { // ask   // щоб не писати user.name можна написати .hasOwnProperty
    console.log(user.name);
} else {
    console.log('else');
}

// || &&

value = 1 || 0; // || или 
let age = 10;

if (age < 16 || age > 65) {
    console.log('good');
} else {
    console.log('else');
}

let serverNickName = 'Vadim';
let nickname = serverNickName || 'default nickname';

console.log(nickname); 

value = 1 && 0 && 3;
// && <-- завжди вертає false
productPrice = 10;

if (productPrice >= 5 && productPrice <= 20) {
    console.log('beru');
} else {
    console.log('else');
}

console.log(value);

value = 10;
if (value < 10){
    console.log('value < 10', value);
} else if (value >= 10) {
    console.log('value >= 10', value);
} else {
    console.log('else');
}


