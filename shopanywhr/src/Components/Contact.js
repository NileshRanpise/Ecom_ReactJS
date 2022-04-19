import React from 'react';
import { Card, Button, Container } from "react-bootstrap";

const Contact = () => {
  return (
    <>
    <br></br>
  
    <hr></hr>
    <Container fluid="md">
    <Card className="text-center">
      <Card.Header> <h1>  Contact Us </h1> </Card.Header>
      <Card.Body>
        <Card.Title>Nilesh A. Ranpise</Card.Title>
        <Card.Text>
              {/* <h2> Nilesh A. Ranpise </h2> */}
              {/* <Card.Title>Full-stack Developer </Card.Title> */}
            </Card.Text>
            <Card.Text>
            <Card.Text> <strong> Mobile No :</strong> +91 7506492989 </Card.Text>
            <Card.Text> <strong>Email Id : </strong> nilesh.ranpise92@gmail.com </Card.Text>
            {/* <Card.Text> <strong> Linked In:</strong> https://www.linkedin.com/in/nileshranpise/ </Card.Text> */}
            {/* <Card.Text> <strong>Git Hub :</strong> https://github.com/NileshRanpise </Card.Text> */}
            {/* <Card.Text> <strong>Location :</strong> Mumbai,Maharashtra </Card.Text> */}
            </Card.Text>
            {/* <Card.Text>Contact for more details</Card.Text> */}
            <Button variant="success">Contact for more Details</Button>
          </Card.Body>
      <Card.Footer className="text-muted"> -=|||=-</Card.Footer>
    </Card>

    </Container>
  </>
  )
}

export default Contact