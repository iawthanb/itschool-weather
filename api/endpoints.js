const API_KEY = `e7080a0866cf640f9c4170aa3ac2c6f3`;
const locale = 'ro';
const units = 'metric';

function getCurrentWeatherEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/weather?lang=${locale}&q=${city}&appid=${API_KEY}&units=${units}`;
}

function getCurrentWeatherIconCode(iconCode) {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?lang=${locale}&q=${city}&appid=${API_KEY}&units=${units}`;
}
