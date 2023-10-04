
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styled from 'styled-components';

const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
`;

// const SwiperSlide = styled.div`
 
// `;

const SlideImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


export default function StrategicPartnersCarousel() {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperContainer> 
        <SwiperSlide><SlideImage src="path/to/image.jpg" alt="Slide Image" /></SwiperSlide>
        <SwiperSlide><SlideImage src="path/to/image.jpg" alt="Slide Image" /></SwiperSlide>
        <SwiperSlide><SlideImage src="path/to/image.jpg" alt="Slide Image" /></SwiperSlide>
        <SwiperSlide><SlideImage src="path/to/image.jpg" alt="Slide Image" /></SwiperSlide>
        <SwiperSlide><SlideImage src="path/to/image.jpg" alt="Slide Image" /></SwiperSlide>
        <SwiperSlide><SlideImage src="path/to/image.jpg" alt="Slide Image" /></SwiperSlide>
        <SwiperSlide><SlideImage src="path/to/image.jpg" alt="Slide Image" /></SwiperSlide>
        <SwiperSlide><SlideImage src="path/to/image.jpg" alt="Slide Image" /></SwiperSlide>
        <SwiperSlide><SlideImage src="path/to/image.jpg" alt="Slide Image" /></SwiperSlide></SwiperContainer>
       
      </Swiper>
  );
};




