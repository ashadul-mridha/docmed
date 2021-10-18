import React from 'react';
import aboutImg from '../../../images/about.jpg';

const About = () => {
    return (
        <div>
            <h2>About</h2>
            <img src={aboutImg} className="img-fluid" alt="" />
        </div>
    );
};

export default About;