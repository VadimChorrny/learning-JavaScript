// Theme Логические операторы

// В JavaScript есть три логических оператора: || (ИЛИ), && (И) и ! (НЕ)

// Оператор «ИЛИ» выглядит как двойной символ вертикальной черты:

// result = a || b;

// тру буде завжди якщо він присутній

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

// Обычно оператор || используется в if для проверки истинности любого из заданных условий.

// К примеру:

let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'Офис закрыт.' );
}

// Mожно передать и больше условий:

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'Офис закрыт.' ); // это выходной
}


// ИЛИ «||» находит первое истинное значение

lert( 1 || 0 ); // 1
alert( true || 'no matter what' ); // true

alert( null || 1 ); // 1 (первое истинное значение)
alert( null || 0 || 1 ); // 1 (первое истинное значение)
alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)

let currentUser = null;
let defaultUser = "John";

let name = currentUser || defaultUser || "unnamed";

alert( name ); // выбирается "John" – первое истинное значение

// && (i)

// result = a && b;
// В традиционном программировании И возвращает true, если оба аргумента истинны, а иначе – false:

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
// Пример с if:

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}
// Как и в случае с ИЛИ, любое значение допускается в качестве операнда И:

if (1 && 0) { // вычисляется как true && false
  alert( "не сработает, так как результат ложный" );
}