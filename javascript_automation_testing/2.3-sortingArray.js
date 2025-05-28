// There are two types of sorting in arrays:
// 1 - Sorting a string array
// 2 - Sorting a number array

console.log("Sorting a string array");
const fruits = ["banana", "apple", "pomegranate"]; //output>>>>> [ 'apple', 'banana', 'pomegranate' ]
// 1 - Sorting a string array
fruits.sort();
console.log(fruits);

///////////////////////////////
/*
Uppercase letters (like "P") come before
Lowercase letters (like "a" or "b") */

const fruit = ["banana", "apple", "Pomegranate"]; //output>>>>>>> [ 'Pomegranate', 'apple', 'banana' ]

// Sorting a string array
fruit.sort();
console.log(fruit);

// 2 - Sorting a number array
console.log("Sorting a number array");

var marks = [12, 3, 16, 19, 14];
/*
// Sorting numbers in ascending order
marks.sort(function (a, b) {
  return a - b; // To geting results in decending order just change b-a in return.
});
console.log(marks);
*/
//we can also write the above code in oneline using arrow function
marks.sort((a, b) => {
  return a - b;
});

console.log(marks);
