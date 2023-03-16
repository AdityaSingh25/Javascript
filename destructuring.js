const user = ["aditya", 3, "admin"];
console.log(user[1]);

// var role = user[2];
// var name = user[0];

var [name, courseCount, role] = user;

const myUser = {
  name: "Aditya",
  courseCount: 4,
  role: "admin",
};

var { name, courseCount, role } = myUser;
console.log(role);
// Here on the left side name should be same as mentioned in the {Object Key}

