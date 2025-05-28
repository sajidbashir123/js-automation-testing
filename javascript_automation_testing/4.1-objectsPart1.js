// What are Objects?
/*
Objects are collections of properties.
A property is always defined as a key-value pair.

-> The key is always a string (or a symbol).
-> The value can be of any data type.

Example: For a person, properties could be:
(firstname, middlename, lastname, phone number, email, address, ID number)
*/

// Object example
let person = {
  firstname: "Muhammad",
  middlename: "Sajid",
  lastname: "Bashir",
};

// Access the entire object
console.log(person);

// Access individual values in the object
console.log(person.firstname, person.middlename, person.lastname); // Dot notation
console.log(person["firstname"]); // Bracket notation

// Update the value of a property
person.firstname = "Shahid";
console.log(person.firstname); // Output: Shahid

// Add a new property to the object
person.gender = "male";
console.log(person);

// Delete a property from the object
delete person.gender;
console.log(person);

// Check if a property exists in the object
console.log("gender" in person); // Output: false
console.log("firstname" in person); // Output: true

// Common Interview Question:
// How to print all the values of an object?

// Iterate over all values in the object
for (let key in person) {
  console.log(person[key]);
}
