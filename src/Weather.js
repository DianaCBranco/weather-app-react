import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  let weatherData = {
    city: "Cluj-Napoca",
    temperature: 18,
    date: "Monday, 21 of July 2020",
    description: "Rainy",
    imgUrl: "https://simpleicon.com/wp-content/uploads/sun.png",
    wind: 31,
    humidity: 80,
    precipitation: 10,
  };

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
          />
        </div>
      </form>
      <button className="search">Search</button>
      <br />
      <h4 className="city">{weatherData.city}</h4>
      <br />
      <div>
        <ReactAnimatedWeather
          icon="RAIN"
          color="#4682B4"
          size={80}
          animate={true}
          alt={weatherData.description}
        />
      </div>
      <br />
      <h3 className="description">{weatherData.description}</h3>
      <strong className="temperature">
        18 <a href="/">°C</a> | <a href="/">°F</a>
      </strong>
      <div className="conditions">
        Wind: {weatherData.wind} Km/h <br />
        Humidity: {weatherData.humidity} % <br />
        Precipitation: {weatherData.precipitation}% <br />
      </div>
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
}
