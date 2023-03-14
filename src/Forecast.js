import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <ForecastDay data={forecastData[0]} />
          </div>
          <div className="col">
            <ForecastDay data={forecastData[1]} />
          </div>{" "}
          <div className="col">
            <ForecastDay data={forecastData[2]} />
          </div>{" "}
          <div className="col">
            <ForecastDay data={forecastData[3]} />
          </div>{" "}
          <div className="col">
            <ForecastDay data={forecastData[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `c8735bb7e8e2f8d8a38c7501f3cd47d3`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
