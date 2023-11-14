import React from "react";
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';


const Footer = () => {


    return (

        <>
        <footer className='footer'>
                <div className="full
                ">
                
                  <div className='footer1In'>
                    <ul>
                        <h4 className='fli1'>Categories</h4>
                        <li className='fli'><a href='#'className='footerlink'>romance</a></li>
                        <li className='fli'><a href='#'className='footerlink'>horror</a></li>
                        <li className='fli'><a href='#'className='footerlink'>mystery</a></li>
                        <li className='fli'><a href='#'className='footerlink'>science fiction</a></li>
                        <li className='fli'><a href='#'className='footerlink'>eduation</a></li>
                      </ul>
                  </div>
                    
                  <div className='footer2In'>
                    <ul>
                        <h4 className='fli1'>quick links</h4>
                        <li className='fli'><a href='#'className='footerlink'>home</a></li>
                        <li className='fli'><a href='#'className='footerlink'>shopping cart</a></li>
                        <li className='fli'><a href='#'className='footerlink'>checkouts</a></li>
                      </ul>
                  </div>   
                    
                  <div className='footer3In'>
                    <ul>
                      <h4 className='fli1'>info</h4>
                      <li className='fli'><a href='#'className='footerlink'>online delivery and returning</a></li>
                      <li className='fli'><a href='#'className='footerlink'>privacy and cookies policy</a></li>
                      <li className='fli'><a href='#'className='footerlink'>payment policy</a></li>
                      <li className='fli'><a href='#'className='footerlink'>Voucers and Discounts</a></li>
                    </ul>
                  </div>
                    
                  <div className='footer4In'> 
                      <ul>
                        <h4 className='fli1'>contact details</h4>
                        <li className='fli'><a href='#'className='footerlink'>Wadduwa</a></li>
                        <li className='fli'><a href='#'className='footerlink'>+94701234567</a></li>
                        <li className='fli'><a href='#'className='footerlink'>book_nook.lk@gmail.com</a></li>
                      </ul>
                  </div>
                  
                </div>
                  

                <div className='footerIn'>

                      <h4 className='follow'>visit and have a touch on us with</h4>
                      
                    <div>
                      <LanguageIcon/>
                      <FacebookIcon/>
                      <InstagramIcon/>
                      <WhatsAppIcon/>
                    </div>

                    
                  </div>

                    <div>
                      <p className='coppyRights'>©Coppyright - 2023 JBOOKSHOP</p>
                    </div>
               
              </footer>
        </>
    );
}

export default Footer;