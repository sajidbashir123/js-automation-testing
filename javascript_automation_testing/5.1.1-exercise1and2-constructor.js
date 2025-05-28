/*
🧪 Exercise 1: Animal Class
✅ Task:

Animal naam ki class banao.

Constructor mein 2 properties hon: name aur sound.

Ek method banao makeSound() jo console pe likhe:

nginx
Copy
Edit
Dog makes Woof sound
(Agar name = "Dog" aur sound = "Woof" ho)
 */

//Solution of the Exercise 1

console.log("********* Exercise 1 **********");

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    return `${this.name} makes ${this.sound}`;
  }
}

const animaldog = new Animal("Dog", "woof");
console.log(animaldog.makeSound());
const animalcat = new Animal("Cat", "Meow");
console.log(animalcat.makeSound());

/*
🧪 Exercise 2: Circle Class
✅ Task:

Circle naam ki class banao.

Constructor mein ek property ho: radius.

Do methods banao:

getArea() → area return kare: π * r * r

getCircumference() → circumference return kare: 2 * π * r
(Use Math.PI for π)

🔁 Example test code:

const c = new Circle(5);
console.log(c.getArea());            // Should return 78.54 approx
console.log(c.getCircumference());  // Should return 31.41 approx
 */

//Solution of the Exercise 2

console.log("********* Exercise 2 **********");

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

const c = new Circle(5);
console.log(c.getArea());
console.log(c.getCircumference());
