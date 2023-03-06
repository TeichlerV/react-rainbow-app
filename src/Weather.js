import React from "react";
import "./App.css";
import "./Weather.css";
import rainbow from "./rainbow.gif";

export default function Weather() {
  return (
    <div className="container">
      <img src={rainbow} className="rainbow" />
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
          <h1 className="city">Prague</h1>
          <div className="date mb-3">Monday 6.3.2023</div>
        </div>
        <div className="row">
          <div className="col-6 text-center">
            <span className="icon">☀️</span>

            <span className="temperature">
              4 <span className="celsius"> °C</span>
            </span>

            <div className="description">Cloudy</div>
          </div>

          <div className="col-6 text-center">
            <div className="precipitation m-2">Precipitation: 15 %</div>
            <div className="humidity m-2">Humidity: 30 %</div>
            <div className="wind m-2">Wind: 10 km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}
