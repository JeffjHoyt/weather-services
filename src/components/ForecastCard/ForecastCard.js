import React from "react";
import "./ForecastCard.css";
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

function ForecastCard(props) {
  const classSelector = document.getElementById("classSelector");
  //   {
  //     if (props.class === "Clear") {
  //       classSelector.classList.add("clear");
  //     } else if (props.class === "Clouds") {
  //       classSelector.classList.add("cloudy");
  //     } else if (props.class === "Rain") {
  //       classSelector.classList.add("rainy");
  //     } else if (props.class === "Snow") {
  //       classSelector.classList.add("snowy");
  //     } else if (props.class === "Thunderstorm") {
  //       classSelector.classList.add("thunderstorm");
  //     } else props.class === "drizzle";
  //   }
  return (
    <Card style={{ width: "330px", opacity: "0.73" }}>
      <CardBody>
        <CardTitle>
          <h3>{props.day}</h3>
        </CardTitle>
        <div id="classSelector" className="weatherIcon"></div>
        <CardSubtitle style={{ fontWeight: "bold" }}>
          <h3>{props.high}°</h3>
        </CardSubtitle>
        <Row>
          <Col className="d-flex justify-content-end">
            <div className="windImage"></div>
            <div className="wind">{props.windSpeed}mph winds</div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-end">
            <div className="humidityImage"></div>
            <div className="humidity">{props.humidity}% humidity</div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default ForecastCard;
