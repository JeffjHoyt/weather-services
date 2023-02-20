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
  return (
    <Card
      id="dayCard"
      className="dayCard shadow-sm p-3 mb-5 bg-white rounded"
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

        <div className="d-flex justify-content-evenly">
          <div className={props.background}></div>
          <br></br>
          <br></br>
          <CardSubtitle className="d-flex">
            <h3 style={{ fontWeight: "bold" }}>{props.high}° </h3>
            <h3>/ {props.low}°</h3>
          </CardSubtitle>
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
