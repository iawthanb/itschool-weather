function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getWeekDay(dt) {
  return capitalizeFirstLetter(new Date(dt * 1000).toLocaleDateString('ro-RO', { weekday: 'long' }));
}

function getTime(dt) {
  return new Date(dt * 1000).toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' });
}

function getTemperature(temp) {
  return Math.round(temp) + "°C";
}

function getRealFeel(feels_like) {
  return Math.round(feels_like) + "°C";
}

function getWeatherIcon(icon) {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}

function getWindSpeed(wind) {
  return Math.round((wind.speed * 3600) / 1000) + ' km/h';
}

function getWeatherDescription(weather) {
  return weather[0].description;
}

