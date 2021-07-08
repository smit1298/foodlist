import React,{useEffect, useState} from 'react';
import axios from 'axios';
import FoodItem  from './FoodItem';

const FoodList = () => {

    const [foodItem, setFoodItem] = useState([]);
    useEffect(() => {
        axios.get('https://asm-dev-api.herokuapp.com/api/v1/food')
        .then(function (response) {
          setFoodItem(response.data.data);
          console.log(foodItem);

        })
        .catch(function (error) {
          console.log(error);
        })
    },[] )
   

    return (
        <div>
        {foodItem[2].toString()}
        </div>
    )
}

export default FoodList
