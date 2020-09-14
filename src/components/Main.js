import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Question from "./Question";

const Main = () => {
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col xs={11} className="app">
              Prepare Children to Return to the Classroom
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
