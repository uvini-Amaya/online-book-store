import React from 'react';
import { Image, Form, FormGroup, Button, Table, ModalFooter } from 'react-bootstrap';
import './App.css';
import jbookstorelogo from '../assets/images/jbookstorelogo.png'
import searchalt from '../assets/svgs/searchalt.svg'
import order from '../assets/svgs/order.svg'
import cart from '../assets/svgs/cart.svg'
import instagram from '../assets/svgs/instagram.svg'
import facebook from '../assets/svgs/facebook.svg'
import twitter from '../assets/svgs/twitter.svg'
import linkedin from '../assets/svgs/linkedin.svg'
import home from '../assets/svgs/home.svg'
import { Input } from '@mui/joy';
import BookHolder from './BookHolder';
import axios from 'axios';
import { useEffect, useState } from 'react';
import TestBooksHolder from './TestBooksHolder';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';





    const Addtocart = () =>{

        return(

    <>
      <div className='addtocart'>
        <div className='pagehead'>

          <Header/> 

        </div>

        <div className='addtocartbody'>

          

        </div>  


         <div className='pagefoot'>

          <Footer/>

        </div> 

          

      </div>
      
    </>

        );
    }
    export default Addtocart;

