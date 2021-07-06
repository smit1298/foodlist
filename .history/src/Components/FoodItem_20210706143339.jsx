import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FoodItem = () => {
  const cuisine = [
    {
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg?quality=90&resize=385%2C350",
      title: "Rose Muffen",
      price: "12$",
      description: "served with french fries",
      text: "Lorem ipsum dolor sint, molestiae eum nihil laborum soluta? Quia, vero error.",
      rating: "",
      more: "",
    },
    {
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg?quality=90&resize=385%2C350",
      title: "Rose Muffen",
      price: "12$",
      description: "served with french fries",
      text: "Lorem ipsum dolor sint, molestiae eum nihil laborum soluta? Quia, vero error.",
      rating: "",
      more: "",
    },
    {
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg?quality=90&resize=385%2C350",
      title: "Rose Muffen",
      price: "12$",
      description: "served with french fries",
      text: "Lorem ipsum dolor sint, molestiae eum nihil laborum soluta? Quia, vero error.",
      rating: "",
      more: "",
    },
    {
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg?quality=90&resize=385%2C350",
      title: "Rose Muffen",
      price: "12$",
      description: "served with french fries",
      text: "Lorem ipsum dolor sint, molestiae eum nihil laborum soluta? Quia, vero error.",
      rating: "",
      more: "",
    },
    {
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg?quality=90&resize=385%2C350",
      title: "Rose Muffen",
      price: "12$",
      description: "served with french fries",
      text: "Lorem ipsum dolor sint, molestiae eum nihil laborum soluta? Quia, vero error.",
      rating: "",
      more: "",
    },
    {
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg?quality=90&resize=385%2C350",
      title: "Rose Muffen",
      price: "12$",
      description: "served with french fries",
      text: "Lorem ipsum dolor sint, molestiae eum nihil laborum soluta? Quia, vero error.",
      rating: "",
      more: "",
    },
  ];

  const cardRender = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="row">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} className="Col lg={4} xs={6} md={3} " />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    );
  };

  return <div className="container">{cuisine.map(cardRender)}</div>;
};

export default FoodItem;
{
  /* <Row>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
  </Row> */
}
