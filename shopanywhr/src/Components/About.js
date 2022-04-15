import React from 'react';
import { Card, Button, Container,Row,Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <br></br>
      <h2 style={{align:"centre"}}> About Page </h2>
      <hr></hr>
      <Container fluid="md">
      <Row>
      <Col md={4}  sm={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://i02.appmifile.com/867_operator_in/23/04/2021/3849c44ac78d65621750a114811711f9.png?width=140&height=140" />
          <Card.Body>
            <Card.Title>Mobile</Card.Title>
            <Card.Text>
             Amount Rs.25000/-
            </Card.Text>
            <Button variant="success">Add to Cart</Button>
          </Card.Body>
        </Card>
        </Col>

        <Col md={4}  sm={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://i01.appmifile.com/webfile/globalimg/in/cms/81DAE22D-023B-1742-5400-32A7760B0962.jpg?width=140&height=140" />
          <Card.Body>
            <Card.Title>Laptop</Card.Title>
            <Card.Text>
            Amount Rs.35000/-
            </Card.Text>
            <Button variant="success">Add to Cart</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col md={4}  sm={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://i02.appmifile.com/620_operator_in/23/04/2021/3c98ae4c034583122a67669c840f249e.jpg?width=140&height=140" />
          <Card.Body>
            <Card.Title>TV</Card.Title>
            <Card.Text>
            Amount Rs.30000/-
            </Card.Text>
            <Button variant="success">Add to Cart</Button>
          </Card.Body>
        </Card>
        </Col>
        </Row>
      </Container>
    </>
  )
}

export default About