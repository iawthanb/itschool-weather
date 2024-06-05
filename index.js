const cityToDisplay = localStorage.getItem('selectedCity') || 'București';
updateSelectedCity(cityToDisplay);
displayCurrentWeather(cityToDisplay);
displayForecast(cityToDisplay);
