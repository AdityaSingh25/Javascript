// Binding properties of a object

const hitesh = {
  firstName: "Hitesh",
  lastName: "Singh",
  role: "Admin",
  courseCount: 3,
  getInfo: function () {
    console.log(`
            First Name is ${this.firstName}
            Last name is ${this.lastName}
            His role is ${this.role}
            and he is studying ${this.courseCount} courses
        `);
  },
};

const dj = {
  firstName: "Rock",
  lastName: "DJ",
  role: "Sub-Admin",
  courseCount: 4,
};

//hitesh.getInfo();
//dj.getInfo();//this will give error as function getInfo is not defined for dj

var djInfo = hitesh.getInfo.bind(dj);
djInfo();

hitesh.getInfo.call(dj);
