import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    return (
        <>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={'https://i.ibb.co/hFNpB0W/xbanner-png-pagespeed-ic-Q0zx-Ze-YU3-F.png'}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h2>Health Care For <br /> <span className="text-danger">Hole Family</span> </h2>
                    <p>In healthcare sector, service excellence is the facility of <br /> the hospital as healthcare service provider to consistently.</p>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={'https://i.ibb.co/pxCqMhT/xbanner2-png-pagespeed-ic-B9c-M6-Ibkd.png'}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h2>Health Care For <br /> <span className="text-danger">Hole Family</span> </h2>
                    <p>In healthcare sector, service excellence is the facility of <br /> the hospital as healthcare service provider to consistently.</p>
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Slider;