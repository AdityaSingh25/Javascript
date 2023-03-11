var user = {
  firstName: "Aditya",
  lastName: "Singh",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: true,
};

console.log(user.firstName);
console.log(user["firstName"]);

console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);

console.table(user);
























