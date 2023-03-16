// Synchronous programming
// let a = prompt("What is your name");
// let b = prompt("What is your age");
// let c = prompt("What is your fav color");
// console.log(`${a} is ${b} years old and has ${c} favourite color`);

//Asynchronous programming
// console.log("Start");
// setTimeout(() => {
//   console.log("Hello World");
// }, 2000);
// console.log("End");

//callbacks
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  document.body.appendChild(script);

  script.onload = function () {
    console.log("Loaded Script with SRC :" + src);
    callback();
  };
}

const hello = () => {
  alert("Hello");
};
const goodMorning = () => {
  alert("Good Morning");
};
loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
  hello
);
