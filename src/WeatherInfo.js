import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <h1 className="city">{props.data.city}</h1>
        <div className="date mb-3">
          {" "}
          <FormattedDate date={props.data.date} />{" "}
        </div>
      </div>
      <div className="row">
        <div className="col-6 text-center">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} />
          </div>

          <span className="temperature">
            {Math.round(props.data.temperature)}{" "}
            <span className="celsius"> °C</span>
          </span>

          <div className="description text-capitalize">
            {props.data.description}
          </div>
        </div>

        <div className="col-6 text-center">
          <div className="humidity m-2">Humidity: {props.data.humidity} %</div>
          <div className="wind m-2">
            Wind: {Math.round(props.data.wind)} km/h
          </div>
        </div>
      </div>
    </div>
  );
}
