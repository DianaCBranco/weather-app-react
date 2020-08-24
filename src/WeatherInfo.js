import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInformation">
      <h4 className="city">{props.data.city}</h4>
      <br />
      <div className="row generalConditions">
        <div className="col-sm">
          <strong className="temperature">
            {Math.round(props.data.temperature)}
          </strong>
          <div className="units">
            <a href="/" className="temp-celsius">
              °C
            </a>{" "}
            |
            <a href="/" className="temp-fahrenheit">
              °F
            </a>
          </div>
        </div>
        <div className="col-sm">
          <img src={props.data.icon} alt={props.data.description} />
        </div>
        <div className="col-sm">
          <div className="conditions">
            <ul>
              <li> Feels like: {props.data.feels} °C </li>
              <li> Wind: {props.data.wind} km/h </li>
              <li> Humidity: {props.data.humidity}% </li>
            </ul>
          </div>
        </div>
      </div>
      <h3 className="description text-capitalize">{props.data.description}</h3>
    </div>
  );
}
