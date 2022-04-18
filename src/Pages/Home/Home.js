import React from 'react';
import Review from '../Review/Review';
import Banner from './Banner/Banner';
import Services from './Servies/Services';



const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Services></Services>
            <Review></Review>

        </div>
    );
};

export default Home;