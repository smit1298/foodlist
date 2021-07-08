import React,{useEffect, useState} from 'react';
import axios from 'axios';
import FoodItem  from './FoodItem';

const FoodList = () => {

    // const [foodItem, setFoodItem] = useState([]);
    // useEffect(() => {
    //     axios.get('https://asm-dev-api.herokuapp.com/api/v1/food')
    //     .then(function (response) {
    //       setFoodItem(response.data.data);
    //     //   console.log(response.data.data);

    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     })
    // },[] )
   

    return (
        <div>
            {foodItem.map(item => (<FoodItem key={item.id} card={item}/>))}
        </div>
    )
}

export default FoodList
