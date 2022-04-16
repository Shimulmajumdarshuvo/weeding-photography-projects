import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className='text-center mt-5 '>

                <p ><small><span>&copy;</span>
                    Developer Shimul . {new Date().getUTCFullYear()}</small></p>

            </footer>
        </div>
    );
};

export default Footer;