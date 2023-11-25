import React from 'react';
import './Aboutme.css';

function AboutMe() {
    const commonStyle = {
        textAlign: 'justify',
        textJustify: 'inter-word',
        tabSize: 4,
        whiteSpace: 'pre-line',
    };

    return (
        <div id="about">
            {/* Section 1 */}
            <div className="container-fluid bg-transparent d-flex align-items-center" id="ban1">
                <div className="bg-transparent container">
                    <p className="bg-transparent text-light">I'm </p>
                    <p className="bg-transparent text-light h2" id="int">Sanjai Gandhi</p>
                    <hr className="border-3 border-light w-25" />
                    <p
                        className="bg-transparent text-light" id="intr"
                        style={{ ...commonStyle }}
                    >I am pursuing my bachelor's degree in Information Technology and working on React and Node-based projects. Additionally, I have been involved in blockchain-based projects that emphasize web technology.</p>
                </div>
            </div>

            {/* Section 2 */}
            <div className="container-fluid bg-transparent d-flex justify-content-right" id="ban2">
                <div className="container bg-transparent d-flex justify-content-end align-items-center">
                    <div className="d-block bg-transparent" id="intr6">
                        <h1 className="bg-transparent">Career Objective</h1>
                        <hr className="border-3 border-dark w-100" />
                        <p className="bg-transparent" style={{ ...commonStyle }} >To Seek an Entry Level Position to Begin My Career as a Fresher in a High level Professional Environment to Enhance My Skills and Work for the Organisational Objective.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-transparent d-flex align-items-center" id="ban3">
                <div className="container bg-transparent">
                    <div className="d-block bg-transparent" id="intr7">
                        <h1 className="bg-transparent text-light">Principle of Mine</h1>
                        <hr className="border-3 border-light w-100" />
                        <p className="bg-transparent text-light " style={{ ...commonStyle }}>The essence of life is boundless learning; strive to acquire wisdom until your last breath, for in the pursuit of knowledge lies the true purpose of existence."</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
