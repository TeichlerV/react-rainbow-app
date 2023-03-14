import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="city-name">
        <h1 className="city">{props.data.city}</h1>
        <div className="date mb-3">
          <small> Latest updated:</small>{" "}
          <FormattedDate date={props.data.date} />
        </div>
      </div>
      <div className="row">
        <div className="col-6 text-center">
          <span className="icon">
            <WeatherIcon code={props.data.icon} size={65} color="#B368AB" />
          </span>
          <Temperature celsius={props.data.temperature} />

          <div className="description text-capitalize mt-0">
            {props.data.description}
          </div>
        </div>

        <div className="col-6 text-center mt-5">
          <span className="humidity m-2">
            {" "}
            <strong>Humidity:</strong>{" "}
          </span>{" "}
          <span className="humid-nr"> {props.data.humidity} %</span>
          <span className="wind m-2">
            {" "}
            <strong>Wind:</strong>{" "}
          </span>{" "}
          <span className="wind-nr"> {Math.round(props.data.wind)} km/h </span>
        </div>
      </div>
    </div>
  );
}
