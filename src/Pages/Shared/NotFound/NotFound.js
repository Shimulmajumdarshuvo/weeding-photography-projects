import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className='not-found'>

                <h1>404 ,, Not Found.</h1>
                <p>We looked everywhere for this page.
                    Are you sure the website <br /> URL is correct?
                    Get in touch with the site owner.</p>

                <img src={`https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400005/99776312-erreur-404-page-non-trouv%C3%A9e-erreur-avec-effet-glitch-%C3%A0-l-%C3%A9cran-vector-illustration-pour-votre-concep.jpg`} alt="" />

            </div>
            );
        </div>
    );
};

export default NotFound;