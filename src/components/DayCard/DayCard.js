import React, { useState } from "react";
import "./DayCard.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import axios from "axios";

function DayCard(props) {
  const OW_API_ICON_URL = "http://openweathermap.org/img/wn/";
  return (
    <Card
      id="dayCard"
      className="dayCard shadow-sm p-3 mb-5 bg-white rounded text-center"
      key={props.key}
      style={{ width: "330px", marginBottom: "20px", padding: "0px" }}
    >
      <CardBody style={{ height: "100%", width: "100%" }}>
        <CardTitle style={{ top: "0", position: "absolute" }}>
          <h2>
            <span style={{ fontWeight: "bold" }}>Today </span>
            <span>in </span>
            {props.city}
          </h2>
        </CardTitle>
        <br></br>

        <div className=" justify-content-evenly">
          <CardSubtitle className="d-flex text-center align-content-center justify-content-center">
            <h3 style={{ fontWeight: "bold", color: "red" }}>
              high: {props.high}°{" "}
            </h3>
          </CardSubtitle>
          <CardSubtitle className="d-flex text-center align-content-center justify-content-center">
            <h3 style={{ color: "blue" }}> low: {props.low}°</h3>
          </CardSubtitle>
          <div className="">
            <img
              style={{ width: "120px", height: "auto" }}
              src={`${OW_API_ICON_URL}${props.icon}.png`}
              alt="weather icon"
            />
          </div>{" "}
        </div>
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

export default DayCard;
