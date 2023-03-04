import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { slides } from "../utils/data";


const Slider = () => (
  <Carousel className='slider text-center my-4'>
    {slides.map(slide => (
      <Carousel.Item key={slide.id}>
        <img
          src={slide.image}
          alt={slide.title}
        />
        <Carousel.Caption className='texto text-success'>
          <h1 className='text-success'>{slide.title}</h1>
          <p>{slide.content}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default Slider;