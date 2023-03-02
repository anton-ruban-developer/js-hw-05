const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

const newArray = array1.concat(array2);
console.table(newArray);
let total = 0;

for (const value of newArray) {
  total += value;
}
console.log('Total amount:', total);