import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchBar.css";
import axios from "axios";

function SearchBar() {
  const [zipCode, setZipCode] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [enteredZipCode, setEnteredZipCode] = useState(false);
  const [high, setHigh] = useState("");
  const [low, setLow] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [humidity, setHumidity] = useState("");

  const API_KEY = "1234400594905";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.weather.gov/gridpoints/TOP/31,80/forecast`
      );
      setWeatherData(result.data.properties.periods[0]);
    };
    fetchData();
  }, []);

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      const result = await axios(
        `https://api.weather.gov/gridpoints/TOP/31,80/forecast`
      );
      setWeatherData(result.data.properties.periods[0]);
    };
    fetchData();
    setEnteredZipCode(true);
    setHigh(weatherData.temperatureMax);
    setLow(weatherData.temperatureMin);
    setWindSpeed(weatherData.windSpeed);
    setHumidity(weatherData.relativeHumidity);
  };

  return (
    <Container id="searchBar">
      <Row>
        <Col>
          <Form className="d-flex">
            <input
              className="searchInput"
              id="search"
              type="text"
              placeholder="Search weather by Zip Code"
              value={zipCode}
              onChange={handleZipCodeChange}
              required
            />
            <Button
              type="submit"
              className="searchButton"
              onClick={(() => setEnteredZipCode(true), handleSearch)}
            >
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;
