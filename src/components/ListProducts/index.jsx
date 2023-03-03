import React from 'react';
import { Container } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import { itens } from './data';

import Product  from './Product';

const ListProducts = () => {

  return (
      <Container id="promocoes">
        <Row>
           {itens.map(product => (
            <Product key={product.id} product={product} />
          ))}  
        </Row>
      </Container>
    ) 
};

export default ListProducts;