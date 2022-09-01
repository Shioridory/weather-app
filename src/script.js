let now = new Date();

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

function showTemperature(response) {
  document.querySelector("#current-day-time").innerHTML = formatDate(
    response.data.dt * 1000
  );

  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;

  changeBackgroundColor(response.data.weather[0].description);
}

function searchCity(city) {
  let units = "metric";
  let apiKey = "809407bec88b9744ff8f0029ec68fd35";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let units = "metric";
  let apiKey = "809407bec88b9744ff8f0029ec68fd35";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

function changeBackgroundColor(description) {
  if (description === "clear sky") {
    document.querySelector(".weather-app").style.background = "##FFD774";
  } else if (description === "few clouds") {
    document.querySelector(".weather-app").style.background = "#92B3C2";
  } else if (description === "scattered clouds") {
    document.querySelector(".weather-app").style.background = "#92B3C2";
  } else if (description === "broken clouds") {
    document.querySelector(".weather-app").style.background = "#92B3C2";
  } else if (description === "overcast clouds") {
    document.querySelector(".weather-app").style.background = "#92B3C2";
  } else if (description === "light rain") {
    document.querySelector(".weather-app").style.background = "#0E86D4";
  } else if (description === "moderate rain") {
    document.querySelector(".weather-app").style.background = "#0E86D4";
  } else if (description === "heavy intensity rain") {
    document.querySelector(".weather-app").style.background = "#0E86D4";
  } else if (description === "very heavy rain") {
    document.querySelector(".weather-app").style.background = "#0E86D4";
  } else if (description === "extreme rain") {
    document.querySelector(".weather-app").style.background = "#0E86D4";
  } else if (description === "freezing rain") {
    document.querySelector(".weather-app").style.background = "#0E86D4";
  } else if (description === "light intensity shower rain") {
    document.querySelector(".weather-app").style.background = "#0E86D4";
  } else if (description === "shower rain") {
    document.querySelector(".weather-app").style.background = "#0E86D4";
  } else if (description === "heavy intensity shower rain") {
    document.querySelector(".weather-app").style.background = "#0E86D4";
  } else if (description === "ragged shower rain") {
    document.querySelector(".weather-app").style.background = "#0E86D4";
  } else if (description === "mist") {
    document.querySelector(".weather-app").style.background = "#C3D6DB";
  } else if (description === "light snow") {
    document.querySelector(".weather-app").style.background = "#fff";
  } else if (description === "Snow") {
    document.querySelector(".weather-app").style.background = "#fff";
  } else if (description === "Heavt snow") {
    document.querySelector(".weather-app").style.background = "#fff";
  } else if (description === "Sleet") {
    document.querySelector(".weather-app").style.background = "#fff";
  } else if (description === "Light shower sleet") {
    document.querySelector(".weather-app").style.background = "#fff";
  } else if (description === "Shower sleet") {
    document.querySelector(".weather-app").style.background = "#fff";
  } else if (description === "Light rain and snow") {
    document.querySelector(".weather-app").style.background = "#fff";
  } else if (description === "Rain and snow") {
    document.querySelector(".weather-app").style.background = "#fff";
  } else if (description === "Light shower snow") {
    document.querySelector(".weather-app").style.background = "#fff";
  } else if (description === "Shower snow") {
    document.querySelector(".weather-app").style.background = "#fff";
  } else if (description === "Heavy shower snow") {
    document.querySelector(".weather-app").style.background = "#fff";
  } else if (description === "fog") {
    document.querySelector(".weather-app").style.background = "#BBC4C2";
  } else if (description === "light intensity drizzle") {
    document.querySelector(".weather-app").style.background = "#68BBE3";
  } else if (description === "drizzle") {
    document.querySelector(".weather-app").style.background = "#68BBE3";
  } else if (description === "heavy intensity drizzle") {
    document.querySelector(".weather-app").style.background = "#68BBE3";
  } else if (description === "light intensity drizzle rain") {
    document.querySelector(".weather-app").style.background = "#68BBE3";
  } else if (description === "drizzle rain") {
    document.querySelector(".weather-app").style.background = "#68BBE3";
  } else if (description === "heavy intensity drizzle rain") {
    document.querySelector(".weather-app").style.background = "#68BBE3";
  } else if (description === "shower rain and drizzle") {
    document.querySelector(".weather-app").style.background = "#68BBE3";
  } else if (description === "heavy shower rain and drizzle") {
    document.querySelector(".weather-app").style.background = "#68BBE3";
  } else if (description === "shower drizzle") {
    document.querySelector(".weather-app").style.background = "#68BBE3";
  } else if (description === "thunderstorm with light rain") {
    document.querySelector(".weather-app").style.background = "#9B9896";
  } else if (description === "thunderstorm with rain") {
    document.querySelector(".weather-app").style.background = "#9B9896";
  } else if (description === "thunderstorm with heavy rain") {
    document.querySelector(".weather-app").style.background = "#9B9896";
  } else if (description === "light thunderstorm") {
    document.querySelector(".weather-app").style.background = "#9B9896";
  } else if (description === "thunderstorm") {
    document.querySelector(".weather-app").style.background = "#9B9896";
  } else if (description === "heavy thunderstorm") {
    document.querySelector(".weather-app").style.background = "#9B9896";
  } else if (description === "ragged thunderstorm") {
    document.querySelector(".weather-app").style.background = "#9B9896";
  } else if (description === "thunderstorm with light drizzle") {
    document.querySelector(".weather-app").style.background = "#9B9896";
  } else if (description === "thunderstorm with drizzle") {
    document.querySelector(".weather-app").style.background = "#9B9896";
  } else if (description === "thunderstorm with heavy drizzle") {
    document.querySelector(".weather-app").style.background = "#9B9896";
  } else if (description === "Haze") {
    document.querySelector(".weather-app").style.background = "#B9B7BD";
  }
  axios.get(apiUrl).then(showTemperature);
}
