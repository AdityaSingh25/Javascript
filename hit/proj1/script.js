var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");
console.log(counter);
let count = 1;

setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerText = count;
  }
}, 1);

setTimeout(() => {
  followers.innerText = "Followers on INSTAGRAM !!";
}, 5000);
