import React,{useEffect} from 'react';
import axios from 'axios';
import FoodItem  from './FoodItem';

const FoodList = () => {
    useEffect(() => {
        axios.get('https://asm-dev-api.herokuapp.com/api/v1/food')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {s
          console.log(error);
        })
    }, )
    const id = {}
    const foodlist = id.map()

    return (
        <div>
        </div>
    )
}

export default FoodList