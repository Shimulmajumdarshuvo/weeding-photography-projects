import React from 'react';

import img from '../../images/Profile2.png';
import './About.css'

const About = () => {
    return (
        <div className=' main-part'>
            <div className='personal'>
                <div className='photo'>
                    <img src={img} alt="" />
                    <h4>Shimul Majumdar Shuvo</h4>
                </div>
                <div className='about-section'>
                    <h4>About Me</h4>
                    <p>I am a student of Computer Science and Engineering (CSE) at <br />
                        North Western University ,Khulna</p>
                    <h4>Goal</h4>
                    <p><span>I want to be a professional Web Developer. </span></p>
                </div>
            </div>
        </div>
    );
};

export default About;