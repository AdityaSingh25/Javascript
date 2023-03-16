// let promise = new Promise(function (resolve, reject) {
//   console.log("Hello");
//   resolve(56);
//   //console.log("Message in promise");
// });

// console.log("Hello one");

// setTimeout(() => {
//   console.log("Hello two");
// }, 3000);

// console.log("Hello Three");
// console.log(promise);

let p1 = new Promise((resolve, reject) => {
  console.log("Promise is Pending");
  setTimeout(() => {
    console.log("I am Promise and I am FullFilled");
    resolve(true);
    //reject (new Error("I am An Error"))
  }, 5000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is Pending");
  setTimeout(() => {
    console.log("I am Promise and I am rejected");
    //resolve(true);
    reject(new Error("I am An Error"));
  }, 5000);
});


// To get the value
p1.then((value) => {
  console.log(value);
});


//To catch the error
p2.catch((error) => {
  console.log("Some Error Occured");
});
