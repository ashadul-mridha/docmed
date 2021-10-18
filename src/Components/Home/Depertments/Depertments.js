import React , { useEffect, useState }  from 'react';
import Depertment from '../Depertment/Depertment';

const Depertments = () => {


    const [depertments , setDepertments] = useState([]);

    useEffect( () => {
        fetch('/healthcare.json')
        .then( response => response.json())
        .then( data => {
            setDepertments(data);
        })
    },[])

    return (
        <div className="container my-5">
            <div className="d-flex flex-column align-items-center">
                
                <h1 className="text-primary">Our Departments</h1>
                <p>Esteem spirit temper too say adieus who direct esteem.
                It esteems luckily or picture placing drawing.</p>
                
            </div>
            <div className="depertment row g-5 mt-2">
                {depertments.map(depertment => <Depertment data={depertment} key={depertment.id}></Depertment> )}
            </div>
        </div>
    );
};

export default Depertments;