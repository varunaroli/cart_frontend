import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Cart from "./Components/Cart";
import Carttotal from "./Components/Carttotal";
import Items from "./Components/Items";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState([]);
  let visible = 0;
  const addCartFn = items => {
    let cartValues = [...cart, items];
    setCart(cartValues);
    const quantity = cart.filter(obj => obj.id === items.id).length;
    let itemQunatity = quantity ? quantity + 1 : 1;
    updateCart(items, itemQunatity);
    //});
  };
  const updateCart = (item, quantity) => {
    axios
      .post("http://localhost/cybrilla/public/api/cart", {
        product_id: item.id,
        price: item.price,
        quantity: quantity
      })
      .then(function(response) {
        let resp = axios.get("http://localhost/cybrilla/public/api/cart");
        resp.then(function(res) {
          setTotal(res.data.result.data);
        });
      });
  };
  const clearData = () => {
    let response = axios.delete("http://localhost/cybrilla/public/api/cart");
    if (response) {
      setTotal([]);
      setCart([]);
    }
  };
  return (
    <div className="App">
      <Container className="show-grid">
        <Row className="col-sm">
          <Col xs={12} md={6}>
            <Items addcart={addCartFn} />
          </Col>
          <Col xs={12} md={6}>
            <Cart cartVl={cart} /> <Carttotal data={total} />
            {Object.keys(total).length > 0 && (
              <div className="clearButton">
                <a className="btn btn-danger" onClick={clearData}>
                  Clear Cart
                </a>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
