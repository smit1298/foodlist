import React,{useEffect} from 'react';
import axios from 'axios';
import FoodItem  from './FoodItem';

const FoodList = () => {
    useEffect(() => {
        axios.get('/user?ID=12345')
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }, )
    const id = {}
    const foodlist = id.map()

    return (
        <div>
        </div>
    )
}

export default FoodList
