import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-info'>Question Part</h2>
            <div className='question-part'>
                <div >
                    <h4>Difference between authorization and authentication?</h4>
                    <p>Simply put, authentication is the process of verifying
                        who someone is, whereas authorization is the process
                        of verifying what specific applications, files, and data
                        a user has access to. The situation is like that of an
                        airline that needs to determine which people can come on board.</p>
                </div>

                <div>
                    <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs,
                        and ready-made UI libraries to authenticate users to your app.
                        It supports authentication using passwords, phone numbers, popular
                        federated identity providers like Google, Facebook and Twitter, and more.</p>
                </div>
                <div>
                    <h4>What other services does firebase provide other than authentication</h4>
                    <p>There are many services which Firebase provides, Most useful of them are:
                        Cloud Firestore.
                        Cloud Functions.
                        Authentication.
                        Hosting.
                        Cloud Storage.
                        Google Analytics.
                        Predictions.
                        Cloud Messaging.</p>
                </div>
            </div>


        </div >
    );
};

export default Blog;