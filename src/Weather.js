import React, { useState } from "react";
import "./App.css";
import "./Weather.css";
import axios from "axios";
import rainbow from "./rainbow.gif";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `data:image/png;base64,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`,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <img src={rainbow} className="rainbow img-fluid" alt="rainbow-img" />
        <div className="card">
          <form>
            <input
              type="search"
              placeholder="Type a city.."
              autoFocus="on"
            ></input>
            <input type="submit" value="Search"></input>
          </form>
          <div className="row">
            <h1 className="city">{weatherData.city}</h1>
            <div className="date mb-3">
              {" "}
              <FormattedDate date={weatherData.date} />{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-6 text-center">
              <span className="icon">
                <img src={weatherData.icon} alt={weatherData.description} />
              </span>

              <span className="temperature">
                {Math.round(weatherData.temperature)}{" "}
                <span className="celsius"> °C</span>
              </span>

              <div className="description text-capitalize">
                {weatherData.description}
              </div>
            </div>

            <div className="col-6 text-center">
              <div className="humidity m-2">
                Humidity: {weatherData.humidity} %
              </div>
              <div className="wind m-2">
                Wind: {Math.round(weatherData.wind)} km/h
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "e47b62adfa40cf42033dd6ba29e3bb42";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
