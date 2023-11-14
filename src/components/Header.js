import React, { useState } from "react";
import './App.css'
import { Image, Form, FormGroup, Button, Table, ModalFooter } from 'react-bootstrap';
import jbookstorelogo from '../assets/images/jbookstorelogo.png'
import searchalt from '../assets/svgs/searchalt.svg'
import order from '../assets/svgs/order.svg'
import cart from '../assets/svgs/cart.svg'
import home from '../assets/svgs/home.svg'
import search720 from '../assets/svgs/search720.svg'
import search7201 from '../assets/svgs/search7201.svg'
import check720 from '../assets/svgs/check720.svg'
import cart720 from '../assets/svgs/cart720.svg'
import { Input } from '@mui/joy';
import { Link, NavLink, Route, Routes } from 'react-router-dom';




const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const [openSearch, setOpenSearch] = useState(false);

  const handleSearch = () =>{

    if(openSearch===true){
      setOpenSearch(false);
    }else{
      setOpenSearch(true);
    }
  }




    return(

        <>
        {/* top of haeder */}

            <div className='Top-Line'>

                <div className='phone'>
                  <p className='topline-text'>Call Us for Web Orders :</p>
                  <a href='#' className='link'> +94342048778657</a>
                </div>

                <div className='email'>
                  <p className='topline-text'>Email :</p>
                  <a href='#' className='link'>bookstore@gmail.com</a>
                </div>

                <div className='login'>
                  <a href='#' className='link'>Login/Register</a>
                </div>



            </div>

            {/* header */}


            <div className={openMenu? 'nav-bar-close.open':'nav-bar-open'} onClick={()=>{setOpenMenu(!openMenu)}}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className={openMenu ? 'nav-bar-close':''} onClick={()=>{setOpenMenu(!openMenu)}}>
              <span className="span1"></span>
              <span className="span2"></span>
            </div>

            <header className='Homepage-header'>
              <div className='head'>
                <Link to='/'><img src={jbookstorelogo} className='Homepage-logo' alt='logo'></img></Link>
                <h2 className="shopname">JBOOKSHOP</h2>




                      <div className='home-button'>
                        <Link to={'/'}><button className='homebutton-in'><Image className='home-icon' src={home} alt=''/></button></Link>
                      </div>
                  <Form className='Searchbar'>

                        <div className="mcheck-cart">
                            <Link to={'/Checkuout'}><Image className='mcheck' src={check720} alt="check"></Image></Link>
                            <Link to={'/Addtocart'}><Image className="mcart" src={cart720} alt="cart"></Image></Link>
                            <Image onClick={handleSearch} className="msearchicon" src={search7201} alt="search"></Image>
                        </div>
                      
                      
                        <div className={ openSearch ? 'msearchbar isopen' : 'msearchbar'}>
                            <input className="minput" type="search"></input>
                            <button className="msearch"><Image src={search720} alt=""></Image></button>
                        </div>
                      
                        
                        
                        
                      
                      

                    <div className="searchcom">
                      <Input className='Search-input' type='search' placeholder='Search' />
                      <Button className='Search-button'><Image className='Search-icon' src={searchalt} alt='search'></Image></Button>
                    </div>
                    

                    <div className='check-cart'>

                      <Link to={'/Checkout'}><Button className='check'><Image className='list-icon' src={order} alt='order'></Image></Button></Link>
                      <Link to={'/Addtocart'}><Button className='cart'><Image className='cart-icon' src={cart} alt='cart'></Image></Button></Link>

                    </div>

                  </Form>


              </div>
              <div className='categorybar'>
                
                  <ul className={openMenu ? 'categorybar ul isopen' : ''}>
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
export default Header;