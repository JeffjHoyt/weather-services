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
    <Container style={{ color: "white" }}>
      <Row>
        <Col>
          <h1 style={{ fontSize: "65px" }}>{props.city}</h1>
        </Col>
      </Row>
      <Row>
        <Col style={{ color: "white" }}>
          <h1 style={{ fontWeight: "bold", fontSize: "150px" }}>
            {Math.floor(props.temp)}°
          </h1>
        </Col>{" "}
      </Row>
      <Row>
        <Col>
          <h1 style={{ fontSize: "65px" }}>{props.weatherType}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-start">
          {/* <div className="windImage"></div> */}
          <div style={{ fontSize: "28px" }} className="wind">
            {Math.floor(props.windSpeed)} mph winds
          </div>{" "}
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-start">
          <div style={{ fontSize: "28px" }} className="humidity">
            {props.humidity}% humidity
          </div>
        </Col>
      </Row>
    </Container>
    // <Card
    //   id="dayCard"
    //   className="dayCard shadow-sm p-3 mb-5 bg-white rounded text-center"
    //   key={props.key}
    //   style={{
    //     width: "330px",
    //     marginBottom: "20px",
    //     padding: "0px",
    //     backgroundColor: "transparent",
    //   }}
    // >
    //   <CardBody style={{ height: "100%", width: "100%" }}>
    //     <CardTitle style={{ top: "0", position: "absolute" }}>
    //       <h2>
    //         <span style={{ fontWeight: "bold" }}> </span>
    //         <span></span>
    //         {props.city}
    //       </h2>
    //     </CardTitle>
    //     <br></br>
    //     <br></br>
    //     <div className=" justify-content-evenly">
    //       <CardSubtitle className="d-flex text-center align-content-center justify-content-center">
    //         <h3 style={{ fontWeight: "bold", color: "red" }}>
    //           high: {props.high}°
    //         </h3>
    //       </CardSubtitle>
    //       <CardSubtitle className="d-flex text-center align-content-center justify-content-center">
    //         <h3 style={{ color: "blue" }}> low: {props.low}°</h3>
    //       </CardSubtitle>
    //       <div className="">
    //         <img
    //           style={{ width: "120px", height: "auto" }}
    //           src={`${OW_API_ICON_URL}${props.icon}.png`}
    //           alt="weather icon"
    //         />
    //         <h3>{props.day}</h3>
    //         <br></br>
    //       </div>{" "}
    //     </div>
    //     <Row>
    //       <Col className="d-flex justify-content-end">
    //         <div className="windImage"></div>
    //         <div className="wind">{props.windSpeed}mph winds</div>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col className="d-flex justify-content-end">
    //         <div className="humidityImage"></div>
    //         <div className="humidity">{props.humidity}% humidity</div>
    //       </Col>
    //     </Row>
    //   </CardBody>
    // </Card>
  );
}

export default DayCard;
