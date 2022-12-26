// * INTERFACES
// Creting Interfaces
// ! Angular Documentation says don't use 'I<>' Prefix to name your interface
// ...your own user defined data.
export interface User {
    id: number;
    name: string;
    age?: number;
    email: string;
}

// Using Interfaces as Types
let user: User = { id: 1, name: 'Alberth', email: 'alberth@email.com'};

// Object Destructuring
let { name, email: userLogin }: User = { id: 2, name: 'Bernarth', email: 'bernarth@email.com'};
console.log(name, userLogin);


// Extending Interfaces
interface Employees extends User {
    salary: number;
}

let employee: Employees = { id: 2, name: 'Alberth', email: 'alberth@email.com', salary: 5000 };

// Implemening Interfaces
export interface Login {
    login(): User;
}

// Array Destructuring
const [user1, user2, ...restUsers]: User[] = [
    { id: 11, name: 'Name1', email: 'name1@email.com'},
    { id: 12, name: 'Name2', email: 'name2@email.com'},
    { id: 13, name: 'Name3', email: 'name3@email.com'},
    { id: 14, name: 'Name4', email: 'name4@email.com'}
];
console.log(user1, user2);
console.log(restUsers);

let result = restUsers.filter(user => user.id > 13);
console.log(result);

// User Interface just to define a type
/**
 * Interfaces are just like types for classes in TypeScript. It is used for type checking.
 * It only contains the declaration of members of the object. It helps in deriving the classes.
 */

// Decorators are something just in typescript
// With decorators you can modify the behavior of your class at runtime.
// You may need to add them in typescript rules

// @Component({})
// class Component {
//     constructor(public name: string) {

//     }
// }

// * Modifying tsconfig.json
/**
 * Enable outDir and change the path to send the tsc files created to another dir
 * Enable sourceMap to debug typescript. Redirects you to the ts file instead of the js
 * Enable noEmmit to avoid creating js files
 * 
 */
