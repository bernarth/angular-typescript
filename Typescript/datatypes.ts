// string
let lname: string;
lname = 'Santosh';
let newname = lname.toUpperCase();
console.log(newname);

// number
let age: number;
age = 25;
age = 25.5;

let dob = '25';
let result = parseInt('25');
console.log(result);

// boolean
let isValid: boolean = false;
console.log(isValid);

// arrays
let empList: string[];
empList = ['Alberth', 'Bernarth', 'Condori'];
let numList: Array<number>;
numList = [1, 2, 3, 4, 5];

let results = numList.filter((num) => num > 2);
let num = numList.find(num => num === 2);
let sum = numList.reduce((acc, num) => acc + num);

console.log(results, num, sum);

// enum
// it's better to define it as const for production code
const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;

// tuple
let swapNumbs: [number, number];

function swapNumbers(num1: number, num2: number) : [number, number] {
    return [num2, num1];
}

swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs);

// any
// Try to avoid any
let department: any;
department = 'IT';
department = 10;
