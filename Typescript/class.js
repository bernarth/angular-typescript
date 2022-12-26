"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
// Creating Classes
// Follow a Pascal convention
// * If we don't wan to assign add ! (i.e. name!: string;)
// * To define a private property I can use '#' or 'private'
// * By default all memebers are public
// * To define a protected memeber write protected
class Employee {
    // Static Members
    static getEmployeeCount() {
        return 50;
    }
    // We cannot have two constructors
    constructor(id, name, address) {
        // Class Properties and constructor
        // Member Visibility
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    // Class Methods
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
    // getters and setters
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    // Implementing interface
    login() {
        return { id: 1, name: 'Alberth', email: 'alberth@email.com' };
    }
}
_Employee_id = new WeakMap();
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
// Creating Instance of Class
let john = new Employee(1, 'John', 'Highway 75');
let information = john.getNameWithAddress();
let mike = new Manager(2, 'Mike', 'Cherise Drive');
console.log(john, information);
console.log(mike);
// use getters and setters
john.empId = 100;
console.log(john.empId);
// A class will be responsible to handle some bussiness logic.
