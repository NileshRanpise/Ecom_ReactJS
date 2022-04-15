import React from "react";
import { Card, Button, Container, Row, Col, Jumbotron } from "react-bootstrap";
import "../Styles/home.css";

const About = () => {
  return (
    <>
    <Container>
    <br></br>
      <Card className="text-center">
        <Card.Header> <h1>  About Us </h1> </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        <Card.Footer className="text-muted"> -=|||=-</Card.Footer>
      </Card>
      </Container>
    </>
  );
};

export default About;
