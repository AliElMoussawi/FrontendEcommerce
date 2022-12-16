import React from 'react';
import Products from './Products';
const Home =()=> {

return (
    <div className="hero">
<div className="card bg-dark text-white border-0">
  <img src="public/assets/ecommerce.jpg" className="card-img" alt="Background" height="550px" />
  <div className="card-img-overlay">
    <div className="container"> <h5 className="card-title display-3 fw-bolder mb-0"t>New Products</h5>
    <p className="card-text">CHECK OUT ALL OUR NEW PRODUCTS </p>
    </div>
     </div>
    </div>
    <Products/>
</div>
 );
};
export default Home;