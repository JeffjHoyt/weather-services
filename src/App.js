import "./App.css";
import DayCard from "./components/DayCard/DayCard";
import SearchBar from "./components/SearchBar/SearchBar";
import { Container, Row, Col, Form } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import ForecastCard from "./components/ForecastCard/ForecastCard";

function App() {
  const [zipCode, setZipCode] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mapPosition, setMapPosition] = useState([0, 0]);

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=29078a91d8b4e8f94262c91a3d966467&units=imperial`
      );
      const weatherData = await weatherResponse.json();
      setWeatherData(weatherData);

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&appid=29078a91d8b4e8f94262c91a3d966467&units=imperial`
      );
      const forecastData = await forecastResponse.json();
      setForecastData(forecastData);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},us&appid=29078a91d8b4e8f94262c91a3d966467`
        );
        const data = await response.json();
        setMapPosition([data.lat, data.lon]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoordinates();
  }, [zipCode]);

  let forecastDisplay = () => {
    forecastData.list.map((forecast, index) => {
      if (index % 8 === 0) {
        const date = new Date(forecast.dt * 1000);
        const dayOfWeek = date.toLocaleString("en-US", {
          weekday: "long",
        });
        return (
          <ForecastCard
            id={forecast.dt}
            day={dayOfWeek}
            key={forecast.dt}
            high={forecast.main.temp_max}
            humidity={forecast.main.humidity}
            windSpeed={forecast.wind.speed}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className="justify-content-center text-center">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your zip code:
          <input type="text" value={zipCode} onChange={handleZipCodeChange} />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Get Weather"}
        </button>
      </form>
      <div className="align-content-center">
        {error && <p>{error}</p>}
        {weatherData && (
          <DayCard
            weatherIcon={weatherData.weather[0].icon}
            city={weatherData.name}
            high={weatherData.main.temp_max}
            low={weatherData.main.temp_min}
            windSpeed={weatherData.wind.speed}
            humidity={weatherData.main.humidity}
          />
        )}
      </div>
      <div>
        <h2>5-Day Forecast</h2>
      </div>
      {forecastData && (
        <div
          className="text-center justify-content-center d-flex flex-wrap"
          style={{ marginLeft: "2%", marginRight: "2%", gap: "5px" }}
        >
          {forecastData.list.map((forecast, index) => {
            if (index % 8 === 0) {
              const date = new Date(forecast.dt * 1000);
              const dayOfWeek = date.toLocaleString("en-US", {
                weekday: "long",
              });
              return (
                <ForecastCard
                  id={forecast.dt}
                  day={dayOfWeek}
                  key={forecast.dt}
                  high={forecast.main.temp_max}
                  humidity={forecast.main.humidity}
                  windSpeed={forecast.wind.speed}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      )}
    </div>
  );
}

export default App;
