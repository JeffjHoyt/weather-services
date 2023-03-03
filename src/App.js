import "./App.css";
import DayCard from "./components/DayCard/DayCard";
import SearchBar from "./components/SearchBar/SearchBar";
import { Container, Row, Col, Form, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import ForecastCard from "./components/ForecastCard/ForecastCard";
import axios from "axios";
import BottomBar from "./components/BottomBar/BottomBar";

function App() {
  const [zipCode, setZipCode] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mapPosition, setMapPosition] = useState([0, 0]);
  const [searched, setSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState("hidden");

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    if (zipCode.length !== 5 || !/^\d+$/.test(zipCode)) {
      alert("Please enter a valid 5-digit zip code.");
      return;
    }
    // Show the loading screen
    setIsLoading(true);

    // Simulate a delay of 0.6 seconds
    setTimeout(function () {
      // Hide the loading screen
      setIsLoading(false);

      // Display the search results
      // Your code to display search results goes here...
    }, 600);
    setVisible("visible");
    setLoading(true);
    setSearched(true);

    // Show the loading screen
    setIsLoading(true);

    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=29078a91d8b4e8f94262c91a3d966467&units=imperial`
        ),
        axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&appid=29078a91d8b4e8f94262c91a3d966467&units=imperial`
        ),
      ]);

      setWeatherData(weatherResponse.data);
      setForecastData(forecastResponse.data);
      setLoading(false);
      setVisible("visible");
      setSearched(true);
    } catch (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},us&appid=29078a91d8b4e8f94262c91a3d966467`
        );
        setMapPosition([response.data.lat, response.data.lon]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoordinates();
  }, [zipCode]);

  // let forecastDisplay = () => {
  //   const today = new Date();
  //   const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  //   const fiveDaysLater = new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000);

  // const nextFiveDays = forecastData.list
  //   .filter((forecast) => {
  //     const date = new Date(forecast.dt * 1000);
  //     return (
  //       date >= tomorrow &&
  //       date < fiveDaysLater &&
  //       forecast.dt_txt.includes("12:00:00")
  //     );
  //   })
  //   .map((forecast) => {
  //     const date = new Date(forecast.dt * 1000);
  //     const dayOfWeek = date.toLocaleString("en-US", {
  //       weekday: "long",
  //     });
  //     return (
  //       <Container>
  //         <Row>
  //           <Col>
  //             <ForecastCard
  //               id={forecast.dt}
  //               day={dayOfWeek}
  //               key={forecast.dt}
  //               high={forecast.main.temp_max}
  //               humidity={forecast.main.humidity}
  //               windSpeed={forecast.wind.speed}
  //               icon={forecast.weather[0].icon}
  //             />
  //           </Col>
  //         </Row>
  //       </Container>
  //     );
  //   });

  // return nextFiveDays;
  // };

  return (
    <Container
      id="backgroundContainer"
      className="justify-content-center text-center"
      style={{
        marginRight: "0px",
        marginLeft: "0px",
        width: "100vw !important",
        height: "100vh",
        minWidth: "375px !important",
        overflowX: "hidden",
      }}
    >
      <Row>
        <Col>
          <h1 style={{ color: "white" }}></h1>
          <br></br>
          <br></br>
        </Col>
      </Row>
      <Row>
        <Col>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                style={{ border: "none", borderRadius: "50px", width: "370px" }}
                className="shadow-lg p-2 hoverEffect "
                placeholder="Enter your zip code:"
                type="text"
                value={zipCode}
                onChange={handleZipCodeChange}
              />
            </label>
            <br></br>

            <Button
              type="submit"
              className="hoverEffect"
              disabled={loading}
              style={{
                marginTop: "10px",
                borderRadius: "50px",
                border: "none",
                backgroundColor: "#00BFFF",
                color: "#000",
                marginBottom: "10px",
                border: "1px solid white",
              }}
            >
              {loading ? "Loading..." : "Get Weather"}
            </Button>
          </form>

          {error && (
            <div
              className="text-danger"
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                backgroundColor: "white",
              }}
            >
              Please enter valid zip code
            </div>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          {/* Show the loading screen if isLoading is true */}
          {isLoading && (
            <div className="loading-screen">
              <img
                src="https://media.tenor.com/C7KormPGIwQAAAAi/epic-loading.gif"
                alt="Loading..."
              />
            </div>
          )}
          {weatherData ? (
            <div>
              <div id="appDaycard">
                <div
                  id="dayCard"
                  className="justify-content-center mx-auto "
                  style={{ visibility: `${visible}` }}
                >
                  {weatherData && (
                    <DayCard
                      weatherIcon={weatherData.weather[0].icon}
                      high={weatherData.main.temp_max}
                      low={weatherData.main.temp_min}
                      windSpeed={weatherData.wind.speed}
                      humidity={weatherData.main.humidity}
                      background={weatherData.main}
                      icon={weatherData.weather[0].icon}
                      day={weatherData.weather[0].main}
                    />
                  )}
                </div>
              </div>

              {searched ? (
                <div>
                  <Row>
                    <Col style={{ position: "fixed", bottom: "0" }}>
                      <BottomBar
                        feelsLike={weatherData.main.feels_like}
                        high={weatherData.main.temp_max}
                        low={weatherData.main.temp_min}
                      />
                    </Col>
                  </Row>{" "}
                </div>
              ) : null}

              {/* {forecastData && (
                <div
                  className="text-center justify-content-center d-flex flex-wrap"
                  id="forecastCard"
                  style={{
                    marginLeft: "2%",
                    marginRight: "2%",
                    gap: "5px",
                    visibility: { visible },
                  }}
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
              )} */}
            </div>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
