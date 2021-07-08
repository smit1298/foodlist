import React from 'react';
import FoodItem  from './FoodItem';
import { axios } from 'axios';

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
