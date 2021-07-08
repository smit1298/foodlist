import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import sharpStarRate from "@iconify-icons/ic/sharp-star-rate";
import plusSign from "@iconify-icons/el/plus-sign";
import Logo from "../Assets/Img/logo192.png";
import "./FoodItem.css";
import "bootstrap/dist/css/bootstrap.min.css";

const FoodItem = ({ card }) => {
  return (
    <div className="col-md-4 mt-4">
      <div className="card-deck">
        <div className="card">
          <img
            className=" card-img-top"
            src={card.strMealThumb}
            alt="food at your door step"
          />
          <div className="card-body ">
            <span className="float">
              <h4 className="card-title float-left">{card.title}</h4>
              <h4 className="price float-right">{card.price}</h4>
            </span>
            <p className="card-subtitle float-left mt-4 pt-2">{card.strMeal}</p>
          </div>

          <div className="card-text ">{card.description}</div>

          <div className="container d-flex align-items-center justify-content-between">
            <Icon icon={sharpStarRate} />
            <div className="plus">
              <Icon className="icon" icon={plusSign} color="yellow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default FoodItem;
// codedrunz.com
