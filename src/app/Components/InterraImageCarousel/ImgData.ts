import { StaticImageData } from 'next/image';
import Interra1 from '../../../../public/Assests/Interra1.jpg';
import Interra2 from '../../../../public/Assests/Interra2.jpg';
import Interra3 from '../../../../public/Assests/Interra3.jpg';
import Interra4 from '../../../../public/Assests/Interra4.jpg';
import Interra5 from '../../../../public/Assests/Interra5.jpg';
import Interra6 from '../../../../public/Assests/Interra6.jpg';


// Define the type for a single slide
export interface Slide {
  image: {
    src: StaticImageData; // Image source URL
  };
  title: string; // Slide title
}

// Define the array of slides
const slides: Slide[] = [
  {
    image: {
      src: Interra1,
    },
    title: "Image 1",
  },
  {
    image: {
      src: Interra2,
    },
    title: "Image 2", 
  },
  {
    image: {
      src: Interra3,
    },
    title: "Image 3",
  },
  {
    image: {
      src: Interra4,
    },
    title: "Image 4", 
  },
  {
    image: {
      src: Interra5,
    },
    title: "Image 5",
  },
  {
    image: {
      src: Interra6,
    },
    title: "Image 6", 
  },
];

export default slides;
