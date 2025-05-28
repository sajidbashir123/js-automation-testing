allScores = [12, 13, 14, 15, 16];
console.log(allScores.length);
var evenScores = [];

for (var k = 0; k < allScores.length; k++) {
  if (allScores[k] % 2 == 0) {
    evenScores.push(allScores[k]); //pushing even values to the array evenScores
  }
}
//new values after pushing
console.log(evenScores);

//map array functions -> it modify the each and every value of the array with new value.

// I am skipping the js things "how to filter,reduce and map the array"
