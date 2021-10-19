import React from 'react';
import './Footer.css';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="p-5" style={{backgroundColor : '#424040'}}>
            <div className="row">
                <div className="col-md-5 col-sm-12 align-self-center mb-2">
                    <img src={'https://i.ibb.co/TKkZsvQ/download.webp'} alt="" />
                    <p className="text-white fs-5 py-3">Health Care For Hole Family</p>
                    <div>
                        <Link className="p-2  text-white me-2" to={'fb.com'}><i className="fab fa-facebook-f fa-2x"></i></Link>
                        <Link className="p-2  text-white me-2" to={'fb.com'}><i className="fab fa-instagram fa-2x"></i></Link>
                        <Link className="p-2  text-white me-2" to={'fb.com'}><i className="fab fa-linkedin-in fa-2x"></i></Link>
                    </div>
                </div>
                <div className="col-md-2 col-sm-6 mt-2">
                    <h3 className="text-primary">Depertments</h3>
                    <ul className="list-unstyled ">
                        <li className="fs-5 py-2"> <NavLink className="text-decoration-none text-white" to="/">Eye Care</NavLink> </li>
                        <li className="fs-5 text-white py-2">Skin Care</li>
                        <li className="fs-5 text-white py-2">Pathology</li>
                        <li className="fs-5 text-white py-2">Medicine</li>
                        <li className="fs-5 text-white py-2">Dental</li>
                    </ul>
                </div>
                <div className="col-md-2 col-sm-6 mt-2">
                    <h3 className="text-primary">UseFul Links</h3>
                    <ul className="list-unstyled">
                        <li className="fs-5 text-white py-2">About </li>
                        <li className="fs-5 text-white py-2">Contact</li>
                        <li className="fs-5 text-white py-2">Services</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-12 mt-2">
                    <h3 className="text-primary">Address</h3>
                    <p  className="text-white fs-6 pt-2" >200, D-block, Green lane USA <br />
                        d+10 367 467 8934 <br />
                        ocmed@contact.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;