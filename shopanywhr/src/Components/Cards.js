import React from "react";
import { Card, Button } from "react-bootstrap";
import "../Styles/Card.css"

const Cards = ({ item, handleClick }) => {
  const { title, name, price, image } = item;
  return (

    <>
      {/* <br></br>
      <h2 style={{ align: "centre" }}> Contact Page </h2>
      <hr></hr>  */}
    
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={image}
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{name}</Card.Text>
                <Card.Text>{price} /-</Card.Text>
                <Button onClick={() => handleClick(item)} variant="success">Add to Cart</Button>
              </Card.Body>
            </Card>
      
    </>
  );
};

export default Cards;
