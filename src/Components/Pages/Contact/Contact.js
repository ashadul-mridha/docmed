import React from 'react';
import { Col, Container, Row , Button } from 'react-bootstrap';
import contactImg from '../../../images/contact.jpg';

const Contact = () => {
    return (
        <div className="contact-us">
            <Container>
                <Row className="py-5 d-flex align-items-center">
                    <Col xs={12} md={6}>
                        <h2 className="fw-bold">Drop us a line </h2>
                        <input type="text" placeholder="Full Name" className="border-bottom border-secondary border-2 border-top-0 border-end-0 border-start-0 w-75 mt-4" />

                        <input type="email" placeholder="Email Address" className="border-bottom border-secondary border-2 border-top-0 border-end-0 border-start-0 w-75 mt-4" />

                        <input type="text" placeholder="Company" className="border-bottom border-secondary border-2 border-top-0 border-end-0 border-start-0 w-75 mt-4" />

                        <textarea type="text" placeholder="Message" className="border-bottom border-secondary border-2 border-top-0 border-end-0 border-start-0 w-75 mt-4 pt-5">

                        </textarea>
                        <br />
                        <Button variant="primary">Submit</Button>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src={contactImg} width="100%" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;