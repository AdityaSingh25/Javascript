var user = {
  firstName: "Aditya",
  lastName: "Singh",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseNmae) {
    this.courseList.push(courseNmae);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
  listAll: function () {
    return this;
  },
};

// console.log(user.getCourseCount());
// user.buyCourse("React JS");
// user.buyCourse("Angular");
// console.log(user.getCourseCount());
console.table(user);
console.table(user.listAll());

