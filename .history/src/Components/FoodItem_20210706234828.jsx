import React, { div } from "react";
import { Icon, InlineIcon } from "@iconify/react";
import sharpStarRate from "@iconify-icons/ic/sharp-star-rate";
import Logo from "../Assets/Img/logo192.png";
import "bootstrap/dist/css/bootstrap.min.css";

const FoodItem = (c) => {
  const Cuisine = [
    {
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg?quality=90&resize=385%2C350",
      title: "Rose Muffen",
      price: "12$",
      description: "served with french + fries",
      text: "Lorem ipsum dolor sint, molestiae  lorem  eum nihil laborum soluta?  Quia, vero error.",
      rating: 4,
    },
  ];


  return (
    <div className="container">
 <div className="card-deck" >
        <div className="card">
          <img
            className="card-img-top"
            src={cuisine.image}
            alt="food at your door step"
          />
          <div className="card-body">
            <span>
              <h2 className="card-title">{cuisine.title}</h2>
              <h2 className="price">{cuisine.price}</h2>
            </span>
            <p className="card-subtitle mb-2 text-muted">{cuisine.description}</p>
          </div>

          <div className="card-text">
            <div className="text">{cuisine.text}</div>
          </div>

          <div className="float1">
            <div>
              <Icon className="rate" icon={sharpStarRate} />
            </div>
            <div>
              <img className="more" src={Logo} />
            </div>
          </div>
        </div>
      </div>
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
