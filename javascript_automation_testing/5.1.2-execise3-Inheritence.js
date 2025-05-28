// 🧠 Exercise 3: Inheritance – Create a Vehicle and Car Class

// 🔸 Task:

// 1. Create a Vehicle class with:
//    - A constructor that takes brand and year.
//    - A method getInfo() that returns "Brand: [brand], Year: [year]".

// 2. Create a Car class that extends the Vehicle class.
//    - Add a new property model in the constructor.
//    - Create a method getDetails() that returns "Brand: [brand], Year: [year], Model: [model]".

// 3. Create an object of the Car class and print both getInfo() and getDetails() outputs.

// 🧾 Example Output:
// Brand: Toyota, Year: 2020
// Brand: Toyota, Year: 2020, Model: Corolla

console.log("********* Exercise 3 **********");

// Parent class
class Vehicle {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  getInfo() {
    return `Brand: ${this.brand}, Year: ${this.year}`;
  }
}

// Child class
class Car extends Vehicle {
  constructor(brand, year, model) {
    super(brand, year); // Call parent constructor
    this.model = model;
  }

  getDetails() {
    return `Brand: ${this.brand}, Year: ${this.year}, Model: ${this.model}`;
  }
}

// Create object
const myCar = new Car("Toyota", 2020, "Corolla");

// Call methods
console.log(myCar.getInfo()); // Output: Brand: Toyota, Year: 2020
console.log(myCar.getDetails()); // Output: Brand: Toyota, Year: 2020, Model: Corolla
