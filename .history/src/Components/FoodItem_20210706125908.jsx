import React from "react";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';




const FoodItem = (props) => {
    const  {image, heading, price, text, rate  } = props.cuisine
  return (
    <div className='container'>
<div className="row">
<Card>
    
</Card>
</div>
    </div>
  );
};

export default FoodItem;
{/* <Row>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
  </Row> */}
