import React from 'react';
import { axios } from 'axios';
import FoodItem  from './FoodItem';

const FoodList = () => {
    const axios = require('axios');

axios.get('https://asm-dev-api.herokuapp.com/api/v1/food').then(resp => {

    console.log(resp.data);
});

    return (
        <div>
        </div>
    )
}

export default FoodList
