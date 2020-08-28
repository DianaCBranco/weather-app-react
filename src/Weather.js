import React, { useState } from "react";
import "./Weather.css";
import CurrentDate from "./CurrentDate";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      feels: response.data.main.feels_like,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCityInfo(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "506a60cbc1a48f3fc301a94591a2a09b";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <h1 className="title">Welcome to BetterOutside!</h1>
        <h2 className="date">
          <CurrentDate date={weatherData.date} />
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="search"
              className="form-control"
              placeholder="Enter city..."
              autoComplete="off"
              autoFocus="on"
              onChange={updateCityInfo}
            />
          </div>
        </form>
        <button className="btn btn-light locationButton">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </button>
        <br />
        <WeatherInfo data={weatherData} />
        <hr />
        <WeatherForecast city={weatherData.city} />
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
    search();
    return "Loading...";
  }
}
