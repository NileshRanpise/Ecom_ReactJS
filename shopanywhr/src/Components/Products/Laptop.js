import React from 'react';
import { Card, Button, Container,Row,Col } from "react-bootstrap";
import Cards from "../Cards";
import list from "../Datanew";

const Laptop = ({ handleClick }) => {
  return (
    <>
  
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>

    </>
  );
}

export default Laptop