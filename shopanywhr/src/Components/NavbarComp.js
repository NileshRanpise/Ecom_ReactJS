import React from "react";
import {
  Navbar,
  NavDropdown,
  // Form,
  // FormControl,
  Button,
  Nav,
  Container,
  // Dropdown,
  // Badge,
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
import "../Styles/NavbarComp.css";
import { FaShoppingCart } from "react-icons/fa";

const Navbarcomp = () => {
  return (
    <>
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg" style={{ height: 80 }}>
          <Container fluid="md">
            <Navbar.Brand className="ml-5 ml-lg-0" active as={Link} to="/home">
              ShopAnywhr
            </Navbar.Brand>

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

                <Nav.Link active as={Link} to="/contact">
                  Contact Us
                </Nav.Link>
                <Nav.Link active as={Link} to="/about">
                  About Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Nav.Link active as={Link} to="/">
              <Button variant="success">
                <FaShoppingCart color="white" fontSize="25px" />{" "}
              </Button>
            </Nav.Link>
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
