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
    <Container id="dayCard">
      <Row>
        <Col>
          <Card
            className="dayCard"
            key={props.key}
            style={{ width: "330px", marginBottom: "20px" }}
          >
            <CardBody>
              <CardTitle>
                <h2>
                  <span style={{ fontWeight: "bold" }}>Today in </span>
                  {props.city}
                </h2>
              </CardTitle>
              <div className="d-flex justify-content-evenly">
                <div className="weatherIcon"></div>
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
        </Col>
      </Row>
    </Container>
  );
}

export default DayCard;
