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
                            <p className="text-white">Esteem spirit temper too say adieus.</p>
                        </div>
                        <div className="col-5">
                            <button className="btn btn-outline-info">171863735347</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 emer-appoinment p-5">
                    <div className="row align-items-center">
                        <div className="col-7">
                            <h3 className="text-white">Make an Online Appointment</h3>
                            <p className="text-white">Esteem spirit temper too say adieus.</p>
                        </div>
                        <div className="col-5">
                            <button className="btn btn-outline-info">Make An Appoinment </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;