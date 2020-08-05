const numArr = [2, 32, 1234, 54, 323];

let value = numArr.length;

value = Array.isArray(numArr); // має буть true // ask
value = numArr[2];

numArr[2] = 12; // change 2 index (1234 = 12)

value = numArr.indexOf(32);

value = numArr.push(100); // add number
value = numArr.pop(); // delete number
value = numArr.unshift(111); // add in start array
value = numArr.shift(); // delete number array with start
value = numArr.slice(0, 2);
value = numArr.splice(1, 1);
value = numArr.reverse(); // перевертає масив
value = numArr.concat(numArr); // робить копію масиву
value = numArr.join(" "); // показує масив
value = "hello world".split(" "); // розбиває строку

console.log(value, numArr);
