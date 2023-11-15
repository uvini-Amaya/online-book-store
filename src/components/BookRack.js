import React, {useEffect, useState } from "react";
import './App.css';
import './BookHolder.css';
import cart from '../assets/images/cart.png'
import { FormGroup, Form, Button , Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const BookRack = ({book}) => {

    const [isAvailable, setIsAvailable] = useState(false);

    const handleMouseIn = () => {
        isAvailable(true);
    };
    
    const handleMouseOut =() =>{
        setIsAvailable(false);
    };


    return(
        <>
        
        <div className="content">
            <FormGroup className="holder">
                <div className="formset">
                    <div className="inner-div">
                        <Form onMouseIn={handleMouseIn} handleMouseOut={handleMouseOut} className='form'>
                            <Image className="holder-image" src={`data:image/png;base64,${book.image}`} alt="image" onError={() =>console.log("error")}></Image>
                            <div className="inner-button">
                                {<Link to={'/Addtocart'} > <Button className="inner-cart"><Image className="inner-carticon" src={cart} alt=""></Image></Button></Link>}
                            </div>
                        </Form>
                    </div>
                        <div className="text">
                            <div>

                                <h6>{book.title}</h6>
                                <h6>{book.auhtor.authorName}</h6>
                                <h6>Rs:{book.price}.00</h6>
                                <h6>{book.description}</h6>
                                <h6>{book.category.name}</h6>
                                <h6>{book.subcategory.name}</h6>
                                <h6>{book.subcategory_id}</h6>
                            </div>
                            
                        </div>
                </div>
            </FormGroup>
                            
        </div>

        
        </>

       
        
        
    
    )
}

export default BookRack;






