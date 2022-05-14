import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card>
        <Card.Img src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Subtitle>
            <span>Price: &#8377;{prod.price}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 Days Delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>

          {cart.some((p) => p.id === prod.id) ? (
            <Button
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_CART", payload: prod });
              }}
              variant="danger"
            >
              {" "}
              Remove From Cart
            </Button>
          ) : (
            <Button
              disabled={!prod.inStock}
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: prod });
              }}
            >
              {!prod.inStock ? "Out Of Stock" : "Add To Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
