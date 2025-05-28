// JavaScript Notes: Class, Object, and Method

// ===============================
// 1. What is a Class?
// ===============================
// A class is a blueprint(design) for creating objects.
// It defines what properties and actions the object should have.

class Car {
  // The constructor() function runs when we create a new object from the class.
  constructor(brand, color) {
    this.brand = brand; // This is a property
    this.color = color; // This is also a property
  }

  // This is a method (a function inside the class)
  startEngine() {
    console.log("Engine started!");
  }

  showDetails() {
    console.log("Brand: " + this.brand + ", Color: " + this.color);
  }
}

// ===============================
// 2. What is an Object?
// ===============================
// An object is created from a class using the 'new' keyword.
// It is a real thing we can use.

let myCar = new Car("Toyota", "Red"); // myCar is an object of the Car class
let secondCar = new Car("Honda", "Blue");

// ===============================
// 3. What is a Method?
// ===============================
// A method is a function written inside a class.
// Objects can use these methods to perform actions.

myCar.startEngine(); // Output: Engine started!
myCar.showDetails(); // Output: Brand: Toyota, Color: Red

secondCar.showDetails(); // Output: Brand: Honda, Color: Blue

// ===============================
// Quick Summary
// ===============================
// Class  = A blueprint to make objects (like a template)
// Object = A real item created from a class
// Method = A function inside a class that does something
