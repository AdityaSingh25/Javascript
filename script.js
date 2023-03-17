// console.log("hELLO aDITYA");
// var fullName = "Aditya Narayan";
// var emailAddress = "adiv2502@gmail.com";
// var phoneNumber = "+917060957511";
// var uid = "adb123";

// console.log(`
//     Name is : ${fullName}
//     email is : ${emailAddress}
//     uid of person is: ${uid}
//     phone number is: ${phoneNumber}
// `);

// var num1 = 7;
// var num2 = 6;

// console.log(num1 + num2);

// var answer = num1 > num2;
// console.log(answer);

// var D = (L - S)/L  * 100;

// var sellingPrice = 199;
// var listingPrice = 799;

// var discountPercentage = ((listingPrice - sellingPrice) / listingPrice) * 100;

// console.log("Discount is : " + discountPercentage);

// var discount = Math.round(discountPercentage);
// console.log(discount + "% off");

// var num1 = 7;
// var num2 = 6;

// var result = num1 > num2;

// console.log(typeof result);

// var temperature;

// temperature = 20;
// var result = temperature > 20;
// if (result) {
//   console.log("Its cold outside");
// } else {
//   console.log("its moderate outside");
// }

// var authenticated = false;

// // if (authenticated) {
// //   console.log("Show signout button");
// // } else {
// //   console.log("Show login option");
// // }

// authenticated ? console.log("SignOut Button ") : console.log("LOGIN");

// var user = "admin";

// switch (user) {
//   case "admin":
//     console.log("You got full access");
//     break;

//   case "subadmin":
//     console.log("You can del/create courses");
//     break;

//   case "testprep":
//     console.log("You can del/create test");
//     break;

//   case "user":
//     console.log("access to consume content");
//     break;

//   default:
//     console.log("test user");
//     break;
// }

// All are falsey Values
// NaN
// undefined
// null
// ""
// 0
// false

// var user = NaN;

// if (user) {
//   console.log("Condition is true");
// }

// console.log(2 + "2");

// var user = "2";

// if ("2" === user) {
//   console.log("HI");
// }

setTimeout(() => {
  console.log("1 Sec Passed");
  setTimeout(() => {
    console.log("2 Sec Passed");
    setTimeout(() => {
      console.log("3 Sec Passed");
      setTimeout(() => {
        console.log("4 Sec Passed");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
