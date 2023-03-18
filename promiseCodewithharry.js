// let promise = new Promise(function (resolve, reject) {
//   console.log("I am a alert in promise ");
//   resolve(56);
// });

// console.log("Hello 1");
// setTimeout(function () {
//   console.log("Hello 2");
// }, 2000);
// console.log("Hello 3");

// console.log(promise);
// promise.then((value) => console.log(value));

//AAp iske andar jo bhi kroge vo iske andar execute ho jayegi

//Aur vo cheez jab ho jayegi aapko .then and .catch se inform kr diya jayega

//agar resolve hua toh .then and agar reject hua toh .catch
let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    //console.log("i AM PRMISE  and I am Full Filled");
    resolve(true);
    //reject(new Error("I am an error"));
  }, 3000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    //console.log("i AM PROMISE  and I am rejected");
    //resolve(true);
    reject(new Error("I am an error"));
  }, 3000);
});

console.log(p1, p2);
//p1 and p2 parallely execute honge
//then and catch takes function

//then se value
p1.then((value) => {
  console.log(value);
});

//catch se error
p2.catch((error) => {
  console.log("Some error occured in p2");
});

p2.then(
  (e) => {
    console.log(e);
  },
  (error) => {
    console.log(error); //ye error catch kar ne k liye hai
  }
);
