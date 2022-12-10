function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=London&key=o8da94538210e4d3f40a1336t5f0ebb4&units=metric";

axios.get(apiUrl).then(displayTemperature);

function formatDate() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = "0${hours}";
  }
  let min = now.getMinutes();
  if (min < 10) {
    min = "0${min}";
  }
  let formattedDate = `${day}, ${hours}:${min}`;
  return formattedDate;
}

let seetime = document.querySelector("#time");
seetime.innerHTML = formatDate();
