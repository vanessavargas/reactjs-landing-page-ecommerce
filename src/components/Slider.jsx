import Carousel from 'react-bootstrap/Carousel';


import Slide1 from "../assets/img/slide1.svg";
import Slide2 from "../assets/img/slide2.svg";
import Slide3 from "../assets/img/slide3.svg";

export default function Slider() {
  return (
    <Carousel fade  className='mb-5'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide1}
          alt="Image1"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide2} alt="Image2"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide3} alt="Image3"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};