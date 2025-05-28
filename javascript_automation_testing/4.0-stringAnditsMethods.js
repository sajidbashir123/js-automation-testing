let day = "Tuesday ";

//length of string
let daylenght = day.length;
console.log(daylenght); //8 including space

//triming white spaces
let trimday = day.trim();
console.log(trimday.length); // after triming lenght is 7

//To break a string
let subday = day.slice(0, 4);
console.log(subday); //Tues
console.log(day[1]); //u

//split "String" on the basis of character
let splitday = day.split("s");
console.log(splitday[1]); //accessing the first part

// if number is given as string and you want to find difference
//parsInt is a method use to convert the string into integer
let startdate = "20";
let enddate = "15";
finddiff = parseInt(startdate) - parseInt(enddate);
console.log(finddiff); //output 5

//Concatinating(joorna) a String

let oneday = "Frinday";
let Today = "Today is " + oneday;
console.log(Today);
