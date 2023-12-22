import React, { useContext } from 'react';
import './Hero.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

import { AppContext } from '../App';
import HeroSlide from './HeroSlide';
import Sci from './Sci';

function Hero() {
    const { data: slides } = useContext(AppContext);
    //console.log(data);

    return (
        <>
            <Swiper
                spaceBetween={10}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                loop={true}
                className='mySwiper'
            >
                {slides && slides.length > 0 && slides.map((slide) => {
                    return (
                        <SwiperSlide key={slide._id}>
                            <HeroSlide slide={slide} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <Sci />
        </>
    );
};

export default Hero;
