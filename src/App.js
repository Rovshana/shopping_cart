
import { Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Cart from './components/Cart';
import { Navbar } from './components/Navbar';
import { NotFound } from "./components/NotFound";
 import 'bootstrap/dist/css/bootstrap.min.css'
 import {ToastContainer} from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
function App() { 
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/cart'  element={<Cart/>}/>
        <Route path='/*'  element={<NotFound/>}/>
      </Routes>

      
    </div>
  );
}

export default App;
