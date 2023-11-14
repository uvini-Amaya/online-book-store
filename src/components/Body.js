import React from "react";
import BookHolder from "./BookHolder";
import TestBooksHolder from "./TestBooksHolder";
import axios from 'axios';
import { useEffect, useState} from 'react';
import './App.css';
import './Body.css';
import Carousel from "./Carousel";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Body = () => {

    return(

        <>
        <body className='center'>
            <div className='body-container'>

              <div className='bcontainer'>              
              <Carousel/>
              </div>

            </div>
          </body>
        
        </>
    );
}

export default Body;