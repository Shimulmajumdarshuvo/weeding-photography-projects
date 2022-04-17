import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();


    return (
        <div id="services" className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:${price}</p>
            <p><small>{description}</small></p>

            <div>
                <Link to='/checkout'>
                    <button className='btn'>Check Out</button>

                </Link>
            </div>




        </div>
    );
};

export default Service;