import React from "react";
import {Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';




const FoodItem = (props) => {
   
const cuisine = [
    {image:"https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg", title: "Rose Muffen", price: "12$", description: "served with french fries",
     text: "Lorem ipsum dolor sint, molestiae eum nihil laborum soluta? Quia, vero error.", rating: "", more: ""},
    {image:"https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg", title: "Rose Muffen", price: "12$", description: "served with french fries",
     text: "Lorem ipsum dolor sint, molestiae eum nihil laborum soluta? Quia, vero error.", rating: "", more: ""},
    {image:"https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg", title: "Rose Muffen", price: "12$", description: "served with french fries",
     text: "Lorem ipsum dolor sint, molestiae eum nihil laborum soluta? Quia, vero error.", rating: "", more: ""},
    {image:"https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg", title: "Rose Muffen", price: "12$", description: "served with french fries",
     text: "Lorem ipsum dolor sint, molestiae eum nihil laborum soluta? Quia, vero error.", rating: "", more: ""},
    {image:"https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg", title: "Rose Muffen", price: "12$", description: "served with french fries",
     text: "Lorem ipsum dolor sint, molestiae eum nihil laborum soluta? Quia, vero error.", rating: "", more: ""},
    {image:"https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg", title: "Rose Muffen", price: "12$", description: "served with french fries",
     text: "Lorem ipsum dolor sint, molestiae eum nihil laborum soluta? Quia, vero error.", rating: "", more: ""},
   ];
 
const cardRender = (card, index) => {
    return (
<Card style={{ width: '18rem' }} key={index}>
  <Card.Img variant="top" src="holder.js/100px180" src={card.iamge}/>
  <Card.Body>
    <Card.Title>{card.title}</Card.Title>
    <Card.Text>
     {card.text}
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>

    )
}

return (
    <div className='container'>
{cui}
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
