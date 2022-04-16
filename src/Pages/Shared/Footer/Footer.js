import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className='footer'>

                <div><p ><small><span>&copy;</span>
                    Developer Shimul . {new Date().getUTCFullYear()}</small></p>
                </div>
                <div>
                    <h6>Fine Art, Light and Airy Wedding Photographer Scotland.
                        Wedding Photographer <br /> Edinburgh | Wedding Photographer
                        Glasgow | Wedding Photographer Bangladesh</h6>
                </div>

            </footer>
        </div>
    );
};

export default Footer;