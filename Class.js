// Constructor function
// Capitalize the first letter of the class

// This is the ES6 way of doing it, which is the newest JS version
class Person {
    constructor(firstName, lastName, dob) {
        // this initializes the object and its properties
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    // Methods
    // Shown in the console under __proto__
    // doesnt include in the object unless called
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const Person1 = new Person('John', 'Doe', '4-3-1980');
const Person2 = new Person('Mary', 'Smith', '3-6-1970');
