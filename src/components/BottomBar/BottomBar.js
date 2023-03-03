import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./BottomBar.css";

const BottomBar = (props) => {
  return (
    <Container className="d-flex justify-content-center">
      <Row className="d-flex bottomBar align-content-center">
        <Col>
          <div style={{ fontWeight: "bolder", fontSize: "26px" }}>
            {Math.floor(props.feelsLike)}°
          </div>
          <div style={{ fontSize: "20px" }}>Feels</div>
        </Col>
        <Col>
          {" "}
          <div style={{ fontWeight: "bolder", fontSize: "26px" }}>
            {Math.floor(props.high)}°
          </div>
          <div style={{ fontSize: "20px" }}>High</div>
        </Col>
        <Col>
          {" "}
          <div style={{ fontWeight: "bolder", fontSize: "26px" }}>
            {Math.floor(props.low)}°
          </div>
          <div style={{ fontSize: "20px" }}>Low</div>
        </Col>
      </Row>
    </Container>
  );
};

export default BottomBar;
