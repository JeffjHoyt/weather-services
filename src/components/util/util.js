// api call to openweathermap api to get weather data for a city name or zip code
// returns a promise
export const getWeather = (city, zip) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&zip=${zip}&appid=${API_KEY}&units=imperial`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
