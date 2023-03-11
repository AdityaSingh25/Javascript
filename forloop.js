// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

var myState = new Array(
  "Rajasthan",
  "Delhi",
  1947,
  "Punjab",
  "Karnataka",
  "Kerela"
);

// for (let i = 0; i < myState.length; i++) {
//   if (typeof myState[i] != "string") break;

//   console.log(myState[i]);
// }

myState.forEach((s) => {
  console.log(s);
});
