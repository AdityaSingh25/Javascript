var User = {
  name: "",
  getUserName: function () {
    console.log(`User name is : ${this.name}`);
  },
};
var hitesh = Object.create(User);
console.log(hitesh);

hitesh.getUserName();
hitesh.name = "HITESH";
hitesh.getUserName();

var sam = Object.create(User, {
  name: { value: "Sammy" },
  courseCount: { value: 2 },
});

sam.getUserName();
