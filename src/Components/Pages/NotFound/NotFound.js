import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../../images/404page.jpg';

const NotFound = () => {
    return (
        <div >
            <div className="row justify-content-center mb-5">
                <div className="col-md-5 col-12 d-flex flex-column align-items-center">
                    <img src={notFoundImg} className="img-fluid"  alt="" />
                    <Link to="/home"> <button className="btn btn-primary">Go Back</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;