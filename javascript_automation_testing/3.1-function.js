//========================
//simple function without parameter
//========================

function simple() {
  console.log("Simple function without parameter/arguments");
}
simple(); //calling a funtion

//========================
//simple function with parameter
//========================
function fullname(first_name, last_name) {
  console.log(`My name is ${first_name + " " + last_name}`);
}
fullname("Sajid", "Bashir");

//========================
//anonymous function
//========================
// An anonymous function is a function that has no name.
// TO Access this function We assign it to a variable(here we use greet), like this:

let greet = function () {
  console.log("Hello!");
};
greet(); // Output: Hello!

//========================
//arrow function
//========================
const arrow_function = () => {
  console.log("arrow function is here");
};
arrow_function();

//========================
// Simple function with return -> with return keyword function return the
//========================
function returntype(a, b) {
  return a + b;
}
//console.log(returntype(4, 3));

//========================
// A function find max number
//========================
//Use return: When you need a result(calculation base) from the function.
//Don't use return: When the function is just doing something and doesn't need to give back a result.
//Return
function findMax(num1, num2) {
  if (num1 > num2) {
    console.log("num 1 is greater");
    return num1;
  } else if (num2 > num1) {
    console.log("num 2 is greater");
    return num2;
  } else {
    return "Both numbers are equal";
  }
}
console.log(findMax(7, 7));

//========================
//No need the return
//========================
//🔸 Jab return use nahi karna chahiye:
//❌ 1. Jab sirf kuch show karna ho, result wapas nahi chahiye

function greet(name) {
  console.log("Hello " + name); // Sirf message dikhana hai
  // Return ki zarurat nahi
}

greet("Sajid"); // Output: Hello Sajid
