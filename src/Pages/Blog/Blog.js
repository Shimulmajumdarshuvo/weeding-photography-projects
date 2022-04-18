import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-info'>Question Part</h2>
            <div className='question-part'>
                <div >
                    <h4>Difference between authorization and authentication?</h4>
                    <h6>Authentication</h6>
                    <p>1.Authentication verifies who the user is <br />
                        2.Authentication works through passwords, one-time pins, biometric
                        information, and other information provided or entered by the user.
                        3.Authentication is visible to and partially changeable by the user.

                    </p>
                    <h6>Authentication</h6>
                    <p>
                        1.Authorization determines what resources a user can access. <br />
                        2.Authorization isn’t visible to or changeable by the user. <br />
                        3. Authorization works through settings that are implemented and maintained by the organization.</p>
                </div>

                <div>
                    <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p>
                        The Firebase Realtime Database lets you build rich,
                        collaborative applications by allowing secure access to
                        the database directly from client-side code. Data is persisted
                        locally, and even while offline, realtime events continue to
                        fire, giving the end user a responsive experience.
                        <ul>
                            <li>Parse</li>
                            <li> Back4app</li>
                            <li> Kinvey</li>
                            <li>Backendless</li>

                            <li>Pubnub</li>
                            <li>Kumulos</li>
                            <li>Game Sparks ect</li>
                        </ul>

                    </p>
                </div>
                <div>
                    <h4>What other services does firebase provide other than authentication ?</h4>
                    <p>There are many services which Firebase provides, Most useful of them are:
                        <ul>


                            <li> Cloud Firestore.</li>
                            <li>Cloud Functions. </li>
                            <li>Authentication</li>
                            <li>Hosting</li>
                            <li> Cloud Storage.</li>
                            <li>Google Analytics. </li>
                            <li>Predictions. </li>
                            <li>Cloud Messaging.</li>

                        </ul>

                    </p>
                </div>
            </div>


        </div >
    );
};

export default Blog;