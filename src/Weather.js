import React from "react";
import "./App.css";
import "./index.css";

export default function Weather() {
  return (
    <div className="container border">
      <form>
        <input type="search" placeholder="Type here"></input>
        <input type="submit" value="Search"></input>
        <div className="row">
          <div className="col-6">
            <div className="city">Prague</div>
            <div className="date">6.3.2023</div>
            <div className="icon">☀️</div>
            <div className="temperature">4°</div>
            <div className="description">Cloudy</div>
          </div>

          <div className="col-6">
            <div className="precipitation">Precipitation: 15 %</div>
            <div className="humidity">Humidity: 30 %</div>
            <div className="wind">Wind: 10 km/h</div>
          </div>
        </div>
      </form>
    </div>
  );
}
