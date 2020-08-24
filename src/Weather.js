import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      city: "Lisbon",
      date: "Monday, 24 of July 2020",
      feels: response.data.main.feels_like,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <h1 className="title">Welcome to BetterOutside!</h1>
        <h2 className="date">{weatherData.date}</h2>
        <form>
          <div className="form-group">
            <input
              type="search"
              className="form-control"
              placeholder="Enter city..."
              autoComplete="off"
              autoFocus="on"
            />
          </div>
        </form>
        <button className="btn btn-light locationButton">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </button>
        <br />
        <h4 className="city">{weatherData.city}</h4>
        <br />
        <div className="row generalConditions">
          <div className="col-sm">
            <strong className="temperature">
              {Math.round(weatherData.temperature)}
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
            <img src={weatherData.icon} alt={weatherData.description} />
          </div>
          <div className="col-sm">
            <div className="conditions">
              <ul>
                <li> Feels like: {weatherData.feels} °C </li>
                <li> Wind: {weatherData.wind} km/h </li>
                <li> Humidity: {weatherData.humidity}% </li>
              </ul>
            </div>
          </div>
        </div>
        <h3 className="description text-capitalize">
          {weatherData.description}
        </h3>
        <br />
        <footer className="linkToSourceCode">
          <a
            href="https://github.com/DianaCBranco/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          , by Diana Branco
        </footer>
      </div>
    );
  } else {
    const apiKey = "98d4b83d6a6df781e514f7015a1ca27d";
    let fakecity = "Lisbon";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${fakecity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return "Loading...";
  }
}
