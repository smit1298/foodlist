import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import sharpStarRate from "@iconify-icons/ic/sharp-star-rate";
import plusSign from "@iconify-icons/el/plus-sign";
import Logo from "../Assets/Img/logo192.png";
import "./FoodItem.css";
import "bootstrap/dist/css/bootstrap.min.css";

const FoodItem = ({card}) => {
  return(
    <div className="container">
       <div className="row">
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
                <h4 className="card-title float-left">{card.strMeal}</h4>
                <h4 className="price float-right">{card.price}</h4>
              </span>
              <p className="card-subtitle float-left mt-4 pt-2">
                {card.title}
              </p>
            </div>

            <div className="card-text">{card.description}</div>

            <div className="container d-flex align-items-center justify-content-between">
              <Icon icon={sharpStarRate} />
              <div className="plus">
                <Icon className="icon" icon={plusSign} color="yellow" />
              </div>
            </div>
          </div>
        </div>
      </div>
       </div>
    </div>
  )
  // const cuisine = [
  //   {
  //     "id": "52928",
  //     "strMeal": "BeaverTails",
  //     "strMealThumb": "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg",
  //     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus, tellus eget tempor vulputate, dolor orci congue nisi, nec finibus augue nisl eget velit. Vivamus quis nisi mollis nunc ullamcorper tristique. Nulla lectus massa, semper id felis at, sodales vulputate ante. Etiam et auctor risus. Nulla sed vestibulum dui. Praesent vestibulum placerat felis, et lobortis dolor fermentum ut. Etiam lacus purus, placerat non tempus eget, fringilla vel enim. Ut porttitor tincidunt volutpat. Aenean quis elit eget enim porta vehicula. Sed maximus at mi ut molestie. Pellentesque maximus tristique nunc nec maximus. Aliquam sed pretium augue. Nunc ac malesuada dui. In ac leo condimentum, maximus leo id, cursus quam.",
  //     "title": "BeaverTails",
  //     "price": "$12",
  //     "ratings": 4
  // }
  // ];

  const cardRender = (card) => {
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
                <h4 className="card-title float-left">{card.strMeal}</h4>
                <h4 className="price float-right">{card.price}</h4>
              </span>
              <p className="card-subtitle float-left mt-4 pt-2">
                {card.title}
              </p>
            </div>

            <div className="card-text">{card.description}</div>

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

  return (
    <div className="container">
      <div className="row">{cuisine.map(cardRender)}</div>
    </div>
  );
};

export default FoodItem;
// codedrunz.com
