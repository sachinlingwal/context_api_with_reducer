import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";

const SingleProduct = ({ prod }) => {
  return (
    <div className="products">
      <Card>
        <Card.Img src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Subtitle>
            <span>{prod.price}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 Days Delivery</div>
            )}
            <Rating rating={prod.rating} />
          </Card.Subtitle>
          <Button variant="danger"> Remove From Cart</Button>
          <Button disabled={!prod.inStock}>
            {!prod.inStock ? "Out Of Stock" : "Add To Cart"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
