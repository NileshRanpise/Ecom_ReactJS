import React from "react";
import {
  Navbar,
  NavDropdown,
  // Form,
  // FormControl,
  // Button,
  Nav,
  Container,
  // Row,
  // Col
} from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Laptop from "./Products/Laptop";
import Mobile from "./Products/Mobile";
import Headphones from "./Products/Headphones";

const Navbarcomp = () => {
  return (
    <>
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
          <Container fluid="md">
            {/* <Container className="m"> */}
            {/* <Row> */}
            <Navbar.Brand className="ml-5 ml-lg-0"  active as={Link} to="/home">
              ShopAnywhr
            </Navbar.Brand>
            {/* </Container> */}
           
            <Navbar.Toggle
              className="ml-2 ml-lg-0"
              aria-controls="navbarScroll"
            />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link active as={Link} to="/home">
                  {/* Home */}
                </Nav.Link>
                <Nav.Link active as={Link} to="/home">
                  {/* Home */}
                </Nav.Link>
                <Nav.Link active as={Link} to="/home">
                  {/* Home */}
                </Nav.Link>
                <Nav.Link active as={Link} to="/home">
                  Home
                </Nav.Link>
                <NavDropdown
                  active
                  id="nav-dropdown-dark-example"
                  title="Products"
                  menuVariant="dark"
                >
                  <NavDropdown.Item as={Link} to="/mobile">
                    Mobile
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/laptop">
                    Laptop
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/headphones">
                    Headphones
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Link  active as={Link} to="/mobile">
                  Mobile
                </Nav.Link>
                <Nav.Link  active as={Link} to="/laptop">
                  Laptop
                </Nav.Link>
                <Nav.Link active as={Link} to="/headphones">
                  Headphones
                </Nav.Link> */}
                <Nav.Link active as={Link} to="/contact">
                  Contact Us
                </Nav.Link>
                <Nav.Link active as={Link} to="/about">
                  About Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            {/* </Row> */}
            {/* <Container fluid="md"> */}
          </Container>
        </Navbar>
      </div>

      <div>
        <Switch>
          <Route path="/mobile">
            <Mobile />
          </Route>
          <Route path="/laptop">
            <Laptop />
          </Route>
          <Route path="/headphones">
            <Headphones />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Navbarcomp;
