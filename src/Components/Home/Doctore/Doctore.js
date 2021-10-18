import React from 'react';

const Doctore = (props) => {
    const { img , name , specilist } = props.data;
    return (
        <div className="col-md-3 col-sm-6 col-xs-1">
            <div className="d-flex flex-column align-items-center">
                <img src={img} className="img-fluid" alt="" />
                <h4 className="py-2">{name}</h4>
                <p>{specilist}</p>
            </div>
        </div>
    );
};

export default Doctore;