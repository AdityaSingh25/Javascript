// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Resolved after 3 seconds");
//     resolve(54);
//   }, 3000);
// });

// p1.then((value) => {
//   console.log(value);
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise 2");
//     }, 2000);
//   });
//   return p2;
// }).then((value) => console.log(value));

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);

    script.onload = () => {
      resolve(1);
    };
    script.onerror = () => {
      reject(0);
    };
  });
};

loadScript("https://www.youtube.com/iframe_api")
  .then((value) => {
    console.log(value);
    return loadScript("https://www.youtube.com/iframe_api");
  })
  .then((value) => console.log(value))
  .catch((error) => {
    console.log("Error aa gya");
  });
