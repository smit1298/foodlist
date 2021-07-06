import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FoodItem = () => {
  const cuisine = [
    {
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg?quality=90&resize=385%2C350",
      title: "Rose Muffen",
      price: "12$",
      description: "served with french + fries",
      text: "Lorem ipsum dolor sint, molestiae eum nihil laborum soluta? Quia, vero error.",
      rating: "",
      more: "",
    },
  ];

  const cardRender = (card, index) => {
    return (
      <div className="all">
        <img
          className="img"
          variant="top"
          src="holder.js/100px180"
          src={card.image}
        />
        <Fragment>
          <div className="description">
            <span>
              <h2 className="title">{card.title}</h2>
              <h2 className="price">{card.price}</h2>
            </span>
            <p>{card.description}</p>
          </div>
          <div>{card.text}</div>
        </Fragment>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <div className="row col xs={6} md={4}">{cuisine.map(cardRender)}</div>
    </div>
  );
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
