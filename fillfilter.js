// var testArray = new Array(2, 4, 6, 3, 1, 5, 9, 8);

// console.log(testArray.fill(0));
// console.log(testArray.fill("A", 2, 5));

// array.fill(1,2,3) //parameters :- 1.what value to fill up , 2.start (inclusive) , 3.stop(exclusive)

const myNumbers = new Array(23, 45, 32, 1, 23, 98, 56);
const result = myNumbers.filter((num) => {
  return num != 32;
});
console.log(result);

//filter gives new array

const result2 = myNumbers.filter((num) => num > 50);
console.log(result2);


