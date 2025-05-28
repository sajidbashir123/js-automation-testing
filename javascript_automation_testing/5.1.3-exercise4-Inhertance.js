// ==========================================
// 🧪 Exercise 4: Inheritance Practice
// ==========================================

/*
💡 Task:
1. Create a base class named `Person`
   - Constructor should accept: name, age
   - Method: `introduce()` → should return:
     "My name is Ali and I am 30 years old."

2. Create a subclass named `Teacher` that extends `Person`
   - Constructor should accept: name, age, subject
   - Use `super(name, age)` to call the parent constructor
   - Add a new property: subject
   - Method: `teach()` → should return:
     "I teach Math."
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `My name is ${this.name} and I am ${this.age} year old.`;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  teach() {
    return `I teach ${this.subject}`;
  }
}

const t1 = new Teacher("Ali", 30, "Math");
console.log(t1.introduce()); // My name is Ali and I am 30 years old.
console.log(t1.teach()); // I teach Math.
