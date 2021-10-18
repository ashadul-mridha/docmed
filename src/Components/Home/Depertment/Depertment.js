import React from 'react';
import { Link } from 'react-router-dom';

const Depertment = (props) => {
    const {name , desc , img, id } = props.data;
    return (
        <div className="col-md-4 col-sm-6 col-xs-12 shadow-sm rounded">

            <img src={img} className="img-fluid" alt="" />
            <div className="details p-3">
                <h3>{name}</h3>
                <p className="text-secondary">{desc.slice(0,67)}</p>
                <Link to={`/appoinment/${id}`} className="text-info text-decoration-none fs-4" >Appoinment</Link>
            </div>

        </div>
    );
};

export default Depertment;