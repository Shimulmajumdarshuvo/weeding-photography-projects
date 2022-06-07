import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>

            <CardGroup >
                <Card className='footer'>

                    <Card.Body>

                        <Card.Text>
                            <h5>Information</h5>
                            <p>About Us</p>
                            <p>More Search</p>
                            <p>Blog</p>
                            <p>Security</p>
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card className='footer'>

                    <Card.Body>

                        <h5>Our Services</h5>
                        <p>Services</p>
                        <p>Support</p>
                        <p>Terms and Condition</p>
                        <p>Privacy</p>
                    </Card.Body>

                </Card>
                <Card className='footer'>

                    <Card.Body >

                        <h5>Contact </h5>
                        <p>shimulmajumdar906@gmail.com</p>
                        <p>01303461237</p>
                    </Card.Body>

                </Card>
                <Card className='footer'>

                    <Card.Body >

                        <Card.Text>
                            <h6>Fine Art, Light and Airy Wedding Photographer Scotland.
                                Wedding Photographer <br /> Edinburgh | Wedding Photographer
                                Glasgow | Wedding Photographer Bangladesh</h6>
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardGroup>

            <div className='text-center'><p >Copy Right<small><span>&copy;</span>
                Developer Shimul Majumdar. {new Date().getUTCFullYear()}</small></p>
            </div>


        </div>
    );
};

export default Footer;