// // import React from "react";
// // import styled from "styled-components";

// // import Image from "next/image";

// // import Carousel from "react-multi-carousel";
// // import "react-multi-carousel/lib/styles.css";

// // import { Slide } from "./ImgData"; // Import the Slide type from imgData

// // const StyledSlider = styled.div`
// //   backdrop-filter: blur(16px) saturate(180%);
// //   -webkit-backdrop-filter: blur(16px) saturate(180%);
// //   background-color: rgba(255, 255, 255);
// //   border-radius: 12px;
// //   border: 1px solid rgba(255, 255, 255, 0.125);
// //   filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   justify-content: center;
// //   text-align: center;
// //   width: 100%;
// //   height: 700px;
// // `;

// // const StyledWrapper = styled.section`
// //   padding: 3rem;
// //   font-family: "Lexend Deca Light";
// // `;

// // const StyledBannerImage = styled.div`
// //   height: auto;
// //   width: 100%;
// //   border-radius: 12px;
// //   border: 1px solid rgba(255, 255, 255, 0.255);
// //   overflow: hidden;
// //   z-index: 999;
// // `;

// // const StyledH1 = styled.h1`
// //   color: rgba(255, 255, 255, 0.98);
// //   text-transform: uppercase;
// //   font-size: 2.4rem;
// // `;

// // interface SliderProps {
// //   slides: Slide[]; // Define the correct prop type here
// // }

// // export default function Slider({ slides }: SliderProps) {
// //   const responsive = {
// //     superLargeDesktop: {
// //       breakpoint: { max: 4000, min: 3000 },
// //       items: 1,
// //     },
// //     desktop: {
// //       breakpoint: { max: 3000, min: 1024 },
// //       items: 1,
// //     },
// //     tablet: {
// //       breakpoint: { max: 1024, min: 464 },
// //       items: 1,
// //     },
// //     mobile: {
// //       breakpoint: { max: 464, min: 0 },
// //       items: 1,
// //     },
// //   };

// //   return (
// //     <StyledSlider>
// //       <Carousel
// //         responsive={responsive}
// //         autoPlay={true}
// //         autoPlaySpeed={2000}
// //         infinite={true}
// //         transitionDuration={1500}
// //       >
// //         {slides.map((slide, index) => {
// //           return (
// //             <StyledWrapper key={index}>
// //               <h1>Hello</h1>
// //                   <StyledBannerImage>
// //                     <Image
// //                       src={slide.image}
// //                       alt={slide.title}
// //                       width={1000}
// //                       height={700}
// //                     />
// //                   </StyledBannerImage>
// //                   <StyledH1>{slide.title}</StyledH1>
// //             </StyledWrapper>
// //           );
// //         })}
// //       </Carousel>
// //     </StyledSlider>
// //   );
// // }



// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { Slide } from './ImgData'; // Import the Slide type from ImgData.ts

// import Image from 'next/image';

// interface SliderProps {
//   slides: Slide[]; // Define the correct prop type here
// }

// const Slider = ({ slides }: SliderProps) => {
//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };

//   return (
//     <div>
//       <Carousel
//         responsive={responsive}
//         infinite={true}
//         autoPlay={true}
//         autoPlaySpeed={2000}
//         removeArrowOnDeviceType={['tablet', 'mobile']}
//       >
//         {slides.map((slide, index) => (
//           <div key={index}>
//             <Image src={slide.image} alt={slide.title} />
//             <p>{slide.title}</p>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Slider;



// import React from "react";

// // Import Swiper React components
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


// import Image from "next/image";

// import { Slide } from "./ImgData"; // Import the Slide type from imgData

// interface SliderProps {
//     slides: Slide[]; // Define the correct prop type here
//   }
  
//   export default function Slider({ slides }: SliderProps) {
//     const swiper = useSwiper();
//     return (
//       <Swiper
//           // install Swiper modules
//           modules={[Pagination, A11y]}
//           slidesPerView={1}
//           navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
//           pagination={{ clickable: true }}
//           scrollbar={true}
//           lazyPreloadPrevNext={1}
//           autoHeight={true}
//           autoplay={true}
//           centeredSlides={true}
//         >
//           {/* <button onClick={() => swiper.slideNext()}>Slide to the next slide</button> */}
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <Image src={slide.image} alt={slide.title} width={1000} height={700} />
//             <p>{slide.title}</p>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     );
//   }


import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper/core';
import { Navigation } from 'swiper/modules';
import "swiper/css"; // Import Swiper styles
import { Slide } from './ImgData'; // Import the Slide type from ImgData
import Image from "next/image";

SwiperCore.use([Navigation]); // Enable Navigation module (or any other modules you need)

interface SliderProps {
    slides: Slide[]; // Define the correct prop type here
}

type MySwiper = SwiperCore & {
  slideNext: () => void; // Add any other methods you need here
};


export default function Slider({ slides }: SliderProps) {
  const swiperRef = useRef<MySwiper | null>(null);

  const handleNextSlideClick = () => {
    console.log("Button clicked"); // Add this for debugging
    swiperRef.current?.slideNext();
  };

  return (
    <>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper"
        navigation={true} // Enable navigation
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide-content">
              <Image src={slide.image.src} alt={slide.title} width={1000} height={700} />
              <p>{slide.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button  onClick={handleNextSlideClick}>
        Go to Next Slide
      </button>
    </>
  );
}




