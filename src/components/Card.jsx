import React from 'react';
import './Card.css';

const Card = ({ slide }) => {
    return (
        <div className='card'>
            <div className="imgBox">
                <img src={slide.bgImg} alt="bg" />
                <h1>
                    0{slide._id}
                </h1>
            </div>
            <div className="details">
                <h2>
                    Xmas Card
                </h2>
                <p>
                    {slide.description}
                </p>
            </div>
        </div>
    );
};

export default Card;
