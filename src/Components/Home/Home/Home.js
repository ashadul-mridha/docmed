import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import Depertments from '../Depertments/Depertments';
import Doctores from '../Doctores/Doctores';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Depertments></Depertments>
            <Doctores></Doctores>
            <Appoinment></Appoinment>
        </div>
    );
};

export default Home;