// ====================================
// 🧪 Example 1: Ek Method Wali Class
// ====================================
console.log("========== Example 1 ==========");

// 👨‍🏫 Class declaration
class Hello {
  // 🛠️ Method: sayHello
  sayHello() {
    console.log("sayHello() => Hello, world!");
  }
}

// 🎯 Object banaya class Hello ka
const hello = new Hello();

// 🔔 Method call
hello.sayHello();

// ====================================
// 🧪 Example 2: Do Methods Wali Class
// ====================================
console.log("\n========== Example 2 ==========");

// 👨‍🏫 Class declaration
class Calculator {
  // ➕ Method: add
  add(a, b) {
    return a + b;
  }

  // ➖ Method: subtract
  subtract(a, b) {
    return a - b;
  }
}

// 🎯 Object banaya class Calculator ka
const calc = new Calculator();

// 🔢 Methods call
console.log("add(5, 3) =>", calc.add(5, 3)); // Output: 8
console.log("subtract(5, 3) =>", calc.subtract(5, 3)); // Output: 2

// ====================================
// 🧪 Example 3: Teen Methods Wali Class
// ====================================
console.log("\n========== Example 3 ==========");

// 👨‍🏫 Class declaration
class Student {
  // 🏗️ Constructor: jab object banta hai to yeh run hota hai
  constructor(name, marks) {
    this.name = name; // Property: name
    this.marks = marks; // Property: marks
  }

  // 👋 Method: greet
  greet() {
    console.log(`greet() => Hello, my name is ${this.name}`);
  }

  // 📊 Method: showMarks
  showMarks() {
    console.log(`showMarks() => ${this.name} scored ${this.marks} marks`);
  }

  // ✅❌ Method: passOrFail
  passOrFail() {
    if (this.marks >= 40) {
      console.log(`passOrFail() => ${this.name} passed!`);
    } else {
      console.log(`passOrFail() => ${this.name} failed.`);
    }
  }
}

// 🎯 Object banaya class Student ka
const s1 = new Student("Ali", 75);

// 🔔 Methods call
s1.greet();
s1.showMarks();
s1.passOrFail();
