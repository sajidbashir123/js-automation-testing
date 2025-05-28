// Objects with Different Data Types (Number, Array, Function)
/*
In JavaScript, object values (properties) can hold any data type, including:

-> Number
-> Array
-> Function

This file demonstrates how to use these data types inside an object.
*/

// Define an object with number, array, and function as property values
let student = {
  age: 21, // number
  scores: [85, 92, 78], // array
  greet: function () {
    // function
    return "Hello, welcome to JavaScript learning!";
  },
};

// Access the number value
console.log("Age:", student.age); // Output: Age: 21

// Access and manipulate the array value
console.log("Scores:", student.scores); // Output: Scores: [85, 92, 78]

// Access individual score
console.log("First Score:", student.scores[0]); // Output: First Score: 85

// Add a new score
student.scores.push(88);
console.log("Updated Scores:", student.scores); // Output: Updated Scores: [85, 92, 78, 88]

// Call the function stored in the object
/*
Note: Whenever we call any propery we just write poperty name but for the funtions we will put () in front of function name.
*/

console.log(student.greet()); // Output: Hello, welcome to JavaScript learning!
