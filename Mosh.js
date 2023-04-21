// Tutorial: https://www.youtube.com/watch?v=PFmuCDHHpwk


// Variables
// 2 types: let and const; var is an older way to declare a variable that should not be used
// because it is not block scoped; meaning that it can be accessed outside of the block it was declared in
// this is a problem because it can cause bugs and security issues
// let is used to declare a variable that can be changed
// const is used to declare a variable that cannot be changed


let myName = "Wyatt";
console.log('Variables section:');
console.log(myName);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive


// Constants
const interestRate = 0.3;
// interestRate = 1;
// This will throw an error because you cannot reassign a constant
console.log("\n");
console.log('Constants section:');
console.log(interestRate);


// Primitive Types
// There are 5 types: String, Number, Boolean, undefined, null

let name = "Wyatt"; // String Literal
let age = 18; // Number Literal
let isApproved = true; // Boolean Literal; true or false
let firstName = undefined; // default value of a variable that has not been assigned a value
let selectedColor = null; // null; used to clear the value of a variable

console.log("\n");
console.log('Primitive Types section:');
console.log(typeof name); // returns "string"
console.log(typeof age); // returns "number"
console.log(typeof isApproved); // returns "boolean"
console.log(typeof firstName); // returns "undefined"
console.log(typeof selectedColor); // returns "object"

// Dynamic Typing
    // JavaScript is a dynamically typed language
    // This means that you can change the type of a variable at any time
    // This is different from other languages like C++ and Java
    // In those languages, you must declare the type of a variable when you declare it
    // This is called static typing or statically typed languages; sometimes called strongly typed languages
    // Some people say that JavaScript is a loosely typed language
    // This is because you can change the type of a variable at any time
    // However, JavaScript is not a loosely typed language
    // This is because you cannot change the type of a variable to any type
    // For example, you cannot change a variable from a string to a number
    // JavaScript is a dynamically typed language, not a loosely typed language


// Objects
    // An object is a collection of key-value pairs
    // The key is a string and the value can be any type
    // Objects are used to represent real-world objects
    // Objects are used to store related data
    // Objects are used to group related functionality

let person = {
    name: "Wyatt",
    age: 18
};
console.log("\n");
console.log('Objects section:');
console.log(person)

// Dot Notation
person.name = "John";

// Bracket Notation
let selection = "name";
person[selection] = "Mary";

console.log(person.name);

// Arrays
    // Arrays are used to store a list of items
let selectedColors = ["red", "blue"];
selectedColors[2] = "green";
selectedColors[3] = 1;
console.log("\n");
console.log('Arrays section:');
console.log(selectedColors);
console.log(selectedColors.length);

// Functions
    // Functions are used to perform a task or calculate a value
    // Functions are used to group a set of statements together to perform a specific task
    // They are used to reuse code

function greet(fName, lName) {
    console.log(`Hello ${fName} ${lName}!`);
    // backticks are used to create a template literal
    // template literals are used to embed expressions into strings
    // In javascript, to call the variable inside of a string, you must use ${}
    // Kind of like how you use {} in python when using f-strings

    // Returns by default "Hello undefined undefined!" lol
    // So dont forget to pass in arguments
}

console.log("\n");
console.log('Functions section:');
greet();
greet("Wyatt", "Ptak");
greet("John", "Smith");

