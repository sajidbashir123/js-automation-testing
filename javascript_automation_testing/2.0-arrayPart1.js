var marks = [10, 20, 30, 40, 50];
console.log(marks);

//To get result of specific locations
console.log();
console.log("TO get value at specific location");
console.log(marks[3]);

//To change value at any positions
console.log();
console.log("TO change the value at any position");
marks[0] = 11;
console.log(marks[0]);

// To enter new value in the arary
console.log();
console.log("TO add new value in array");
marks.push(500);
console.log(marks);

// To delete the last vlaue in the array
console.log();
console.log("TO delete last value");
marks.pop();
console.log(marks);

//To add the new value in the array at 0 location
console.log();
console.log("TO add new value in the array at 0 location");
marks.unshift(400);
console.log(marks);
