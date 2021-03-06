import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('wedding.json')
            .then(res => res.json())
            .then(data => setServices(data));

    }, []);


    return (
        <div className='container'>
            <div className='services-title'>
                <h1>Our Services part</h1>
            </div>

            <div className='services-container'>

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}

                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;