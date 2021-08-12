import { Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import React, { useEffect, useState } from "react";
const Items = props => {
  const [resp, setResp] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(
        "http://localhost/cybrilla/public/api/products"
      );
      setResp(response.data.result.data);
    }
    fetchData();
  }, []);

  const updateCart = item => {
    props.addcart(item);
  };
  return (
    <Container>
      <Row className="title">
        Products
        <div className="subheading">Click on each item to add to cart</div>
      </Row>
      <Row>
        {resp.map(item => {
          return (
            <div
              className="boxStyle"
              key={item.id}
              onClick={e => updateCart(item)}
            >
              {item.name}
            </div>
          );
        })}
      </Row>
      <Row></Row>
    </Container>
  );
};

export default Items;
