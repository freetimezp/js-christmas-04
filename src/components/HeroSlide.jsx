import React from 'react';
import './HeroSlide.css';

const HeroSlide = ({ slide }) => {
    return (
        <>
            <img src={slide.bgImg} alt="bg" className='bgImg' />
            <div className="banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="content">
                                <h1>
                                    {slide.title}
                                </h1>
                                <p>
                                    {slide.subtitle}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSlide;
