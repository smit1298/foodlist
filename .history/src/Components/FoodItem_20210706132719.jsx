import React from "react";
import {Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';




const FoodItem = (props) => {
   
const cuisine = [
    {image: "", title: "Rose Muffen", price: "12$", description: "served with french fries", text: "lore", rating: "", more: ""},
    {image: "", title: "", price: "", description: "", text: "", rating: "", more: ""},
    {image: "", title: "", price: "", description: "", text: "", rating: "", more: ""},
    {image: "", title: "", price: "", description: "", text: "", rating: "", more: ""},
    {image: "", title: "", price: "", description: "", text: "", rating: "", more: ""},
    {image: "", title: "", price: "", description: "", text: "", rating: "", more: ""}
] 
return (
    <div className='container'>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
      h
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
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
