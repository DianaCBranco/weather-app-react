import React, { useState } from "react";
import ForecastElements from "./ForecastElements";
import axios from "axios";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setReady(true);
  }

  if (ready && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <ForecastElements data={forecast.list[0]} />
        <ForecastElements data={forecast.list[1]} />
        <ForecastElements data={forecast.list[2]} />
        <ForecastElements data={forecast.list[3]} />
        <ForecastElements data={forecast.list[4]} />
      </div>
    );
  } else {
    let apiKey = "80f4e0a1dbd9cda98922a4fe732a5dbf";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
