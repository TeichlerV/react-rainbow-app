import React, { useState } from "react";
import "./App.css";
import "./Weather.css";
import axios from "axios";
import rainbow from "./rainbow.gif";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "e47b62adfa40cf42033dd6ba29e3bb42";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <img src={rainbow} className="rainbow img-fluid" alt="rainbow-img" />
        <div className="card">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type a city.."
              autoFocus="on"
              onChange={handleCityChange}
            ></input>
            <input type="submit" value="Search"></input>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
