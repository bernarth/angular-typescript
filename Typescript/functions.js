"use strict";
// Functions
// We have function that returns a value or nothing 'void'
// Function Declaration
//  With optional parameter
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(1, 2));
console.log(add(1, 2, 3));
// Function Expression
const sub = (num1, num2, num3 = 1) => num1 - num2 - num3;
console.log(sub(10, 4));
console.log(sub(10, 4, 1));
// Function Expression (with anonymous function)
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(4, 4));
// Rest Parameters
function addSeries(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(addSeries(6, 7, ...numbers));
console.log(addSeries(6, 7, 1, 2, 3, 4, 5));
// Generic Functions
// Defined with a Type
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5, 6]);
let concactStrings = getItems(['a', 'b', 'c', 'd', 'e']);
// or we can infer the value
concatResult = getItems([1, 2, 3, 4, 5, 6]);
concactStrings = getItems(['a', 'b', 'c', 'd', 'e']);
console.log(concatResult, concactStrings);
