const cityToDisplay = localStorage.getItem('cityToDisplay') || 'București';
updateSelectedCity(cityToDisplay);
displayCurrentWeather(cityToDisplay);
displayForecast(cityToDisplay);
