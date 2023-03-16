const User = require("./classjs");

const aditya = new User("Aditya", "adiv2502gmail.com");
console.log(aditya.getInfo());

aditya.enrollCourse("RactJS");
aditya.enrollCourse("AngularJS");

console.log(aditya.getCourseList());

let courses = aditya.getCourseList();

courses.forEach((element) => {
  console.log(element);
});


