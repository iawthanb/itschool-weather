function displayCurrentWeather(city) {
  const apiUrl = getCurrentWeatherEndpoint(city);

  fetch(apiUrl).then((response) => response.json()).then((data) => {
    const { dt, name, main, weather, wind } = data;

    const weekDay = getWeekDay(dt);
    const time = getTime(dt);
    const temp = getTemperature(main.temp);
    const realFeel = getRealFeel(main.feels_like);
    const weatherIcon = getWeatherIcon(weather[0].icon);
    const description = getWeatherDescription(weather);
    const kmPerH = getWindSpeed(wind);


    const currentWeatherContainer = document.querySelector(".current-weather");
    currentWeatherContainer.innerHTML = `
      <div class="current-weather text-center text-md-start d-flex flex-wrap justify-content-evenly align-items-center">
        <div class="px-3">
          <div class="fs-2 mb-2"><strong>${name}</strong></div>
          <div class="fs-4"><strong>${weekDay}</strong>, ${time}</div>
          <div class="d-flex align-items-center justify-content-center">
            <strong class="fs-1">${temp}</strong>
            <img src="${weatherIcon}" alt="${description}">
          </div>
        </div>
        <div class="px-3">
          <p class="fs-5">Real feel: <strong>${realFeel}</strong></p>
          <p class="fs-5 text-capitalize">${description}</p>
          <p class="fs-5">Vânt: <strong>${kmPerH}</strong></p>
        </div>
      </div>
    `;
  });
}
