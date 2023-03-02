const number = [23, 1, 45, 87, 4, 55, 6];
let biggestNumber = number[0];

for (const value of number) {
  if (value > biggestNumber) {
    biggestNumber = value;
  }
}
console.log("The biggest number is:", biggestNumber);
