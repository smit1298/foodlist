import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodItem from "./FoodItem";

const FoodList = () => {
  // const foodItem =[ {
  //     "id": "52928",
  //     "strMeal": "BeaverTails",
  //     "strMealThumb": "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg",
  //     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus, tellus eget tempor vulputate, dolor orci congue nisi, nec finibus augue nisl eget velit. Vivamus quis nisi mollis nunc ullamcorper tristique. Nulla lectus massa, semper id felis at, sodales vulputate ante. Etiam et auctor risus. Nulla sed vestibulum dui. Praesent vestibulum placerat felis, et lobortis dolor fermentum ut. Etiam lacus purus, placerat non tempus eget, fringilla vel enim. Ut porttitor tincidunt volutpat. Aenean quis elit eget enim porta vehicula. Sed maximus at mi ut molestie. Pellentesque maximus tristique nunc nec maximus. Aliquam sed pretium augue. Nunc ac malesuada dui. In ac leo condimentum, maximus leo id, cursus quam.",
  //     "title": "BeaverTails",
  //     "price": "$12",
  //     "ratings": 4
  // }]

  const [foodItem, setFoodItem] = useState([]);

  useEffect(() => {
    axios
      .get("https://asm-dev-api.herokuapp.com/api/v1/food")
      .then(function (response) {
        setFoodItem(response.data.data.meals);
        console.log(response.data.data.meals);
        //   console.log(response.data.data);
        // foodItem.push(response.data.data.meals[0])
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {foodItem.map((item, index) =>
          index <  ? <FoodItem key={item.id} card={item} /> : ""
        )}
      </div>
      
    </div>
  );
};

export default FoodList;
