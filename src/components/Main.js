import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Question from "./Question";
import asian from "./image/asian.jpg";

const Main = () => {
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col xs={11} className="app">
              <Col>Prepare Children to Return to the Classroom</Col>
              <img className="pic" src={asian} />
              <Col></Col>
            </Col>

            <Col xs={1}>
              <Question />
            </Col>
          </Row>
        </Container>
      </section>

      <section></section>
    </div>
  );
};
export default Main;
