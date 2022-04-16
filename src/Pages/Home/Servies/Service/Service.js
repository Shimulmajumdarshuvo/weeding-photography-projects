import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();

    const navigateToHandleDetails = id => {
        navigate(`/services/${id}`)
    }
    return (
        <div id="services" className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:${price}</p>
            <p><small>{description}</small></p>

            <Button onClick={() => navigateToHandleDetails(id)}>Wedding party</Button>


        </div>
    );
};

export default Service;