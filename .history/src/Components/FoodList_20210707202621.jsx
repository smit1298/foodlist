import React from 'react';
import FoodItem  from './FoodItem';
import { axios } from 'axios';

const FoodList = () => {
    const axios = require('axios');

axios.get('http://webcode.me').then(resp => {

    console.log(resp.data);
});

    return (
        <div>
        </div>
    )
}

export default FoodList