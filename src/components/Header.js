import React from "react";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="search here"
            className="m-auto"
          />
        </Navbar.Text>

        <Nav>
          <Dropdown align={{ sm: "right" }}>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge bg="inherit">{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <div className="cartitem">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="cartItemImg"
                      />
                      <div className="cartItemDetails">
                        <span>{prod.name}</span>
                        <span>price: &#8377;{prod.price}</span>
                      </div>

                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({ type: "REMOVE_FROM_CART", payload: prod })
                        }
                      />
                    </div>
                  ))}
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
              <Link to="cart">
                <Button style={{ width: "95%", margin: "0 10px" }}>
                  Go To Cart
                </Button>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
