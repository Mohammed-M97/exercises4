// Calculate average
function findAverage(array) {
  // your code here
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
console.log(findAverage([1, 2, 3, 4]));
