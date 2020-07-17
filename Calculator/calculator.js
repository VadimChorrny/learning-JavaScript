let num1;  
let out = document.getElementById('out');
 
function plus() {
 num1 = document.getElementById('n1').value; 
 num1 = parseInt(num1)
 num2 = document.getElementById('n2').value;
 num2 = parseInt(num2)
 
 out.innerHTML = num1 + num2;
}
 
function minus() {
 num1 = document.getElementById('n1').value; 
 num1 = parseInt(num1)
 num2 = document.getElementById('n2').value;
 num2 = parseInt(num2)
 
 out.innerHTML = num1 - num2;
}
 
function multiplication() {
 num1 = document.getElementById('n1').value; 
 num1 = parseInt(num1)
 num2 = document.getElementById('n2').value;
 num2 = parseInt(num2)
 
 out.innerHTML = num1 * num2;
}
 
function division() {
 num1 = document.getElementById('n1').value; 
 num1 = parseInt(num1)
 num2 = document.getElementById('n2').value;
 num2 = parseInt(num2)
 
 out.innerHTML = num1 / num2;
}
