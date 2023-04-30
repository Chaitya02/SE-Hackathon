import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <>
            <div className='container-fluid'>
                <div className='footer'>
                    <i className="social-icon fa-brands fa-twitter"></i>
                    <i className="social-icon fa-brands fa-facebook"></i>
                    <i className="social-icon fa-brands fa-square-instagram"></i>
                    <i className="social-icon fa-solid fa-envelope"></i><br/>
                    <Link className="l" to="/">Contact Us</Link>
                    <Link className="l" to="/">About Us</Link>
                    <Link className="l" to="/">Join Us</Link>
                    <p>© Copyright BlackHats</p>
                </div>
            </div>
        </>
    );
}

export default Footer;