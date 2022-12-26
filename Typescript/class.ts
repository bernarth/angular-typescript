// Creating Classes
// Follow a Pascal convention
// * If we don't wan to assign add ! (i.e. name!: string;)
// * To define a private property I can use '#' or 'private'
// * By default all memebers are public
// * To define a protected memeber write protected
class Employee {
    // Class Properties and constructor
    // Member Visibility
    #id: number;
    protected name: string;
    address: string;

    // Static Members
    static getEmployeeCount(): number{
        return 50;
    }

    // We cannot have two constructors
    constructor(id: number, name: string, address: string) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    // Class Methods
    getNameWithAddress(): string {
        return `${this.name} stays at ${this.address}`;
    }

    // getters and setters
    get empId(): number {
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }
}

class Manager extends Employee{
    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }

    getNameWithAddress(): string {
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
