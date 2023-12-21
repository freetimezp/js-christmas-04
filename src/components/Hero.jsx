import React, { useContext } from 'react';
import './Hero.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

import { AppContext } from '../App';

function Hero() {
    const { data } = useContext(AppContext);
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
                <SwiperSlide>

                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Hero;
