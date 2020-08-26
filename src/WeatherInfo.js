import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherConversion from "./WeatherConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInformation">
      <h4 className="city">{props.data.city}</h4>
      <br />
      <div className="row generalConditions">
        <div className="col-sm d-flex justify-content-end">
          <div>
            <WeatherConversion celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-sm">
          <WeatherIcon className="CurrentIcon" code={props.data.icon} />
        </div>
        <div className="col-sm">
          <div className="conditions">
            <ul>
              <li>
                Feels like:
                <strong> {props.data.feels}</strong> °C{" "}
              </li>
              <li>
                Wind:
                <strong> {props.data.wind} </strong>
                km/h{" "}
              </li>
              <li>
                {" "}
                Humidity:
                <strong> {props.data.humidity} </strong>%{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h3 className="description text-capitalize">{props.data.description}</h3>
    </div>
  );
}
