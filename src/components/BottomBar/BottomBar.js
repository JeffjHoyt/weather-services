import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./BottomBar.css";

const BottomBar = (props) => {
  return (
    <Container className="d-flex justify-content-center">
      <Row className="d-flex bottomBar align-content-center">
        <Col>
          <div>{props.feelsLike}</div>
          <div style={{ fontWeight: "bold" }}>Feels</div>
        </Col>
        <Col>
          {" "}
          <div>{props.high}</div>
          <div>High</div>
        </Col>
        <Col>
          {" "}
          <div>{props.low}</div>
          <div>Low</div>
        </Col>
      </Row>
    </Container>
  );
};

export default BottomBar;
