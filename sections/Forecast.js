function displayForecast(city) {
	const apiUrl = getForecastEndpoint(city);
	
	fetch(apiUrl).then((response) => response.json()).then((data) => {
		const { list } = data;

		const mappingForecastDays = {};
		
		list.forEach((item) => {
      const { dt, main, weather } = item;
      const date = new Date(dt * 1000);
      const weekDay = date.toLocaleDateString('ro-RO', { weekday: 'long' });

      if (!mappingForecastDays[weekDay]) {
        mappingForecastDays[weekDay] = [];
      }

      mappingForecastDays[weekDay].push({
        time: getTime(dt),
        temp: getTemperature(main.temp),
        realFeel: getRealFeel(main.feels_like),
        weatherIcon: getWeatherIcon(weather[0].icon),
        description: getWeatherDescription(weather),
      });
		});

		const weatherForecastContainer = document.querySelector(".weather-forecast");
		weatherForecastContainer.innerHTML = '';

		for (const day in mappingForecastDays) {
			weatherForecastContainer.innerHTML += `<h3 class="text-primary">${capitalizeFirstLetter(day)}</h3>`;
				
      mappingForecastDays[day].forEach((forecast) => {
        weatherForecastContainer.innerHTML += `
          <div class="weather-forecast d-flex justify-content-between align-items-center w-100 border rounded p-3 mb-3">
            <div>${forecast.time}</div>
            <div>
              <img src="${forecast.weatherIcon}" alt="${forecast.description}" />
            </div>
            <div class="fs-3"><strong>${forecast.temp}</strong></div>
            <div>${forecast.description}</div>
            <div class="real-feel d-none d-sm-block">Real feel: <strong>${forecast.realFeel}</strong></div>
          </div>
        `;
      });
		}
})
}