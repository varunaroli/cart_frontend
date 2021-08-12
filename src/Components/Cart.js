import { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
const Cart = props => {
  const [cartItem, setCartItem] = useState([]);
  const [count, setCount] = useState([]);
  useEffect(() => {
    setCartItem([...props.cartVl]);
    let cnt = count;
  }, [props.cartVl]);
  return (
    <Container>
      <Row className="title col-sm">Cart</Row>
      {cartItem.length > 0 ? (
        <>
          <Row className="col-sm">
            <Col xs={12} md={3}>
              Item
            </Col>
            <Col xs={12} md={3} className="rightalign">
              Price
            </Col>
          </Row>
          {cartItem.map((item, index) => {
            return (
              <Row className="col-sm" key={"a" + index}>
                <Col xs={12} md={3}>
                  {item.name}
                </Col>
                <Col xs={12} md={3} className="rightalign">
                  {item.price}
                </Col>
              </Row>
            );
          })}
        </>
      ) : (
        <div>No items to display.</div>
      )}
    </Container>
  );
};

export default Cart;
