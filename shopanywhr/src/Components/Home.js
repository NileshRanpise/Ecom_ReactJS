import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Cards";
import list from "../Data";
import "../Styles/Card.css";

const Home = ({ handleClick }) => {

  // const [cart,setCart] = useState([]);

  const handleCartClick = (item) =>{
      console.log(item);
  }

  return (
    <>
      {/* <Container className="item-container">
        <Row>
       
          <Col >
            {list.map((item) => (
              <Cards key={item.id} item={item} handleClick={handleClick} />
            ))}
          </Col>
       
        </Row>
      </Container> */}

      <div>
      <br></br>
      <h1 className='maintitle'>Featured Products</h1>
      <hr></hr>
      <div className='item-container'>
        {list.map((item) => (
          <div className='card'>
          <Cards key={item.id} item={item} handleClick={handleCartClick} />
          </div>
        ))}
      </div>
    </div>
    <hr></hr>
    <br></br>
    </>
  );
};

export default Home;
