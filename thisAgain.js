console.log(this);

var user = {
  firstName: "Adi",
  courseCount: 4,
  getCourseCount: function () {
    console.log("Line 8", this);
    function sayHello() {
      console.log("Hello");
      console.log("Line 10", this);
    }
    sayHello();
  },
};
//not a regular function call
user.getCourseCount();

//regular function call
// function sayHello() {
//   console.log("Hello");
// }
// sayHello();
