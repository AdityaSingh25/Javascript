var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is : ${this.courseCount}`);
  };
};

var hitesh = new User("hitesh", 2);
hitesh.getCourseCount();
console.log(hitesh.firstName);
//console.log(hitesh);

var aditya = new User("Aditya", 4);
aditya.getCourseCount();
console.log(aditya.firstName);
// console.log(aditya);
