import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">
          {Math.round(props.celsius)}
          <span className="units">
            {" "}
            °C |{" "}
            <a
              href="/"
              onClick={showFahrenheit}
              className="text-decoration-none"
            >
              °F
            </a>
          </span>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature">
          {Math.round(fahrenheit())}
          <span className="units">
            {" "}
            <a href="/" onClick={showCelsius} className="text-decoration-none">
              {" "}
              °C
            </a>{" "}
            | °F
          </span>
        </span>
      </span>
    );
  }
}
