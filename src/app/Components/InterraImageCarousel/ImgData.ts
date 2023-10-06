import { StaticImageData } from 'next/image';
import Interra1 from '../../../../public/Assests/Interra1.jpg';
import Interra2 from '../../../../public/Assests/Interra2.jpg';
import Interra3 from '../../../../public/Assests/Interra3.jpg';
import Interra4 from '../../../../public/Assests/Interra4.jpg';
import Interra5 from '../../../../public/Assests/Interra5.jpg';
import Interra6 from '../../../../public/Assests/Interra6.jpg';


// Define the type for a single slide
export type Slide = {
  image: StaticImageData,
  title: string,
  width?: number,
  height?: number,
};

// Define the array of slides
const slides: Slide[] = [
  {
    image: Interra1,
    title: "Image 1",
    // width: 1800, 
    // height: 1000,
  },
  {
    image: Interra2,
    title: "Image 2",
    // width: 800, 
    // height: 600, 
  },
  {
    image: Interra3,
    title: "Image 3",
    // width: 800, 
    // height: 600, 
  },
  {
    image: Interra4,
    title: "Image 4",
    // width: 800, 
    // height: 600, 
  },
  {
    image: Interra5,
    title: "Image 5",
    // width: 800, 
    // height: 600, 
  },
  {
    image: Interra6,
    title: "Image 6",
    // width: 800, 
    // height: 600, 
  },
];

export default slides;