import React from 'react';
import './Appoinment.css';

const Appoinment = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-6 col-sm-12 emer-contact p-5">
                    <div className="row align-items-center">
                        <div className="col-7">
                            <h3 className="text-white">For Any Emergency Contact</h3>
                            <p className="text-white">If You Need Emergency Service Call this Num.</p>
                        </div>
                        <div className="col-5">
                            <button className="btn btn-outline-info"><i className="fas fa-phone"></i> 171863735347</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 emer-appoinment p-5">
                    <div className="row align-items-center">
                        <div className="col-7">
                            <h3 className="text-white">Make an Online Appointment</h3>
                            <p className="text-white">Make Online Appoinment We Will Response Soon.</p>
                        </div>
                        <div className="col-5">
                            <button className="btn btn-outline-info"><i className="fas fa-hospital-user"></i> Make An Appoinment </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;