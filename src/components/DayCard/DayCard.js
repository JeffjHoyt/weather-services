import React from "react";
import "./DayCard.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const DayCard = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Card styleName={{ width: "330px" }}>
            <CardBody>
              <CardTitle>Mon 4th</CardTitle>
              <div className="weatherIcon"></div>
              <CardSubtitle>78 / 54</CardSubtitle>
              <Row>
                <Col className="d-flex">
                  <div className="windImage"></div>
                  <div className="wind">14mph</div>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex">
                  <div className="humidityImage"></div>
                  <div className="humidity">5%</div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DayCard;
