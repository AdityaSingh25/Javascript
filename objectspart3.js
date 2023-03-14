var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is : ${this.courseCount}`);
  };
};

User.prototype.getFirstName = function () {
  console.log(`Your Name is : ${this.firstName}`);
};

var hitesh = new User("hitesh", 2);
hitesh.getCourseCount();
console.log(hitesh.firstName);
hitesh.getFirstName();
//console.log(hitesh);
console.log("\n\n\n");
var aditya = new User("Aditya", 4);
aditya.getCourseCount();
console.log(aditya.firstName);
aditya.getFirstName();
// console.log(aditya);
console.log("\n\n\n");
console.log("\n\n\n");
console.log("\n\n\n");
