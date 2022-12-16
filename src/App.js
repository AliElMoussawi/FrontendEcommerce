import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import {Routes,Route} from 'react-router-dom';
import Products from './Component/Products';
import Product from './Component/Product';
import Cart from './Component/Cart';
import Login from './Component/Login';
import Checkout from './Component/Checkout';

function App() {
  return (
   
    <> 
  
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home/>} />
      <Route exact path='/products' element={<Products/>} />
      <Route exact path='/products/:id' element={<Product/>} />
      <Route exact path='/cart' element={<Cart/>} />
      <Route exact path='/checkout' element={<Checkout/>} />

    </Routes>
    </>
  );
}

export default App;
