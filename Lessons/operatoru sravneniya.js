// Операторы сравнения

//Многие операторы сравнения известны нам из математики:

// Больше/меньше: a > b, a < b.
// Больше/меньше или равно: a >= b, a <= b.
// Равно: a == b. Один знак равенства a = b означал бы присваивание.
// Не равно: a != b.

alert( 2 > 1 );  // true (верно)
alert( 2 == 1 ); // false (неверно)
alert( 2 != 1 ); // true (верно)

// Сравним null с нулём:

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false