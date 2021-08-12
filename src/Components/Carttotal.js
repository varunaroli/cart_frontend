import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Carttotal = props => {
  const {
    data: { items, total }
  } = props;
  return (
    <div>
      <Container>
        {items &&
          items
            .filter(it => it.discount > 0)
            .map((item, index) => {
              return (
                <>
                  {index == 0 && <hr />}
                  <Row key={"b" + index} className="col-sm">
                    <Col xs={12} md={3} className="rightalign">
                      Discount for {item.name}
                    </Col>
                    <Col xs={12} md={3} className="rightalign">
                      {item.discount}
                    </Col>
                  </Row>
                </>
              );
            })}
        {items && total && <hr />}
        {total && total.length > 0 && (
          <>
            <Row className="col-sm">
              <Col xs={12} md={3} className="rightalign">
                Sub total
              </Col>
              <Col xs={12} md={3} className="rightalign">
                {total[0].total}
              </Col>
            </Row>
            <Row className="col-sm">
              <Col xs={12} md={3} className="rightalign">
                Cart Discount
              </Col>
              <Col xs={12} md={3} className="rightalign">
                {total[0].discount}
              </Col>
            </Row>
            <Row className="col-sm">
              <Col xs={12} md={3} className="rightalign">
                Total
              </Col>
              <Col xs={12} md={3} className="rightalign">
                {total[0].subtotal}
              </Col>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
};

export default Carttotal;
