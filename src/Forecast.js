import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = `c8735bb7e8e2f8d8a38c7501f3cd47d3`;
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Mon</div>
          <WeatherIcon code="01d" size={35} color="#e5d602" />
          <div className="forecast-temperature">
            <span className="Forecast-temperature-max">10°</span>
            <span className="Forecast-temperature-min">5°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
