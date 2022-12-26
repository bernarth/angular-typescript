"use strict";
// Follow a Pascal convention
// * If we don't wan to assign add ! (i.e. name!: string;)
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
let john = new Employee(1, 'John', 'Highway 75');
// john.id = 1;
// john.name = 'John';
// john.address = 'Highway 75';
let information = john.getNameWithAddress();
console.log(john, information);
// Creating Classes
// Class Properties and constructor
// Class Methods
// Creating Instance of Class
// Member Visibility
// Static Members
