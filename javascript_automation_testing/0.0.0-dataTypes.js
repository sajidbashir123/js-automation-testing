//==================================
// 📦 PRIMITIVE DATA TYPES (Hold single value)
//==================================

// ✅ Number
let a = 3;
let b = 4.5;
console.log(typeof a); // "number"
console.log(a + b); // 7.5

// ✅ String
let firstName = "Sajid";
let lastName = "Bashir";
console.log(typeof firstName); // "string"
console.log(firstName + " " + lastName); // "Sajid Bashir"

// ✅ Boolean
let isDay = true;
let isNight = false;
console.log(typeof isDay); // "boolean"
console.log(isDay); // true

// ✅ Undefined // when a variable is declared and did not assigned any value (Q k value se pta chaly ga datatype kia ha)
let unknown;
var x;
// const y; ❌ Error: const must be initialized
console.log(typeof unknown); // "undefined"
console.log(unknown); // undefined
console.log(x); // undefined

// ✅ Null
let nullValue = null;
console.log(typeof nullValue); // "object" (quirk in JS)
console.log(nullValue); // null

// ✅ BigInt
let bigNumber = 12345678901234567890n;
console.log(typeof bigNumber); // "bigint"

// ✅ Symbol
let id = Symbol("id");
console.log(typeof id); // "symbol"

//==================================
// 🔗 NON-PRIMITIVE DATA TYPES (Hold Collection of data)
//==================================

// ✅ Object
let person = {
  name: "Sajid",
  age: 25,
};
console.log(typeof person); // "object"
console.log(person.name); // "Sajid"

// ✅ Array
let numbers = [1, 2, 3, 4];
console.log(typeof numbers); // "object"
console.log(numbers[0]); // 1

// ✅ Function
function greet() {
  console.log("Hello World");
}
console.log(typeof greet); // "function"
greet(); // "Hello World"

//==================================
// 📌 Quick Summary
//==================================

// Primitive Data Types hold single values like string, number, boolean, etc.
// Non-Primitive Data Types hold collections or objects like arrays, functions, and objects.

// Primitive: number, string, boolean, undefined, null, bigint, symbol
// Non-Primitive: object, array, function

// Primitive = stored by value, immutable
// Non-Primitive = stored by reference, mutable
