//========================
// if/else/ else if statements
//========================
//If the condition true the block {} of the code execute other wise else block {} will execute.

let day = "Friday";

if (day == "Monday") {
  console.log("Monday: Start of week");
} else if (day == "Tuesday") {
  console.log("Tuesday: Tough work");
} else if (day == "Wednesday") {
  console.log("Wednesday: Client meeting day");
} else if (day == "Thursday") {
  console.log("Thursday: Casual Day");
} else if (day == "Friday") {
  console.log("Friday: Blessed day");
} else if (day == "Saturday") {
  console.log("Weekend day - Enjoy your time");
} else if (day == "Sunday") {
  console.log("Weekend day - Party time");
} else {
  console.log("Go and enjoy all the days!");
}

//========================
// Switch break statments
//========================
/*
Use the switch statement to select one of many code blocks to be executed.

This is how it works:
The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.
*/

day = "no day";
switch (day) {
  case "Monday":
    console.log("Monday: Start of week");
    break;
  case "Tuesday":
    console.log("Tuesday: Tough work");
    break;
  case "Wednesday":
    console.log("Wednesday: Client meeting day");
    break;
  case "Thursday":
    console.log("Thursday: Casual Day");
    break;
  case "Friday":
    console.log("Friday: Blessed day");
    break;
  case "Saturday":
    console.log("Weekend day - Enjoy your time");
    break;
  case "Sunday":
    console.log("Weekend day - Party time");
    break;
  default:
    console.log("Go and enjoy all the days!");
    break;
}
