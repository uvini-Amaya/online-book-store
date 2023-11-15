
import { Image, Form, FormGroup, Button, Table, ModalFooter, Carousel } from 'react-bootstrap';
import './App.css';
import { Input } from '@mui/joy';
import BookHolder from './BookHolder';
import axios from 'axios';
import { useEffect, useState } from 'react';
import GridHead from './GridHead';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'
import Navbar from './Navbar';
import GridHead from './GridHead';
import BookRack from './BookRack';



const Home = () =>{

    return(
      <>
      <div className='homepage'>
        <div className='pagehead'>

          <Navbar/> 

        </div>

        <div className='pagebody'>
          
              <Body/>
              <GridHead/>
              <BookRack/>

        </div>  


         <div className='pagefoot'>

          <Footer/>

        </div> 

          

      </div>
      
      </>
    
      
      
             

    );
};
export default Homepage;