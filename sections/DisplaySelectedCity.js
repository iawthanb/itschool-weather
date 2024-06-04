const dropdownItems = document.querySelectorAll('.city');
const currentSelectedCity = document.querySelector('.city-btn');

dropdownItems.forEach(item => {
  item.addEventListener('click', (event) => {
    const city = event.target.innerText;
    currentSelectedCity.innerText = city;
    displayCurrentWeather(city);
    displayForecast(city);
    localStorage.setItem('selectedCity', city);
  });
});

function updateSelectedCity(city) {
  const currentSelectedCity = document.querySelector('.city-btn');
  currentSelectedCity.innerText = city;
}
