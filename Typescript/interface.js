"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Using Interfaces as Types
let user = { id: 1, name: 'Alberth', email: 'alberth@email.com' };
// Object Destructuring
let { name, email: userLogin } = { id: 2, name: 'Bernarth', email: 'bernarth@email.com' };
console.log(name, userLogin);
let employee = { id: 2, name: 'Alberth', email: 'alberth@email.com', salary: 5000 };
// Array Destructuring
const [user1, user2, ...restUsers] = [
    { id: 11, name: 'Name1', email: 'name1@email.com' },
    { id: 12, name: 'Name2', email: 'name2@email.com' },
    { id: 13, name: 'Name3', email: 'name3@email.com' },
    { id: 14, name: 'Name4', email: 'name4@email.com' }
];
console.log(user1, user2);
console.log(restUsers);
let result = restUsers.filter(user => user.id > 13);
console.log(result);
// Optional Interfaces
