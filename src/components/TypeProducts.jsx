import React from "react";
import { Col, Container, Row } from 'react-bootstrap';

import { types } from "../utils/data";

const TypeProducts = () => (
    <Container>
        <Row className='d-flex justify-content-around text-center my-4'>
        {types.map(type => (
            <Col key={type.id} className='my-4'>
                <img src={type.image} alt={type.title}   widht={100} height={100} className='border rounded-circle p-2'/>
                <h6 className='text-success mt-2'>{type.title}</h6>
            </Col>
        ))}
        </Row>
    </Container>
  );
  
  export default TypeProducts;