import React, {Fragment}  from 'react'
import FoodList from './Components/foodList/FoodList';
import Carousel from './Components/'
import NavHead from './Components/navbar/Navbar';


const App = () => {
  return (
    <Fragment>
       <div className="App">
      <NavHead />
      <Carousel />
      <FoodList />
    </div>
    </Fragment>
   
  );
}

export default App;
