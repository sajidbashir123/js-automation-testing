const flag = true;

if (flag) {
  console.log("flag is ture");
} else {
  console.log("flag is not true");
}

console.log("******************");

// I want to get the the results as number which is equaly dividable on 2 and 5.

for (let k = 0; k <= 100; k++) {
  if (k % 2 == 0 && k % 5 == 0) {
    console.log(k);
  }
}

console.log("******************");

// I want to get the the results of first 3 number number which is equaly dividable on 2 and 5.

let n = 0;
for (let k = 0; k <= 100; k++) {
  if (k % 2 == 0 && k % 5 == 0) {
    console.log(k);
    n++;
    if (n == 3) {
      break;
    }
  }
}
