import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import Image from "next/image";

import { Slide } from "./ImgData"; // Import the Slide type from imgData

interface SliderProps {
    slides: Slide[]; // Define the correct prop type here
  }
  
  export default function Slider({ slides }: SliderProps) {
    return (
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image src={slide.image} alt={slide.title} width={slide.width} height={slide.height} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  