import React {Fragment}  from 'react'
import FoodList from './Components/foodList/FoodList';
import Navbar from './Components/navbar/Navbar';


const App = () => {
  return (
    <Fragment>
       <div className="App">
      <Navbar />
      <FoodList />
    </div>
    </Fragment>
   
  );
}

export default App;
