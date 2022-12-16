import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import {Routes,Route} from 'react-router-dom';
import Products from './Component/Products';
function App() {
  return (
   
    <> 
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home/>} />
      <Route exact path='/products' element={<Products/>} />

    </Routes>
    </>
  );
}

export default App;
