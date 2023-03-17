// const waitingForSoup = () => console.log("Soup");

// console.log("Start Talking");
// setTimeout(waitingForSoup, 2000);
// console.log("Still talking");

// console.log(
//   promise1
//     .then((success) => console.log({ success }))
//     .catch((error) => console.log({ error }))
// );

// const getDog = async () => {
//   const url = "https://dog.ceo/api/breeds/image/random";
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// };
// getDog();

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = true;
    isReady ? resolve("Soup is Ready") : reject("Not Ready");
  }, 2000);
});

const getSoup = async () => {
  const data = {
    rating: null,
    tip: null,
    pay: null,
    review: null,
  };
  try {
    const soup = await promise1;
    console.log(soup);
    data.rating = 10;
    data.tip = 0.2;
    data.pay = 5;
    data.review = "GOOD";
    return data;
  } catch (error) {
    console.log(error);
    data.rating = 3;
    data.tip = 0;
    data.pay = 5;
    data.review = "BAD";
    return data;
  }
};
//getSoup is actually a promise
// therefore we will use . then method to retrive the value from it
getSoup().then((value) => {
  console.log(value);
});
