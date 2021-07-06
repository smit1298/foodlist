import React, { Fragment } from "react";
import { Icon, InlineIcon } from "@iconify/react";
import sharpStarRate from "@iconify-icons/ic/sharp-star-rate";
import Logo from "../Assets/Img/logo192.png";
import "bootstrap/dist/css/bootstrap.min.css";

const FoodItem = () => {
  const cuisine = [
    {
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg?quality=90&resize=385%2C350",
      title: "Rose Muffen",
      price: "12$",
      description: "served with french + fries",
      text: "Lorem ipsum dolor sint, molestiae  lorem eum nihil laborum soluta? Quia, vero error.",
      rating: 4,
    }
  ];

  const cardRender = (card) => {
    return (
      <div className="container all">
        <img
          className="img"
          variant="top"
          src={card.image}
          alt="food at your door step"
        />
        <Fragment>
          <div className="description">
            <span>
              <h2 className="title">{card.title}</h2>
              <h2 className="price">{card.price}</h2>
            </span>
            <p>{card.description}</p>
          </div>
        </Fragment>

        <Fragment>
          <div className="text">{card.text}</div>
        </Fragment>

        <Fragment>
          <Icon  className="rate" icon={sharpStarRate}/>
          <img className="more" src={Logo}/>
        </Fragment>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <div className="row col">{cuisine.map(cardRender)}</div>
    </div>
  );
};

export default FoodItem

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
