import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="city-name">
        <h1 className="city">{props.data.city}</h1>
        <div className="date mb-3">
          <small> Latest update:</small>{" "}
          <FormattedDate date={props.data.date} />
        </div>
      </div>
      <div className="row">
        <div className="col-6 text-center">
          <span className="icon">
            <WeatherIcon code={props.data.icon} />
          </span>

          <span className="temperature">
            {Math.round(props.data.temperature)}{" "}
            <span className="celsius"> °C</span>
          </span>

          <div className="description text-capitalize">
            {props.data.description}
          </div>
        </div>

        <div className="col-6 text-center">
          <div className="humidity m-2">
            {" "}
            <strong>Humidity:</strong>{" "}
          </div>{" "}
          <span className="humid-nr"> {props.data.humidity} %</span>
          <div className="wind m-2">
            {" "}
            <strong>Wind:</strong>{" "}
          </div>{" "}
          <span className="wind-nr"> {Math.round(props.data.wind)} km/h </span>
        </div>
      </div>
    </div>
  );
}
