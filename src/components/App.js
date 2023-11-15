import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import BookPreview from './BookPreview';
import Addtocart from './AddToCart';
import BookRack from './BookRack';
import ContactUs from './ContactUs';
import Navbar from './Navbar';
import GridHead from './GridHead';

const App = () => {
  return (
  
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/addToCart' element={<Addtocart/>}></Route>
            <Route path='/bookPreview' element={<BookPreview/>}></Route>
            <Route path='/GridHead' element={<GridHead/>}></Route>
            <Route path='/bookRack' element={<BookRack/>}></Route>
            <Route path='/contact' element={<ContactUs/>}></Route>
            <Route path='/navbar' element={<Navbar/>}></Route>
           </Routes> 
        </BrowserRouter>
      </div>
  );
}

export default App;
