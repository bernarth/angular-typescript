// Follow a Pascal convention
// * If we don't wan to assign add ! (i.e. name!: string;)
// * To define a private property I can use '#' or 'private'
class Employee {
    id: number;
    name: string;
    address: string;

    // We cannot have two constructors
    constructor(id: number, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    getNameWithAddress(): string {
        return `${this.name} stays at ${this.address}`;
    }
}

let john = new Employee(1, 'John', 'Highway 75');
let information = john.getNameWithAddress();

console.log(john, information);


// Creating Classes
// Class Properties and constructor
// Class Methods
// Creating Instance of Class
// Member Visibility
// Static Members
