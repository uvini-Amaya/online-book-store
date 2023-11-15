import React, { useState } from "react";
import './App.css';
import './Components.css';
import { Image, Form, FormGroup, Button, Table, ModalFooter } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import { Input } from '@mui/joy';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import ContactUs from './ContactUs';
import Login from './Login.js';
import checkout from '../assets/images/checkout.png';
import cart from '../assets/images/cart.png';
import SearchIcon from '@mui/icons-material/Search';
import Button from 'react-bootstrap';

const Navbar = () => {

  const [menu, setMenu] = useState(false);

  const [search, setSearch] = useState(false);

  const handleSearch = () =>{

    if(search===true){
      setSearch(false);
    }else{
      setSearch(true);
    }
  }

    return(

        <>
   
            <div className={menu? 'nav-bar-close.open':'nav-bar-open'} onClick={()=>{menu(!menu)}}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className={menu ? 'nav-bar-close':''} onClick={()=>{setMenu(!menu)}}>
              <span className="span1"></span>
              <span className="span2"></span>
            </div>

            <header className='Homepage-header'>
              <div className='head'>
                <Link to='/'><img src={logo} className='Homepage-logo' alt='logo'></img></Link>
                <h2 className="shopname">BOOK NOOK</h2>

                <div className='home-button'>
                        <Link to={'/'}><button className='homebutton-in'><Image className='home-icon' src={home} alt=''/></button></Link>
                </div>
               </div>

                  <Form className='components'>

                        <div className="flex">
                            <Link to={'/Checkuout'}><Image  src={checkout} alt="checkout"></Image></Link>
                            <Link to={'/Addtocart'}><Image  src={cart} alt="cart"></Image></Link>
                            <SearchIcon onClick={handleSearch}/> 
                        </div>
                      
                      
                        <div className={ search ? 'searchbar isopen' : 'msearchbar'}>
                            <input type="search"></input>
                        </div>
                      
                        <div className='flex'> 

                        <Button Link to={'/contact'}><ContactUs/></Button>   
                         
                        <Button Link to={'/login'}><Login/></Button>  
                        </div>

                  </Form>


             
              <div className='categorybar'>
                
                  <ul className={menu ? 'categorybar ul isopen' : ''}>
                    <li className="flex-fill"><a href='#'><span>fantasy</span></a></li>
                    <li className="flex-fill"><a href='#'><span>horror</span></a></li>
                    <li className="flex-fill"><a href='#'><span>mystery</span></a></li>
                    <li className="flex-fill"><a href='#'><span>romance</span></a></li>
                    <li className="flex-fill"><a href='#'><span>science fiction</span></a></li>
                  </ul>
                

              </div>
              
            </header>
        
        
        </>
    );
}
export default Navbar;