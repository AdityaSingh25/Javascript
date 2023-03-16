function sumOne(a, b) {
  return a + b;
}

var myA = [4, 5];
console.log(sumOne(...myA)); //spread operator

function sumTwo(a, b, ...args) {
  //rest Op
  var multi = a * b;
  var sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return [multi, sum];
}

console.log(sumTwo(1, 2, 3, 4, 5));
