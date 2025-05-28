numbers = [2, 4, 6, 8, 10];

/***************************************************************/
//To split an array in sub array
console.log();
console.log("Spliting arary");
sub_number = numbers.slice(2, 4);
console.log(sub_number);

/***************************************************************/
// To check the location/index of the any value
console.log();
console.log("Index of array");
console.log(numbers.indexOf(6));

/***************************************************************/
// TO check the value is the part of the array or not (its vary important and use in automatoin testing)
console.log();
console.log("Check value is the part of array");
console.log(numbers.includes(99)); // give the result false because there is not vlaue of 99 in the array

/***************************************************************/
//TO find the lenght of array
console.log();
console.log("Lenght of the array");
console.log(numbers.length); //output is 5

/***************************************************************/
// Itrative array in loop
console.log();
console.log("output for loop itrative started from here");
var sum = 0;
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  sum = sum + numbers[i]; //summing all the values of the array
}

console.log(sum); //To add all the output of the array

/***************************************************************/
//Printing the value of the array which is completely devisible by 2
console.log();
console.log(
  "Printing the value of the array which is completely devisible by 2"
);

scores = [12, 13, 14, 16];
for (let k = 0; k < scores.length; k++) {
  if (scores[k] % 2 == 0) {
    console.log(scores[k]);
  }
}

/***************************************************************/
//for each -> wrape the whole entry in the array
console.log();
console.log("Use of foreach");
//below we can also remove the word function and can change it with arrow function e,g--> forEach((group_of_12)=> {.........}
let group_of_12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
group_of_12.forEach(function (group_of_12) {
  console.log("this 12 group number " + [group_of_12]);
});
