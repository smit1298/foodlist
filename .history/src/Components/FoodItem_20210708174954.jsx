import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import sharpStarRate from "@iconify-icons/ic/sharp-star-rate";
import { Icon, InlineIcon } from '@iconify/react';
import plusSquareFill from '@iconify-icons/bi/plus-square-fill';
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

          <div className="card-text h-20" style={{overflow:'hidden',height:'5em',textOverflow:'ellipsis'}}>{card.description}</div>

          <div className="container d-flex align-items-center justify-content-between">
            <Icon icon={sharpStarRate} />
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