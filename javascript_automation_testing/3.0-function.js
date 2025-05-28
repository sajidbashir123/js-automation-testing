//Function-> A function is a block of the code which perform a specific tasks whenever it called.
// here we discus different types of the functions

//**********************************************
// 1 Simple functions
function add(a, b) {
  return a + b; //we use return whenever a specific value need to be returned at the end.
}
sum = add(2, 2);
console.log(sum);

//**********************************************
// 2 Anonymous functions (A function which have no name and can be declared with the a varibale)
let sumofNumber = function (c, d) {
  return c + d;
};
console.log(sumofNumber(3, 3));

//**********************************************
// 3 same thing can be achieved in one line of code
let addition = (e, f) => e + f;
console.log(addition(4, 4));
