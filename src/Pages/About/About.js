import React from 'react';

import img from '../../images/Profile2.png';
import './About.css'

const About = () => {
    return (
        <div className=' container main-part'>
            <div className='personal'>
                <div className='photo'>
                    <img src={img} alt="" />
                    <h4>Shimul Majumdar Shuvo</h4>
                </div>
                <div className='about-section'>
                    <h4>About Me</h4>
                    <p>Currently studying 4th year's student at North Western
                        University ,Khulna and also I am a student of 5th batch
                        in web.programming-hero.com</p>
                    <h4>Goal</h4>
                    <p><span>I want to be a professional Web Developer.
                        I am always trying my best hard work and dedicated
                        in this field at Web Development. My honorable teacher
                        Jhanker Mahabub is the best teacer in my life.Her
                        teaching process is very greatest and helpfull.
                        This time I will reach the goal of success with
                        hard work. Over the next four months I will prepare
                        myself to be a good web developer. My passion was
                        to develop my skills and reach a good position.
                        I will work hard to fulfill my desire. </span></p>
                </div>
            </div>
        </div>
    );
};

export default About;