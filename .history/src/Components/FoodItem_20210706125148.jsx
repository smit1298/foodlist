import React from "react";
import CardList from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';




const FoodItem = (props) => {
    const  {image, heading, price, text, rate  } = props.cuisine
  return (
    <div className='container'>
<div className="row">
    <CardList></CardList>
</div>
    </div>
  );
};

export default FoodItem;
<Row>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
  </Row>
