import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Header.scss';

// import required modules
import { Autoplay, Pagination, Navigation ,EffectFade} from 'swiper/modules'


function Header() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
  return (
    <div>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 3500,
            
            disableOnInteraction: false,
            }}
            
            pagination={{
            clickable: true,
            }}
            effect={'fade'}
            navigation={true}
            modules={[EffectFade,Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
        >
            <SwiperSlide><img src={"https://images4.alphacoders.com/640/640956.jpg"} alt="" /></SwiperSlide>
            <SwiperSlide><img src={"https://wallpapers.com/images/hd/4k-anime-black-rock-shooter-pxfsljoqu6ac91yq.jpg"} alt="" /></SwiperSlide>
            <SwiperSlide><img src={"https://cdn.wallpapersafari.com/90/67/qDUmWO.jpg"} alt="" /></SwiperSlide>
            <SwiperSlide><img src={"https://images.hdqwalls.com/download/kimetsu-no-yaiba-anime-4k-yn-1920x1080.jpg"} alt="" /></SwiperSlide>
            <SwiperSlide><img src={"https://images3.alphacoders.com/132/1322308.jpeg"} alt="" /></SwiperSlide>
            <SwiperSlide><img src={"https://i.pinimg.com/736x/e4/cf/7f/e4cf7f8b235457124b06e890961f9945.jpg"} alt="" /></SwiperSlide>
        
            <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
            </div>
      </Swiper>

    </div>
  )
}

export default Header