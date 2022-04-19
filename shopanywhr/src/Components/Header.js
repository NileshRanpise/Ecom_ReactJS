import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Badge,Button,Container,Dropdown,FormControl,Nav,Navbar,} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../context/Context";
import "./styles.css";
// import About from "./About";
// import Contact from "./Contact";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <>  
    <div className="navbarstyle"  >
     <Navbar className="navitem" expand="lg" >
      <Container >
        <Navbar.Brand >
        <div className="navstyle">
          <Link to="/">^ShopAnywhr^</Link>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle className="ml-2 ml-lg-0" aria-controls="navbarScroll" />
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
            <Nav.Link className="navitem"  as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link active as={Link} to="/contact">
              Contact Us
            </Nav.Link>
            <Nav.Link active as={Link} to="/about">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {useLocation().pathname.split("/")[1] !== "cart" && (
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 200 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </Navbar.Text>
        )}
        <br></br>
        <h1>|</h1>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
    </div>
    </>

  );
};

export default Header;
