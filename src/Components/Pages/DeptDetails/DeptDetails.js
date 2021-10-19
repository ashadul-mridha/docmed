import React ,  { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DeptDetails = () => {
    
    const {deptId} = useParams();

    const [depertments , setDepertments] = useState([]);
    const [dept , setDept] = useState({});

    useEffect( () => {
        fetch('/healthcare.json')
        .then( response => response.json())
        .then( data => {
            setDepertments(data);
        })
    },[deptId]);
    //depertments pelei eta kaj korbe
    useEffect( () => {
        const findDept = depertments?.find( deptperment => deptperment.id == deptId);
        setDept(findDept)
    } ,[depertments]);

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <h1>{dept?.name?.toUpperCase()} Details</h1>
                </div>
            </div>
            <div className="row py-5 align-items-center">
                <div className="col-md-7">
                    <h1>{dept?.name}</h1>
                    <h3 className="text-danger">Cost : ${dept?.price}</h3>
                    <p>{dept?.desc}</p>
                    <button className="btn btn-danger"><i className="fas fa-procedures"></i> Appoinment</button>
                </div>
                <div className="col-md-5">
                    <img src={dept?.img} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default DeptDetails;