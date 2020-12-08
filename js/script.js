const modal = document.getElementById('modal');
const close = document.getElementsByClassName('close')[0];

const api = 'https://restcountries.eu/rest/v2/all';
let paises = [];

function detailCountries(pais) {
  modal.style.display = 'block';
  const item = document.getElementById('content');

  const flag = document.createElement('img');
  flag.setAttribute('class', 'float');
  flag.setAttribute('src', pais.flag);

  const name = document.createElement('h3');
  name.innerHTML = pais.name;

  const capital = document.createElement('p');
  capital.setAttribute('class', 'styleP');
  capital.innerHTML = pais.capital;

  const region = document.createElement('p');
  region.setAttribute('class', 'styleP');
  region.innerHTML = pais.region;

  const subregion = document.createElement('p');
  subregion.setAttribute('class', 'styleP');
  subregion.innerHTML = pais.subregion;

  const population = document.createElement('p');
  population.setAttribute('class', 'styleP');
  population.innerHTML = pais.population;

  const area = document.createElement('p');
  area.setAttribute('class', 'styleP');
  area.innerHTML = pais.area;

  const languages = document.createElement('p');
  languages.setAttribute('class', 'styleP');
  languages.innerHTML = pais.languages;

  const currencies = document.createElement('p');
  currencies.setAttribute('class', 'styleP');
  currencies.innerHTML = pais.currencies;

  item.appendChild(flag);
  item.appendChild(name);
  item.appendChild(capital);
  item.appendChild(region);
  item.appendChild(subregion);
  item.appendChild(population);
  item.appendChild(area);
  item.appendChild(languages);
  item.appendChild(currencies);
}

function getCountry(index) {
  detailCountries(paises[index]);
}

function init(countries) {
  let li = '';
  countries.forEach((element, index) => {
    li += `<li><button type="button" onclick="getCountry(${index})">${element.name}</button></li>`;
  });
  document.getElementById('countries-list').innerHTML = li;
}

fetch(api)
  .then((response) => response.json())
  .then((data) => {
    paises = data;
    init(paises);
  });

close.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
