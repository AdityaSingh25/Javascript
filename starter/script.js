'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
function getCountryAndNeighbour(country) {
  //AJAX call country one
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  // console.log(request.responseText);
  request.addEventListener('load', function () {
    console.log(request.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    //Get neighbour country
    const [neighbour] = data.borders;
    if (!neighbour) return;

    // const request2 = new XMLHttpRequest();
    // request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    // request2.send();

    // request2.addEventListener('load', function () {
    //   console.log(this.responseText);
    // });
  });
}

const renderCountry = function (data) {
  const html = `
  <article class="country">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${data.population}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

getCountryAndNeighbour('portugal');
getCountryAndNeighbour('china');
getCountryAndNeighbour('republic of india');
