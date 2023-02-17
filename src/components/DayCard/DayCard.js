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
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "330px" }}>
            <CardBody>
              <CardTitle>Today in {props.city}</CardTitle>
              <div className="weatherIcon"></div>
              <CardSubtitle>
                {props.high} / {props.low}
              </CardSubtitle>
              <Row>
                <Col className="d-flex">
                  <div className="windImage"></div>
                  <div className="wind">{props.windSpeed}</div>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex">
                  <div className="humidityImage"></div>
                  <div className="humidity">{props.humidity}</div>
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
