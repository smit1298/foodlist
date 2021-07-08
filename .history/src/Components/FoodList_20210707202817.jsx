import React from 'react';
import { Axios } from 'axios';
import FoodItem  from './FoodItem';

const FoodList = () => {
    const axios = require('axios');

Axios.get('https://asm-dev-api.herokuapp.com/api/v1/food').then(resp => {

    console.log(resp.data);
});

    return (
        <div>
        </div>
    )
}

export default FoodList
