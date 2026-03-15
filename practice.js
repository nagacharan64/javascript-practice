// This is a practice file for JavaScript variables and data types
let name  = "charan"; // string
let age  = 22; // number
console.log(name);
console.log(age);


//----------------------------------------
// type of operator
console.log(typeof name); // string
console.log(typeof age); // number

//----------------------------------------
// == vs ===
let a = 5; // number
let b = "5"; // string
console.log(a == b); // true because it converts number into string
console.log(a === b); // false because it checks both value and type

//----------------------------------------
// Type conversion
let c = "10"; // string
let d = Number(c); // converts string to number
console.log(d); // 10
let e  = String(d); // converts number to string
console.log(e); // "10"

//----------------------------------------
// Nan(Nan means not a number)
let invalidNumber = Number("abc");
console.log(invalidNumber); // NaN
console.log(typeof invalidNumber); // number

//----------------------------------------
// Function Declaration
function addnumbers(a, b) {
    return a + b;
} 
console.log(addnumbers(5, 6)); // 11

//----------------------------------------  
// Function Expression
const multiplyNumbers = function(a, b) {
    return a * b;
}
console.log(multiplyNumbers(5, 6)); // 30

//----------------------------------------  
// Hoisting
// function declarations are hoisted in JavaScript
// js moves function declarations to the top before execution
hello();
function hello() {
    console.log("Hello, world!");
}
// without hoasting, error occurs
hello2();
    const hello2 = function() {
        console.log("Hello, world");
    }

    //----------------------------------------
    // typeof with Functions
    // functions are also objects in JavaScript
    console.log(typeof addnumbers); // function

    //----------------------------------------
    //  String and Number  Operations
    // + can concatenate if one operand is string
    console.log("5" + 10); // "510"
    // - converts string to number
    console.log("10" - 5); // 5
    // * converts string to number
    console.log("5" * 2); // 10
    // / converts string to number
    console.log("10" / 2); // 5

    //----------------------------------------
    // call() method
    // used to borrow functions from one object to another
    const person1 = {
        name: "charan"
    }
    const person2 = {
        name: "phani"
    }
    function greet(){
        console.log("Namasthe" + this.name);
    }
    greet.call(person1); // Namasthe charan
    greet.call(person2); // Namasthe phani

    //----------------------------------------
    // apply() method
    // Same as call but arguments passed as array
    function sum(a, b) {
        return a + b;
    }
    sum.apply(null, [5, 10]); // 15

    //----------------------------------------
    // closure
    // a function remembers its outer variables even after the outer function has executed
    
function outer() {

    let count = 0;

    return function() {
        count++;
        console.log("counter:", count);
    };

}

const counter = outer();

counter();
counter();
counter();

// Output:
// counter: 1
// counter: 2
// counter: 3

// -----------------------------------------
// DOM Manipulation
// DOM = Document Object Model
// Used to change HTML using JavaScript.
// <p id="text">Hello</p>
document.getElementById("text").innerText = "Hello, world!"; // changes text to "Hello, world!"

