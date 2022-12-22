"use strict";
// string
let lname;
lname = 'Santosh';
let newname = lname.toUpperCase();
console.log(newname);
// number
let age;
age = 25;
age = 25.5;
let dob = '25';
let result = parseInt('25');
console.log(result);
// boolean
let isValid = false;
console.log(isValid);
// arrays
let empList;
empList = ['Alberth', 'Bernarth', 'Condori'];
let numList;
numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num > 2);
let num = numList.find(num => num === 2);
let sum = numList.reduce((acc, num) => acc + num);
console.log(results, num, sum);
let c = 2 /* Color.Blue */;
// tuple
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs);
// any
// Try to avoid any
let department;
department = 'IT';
department = 10;
