import React from 'react';
import { Col, Card } from 'react-bootstrap';

const Product = ({product}) => (

  <Col key={product.id} className="m-2 g-4">
    <Card className="mt-3 d-flex align-center justify-content-center text-center">
      <Card.Img variant="top" src={product.image} alt={product.title} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="price">
          <p className="price-p">De R$ <span>{product.priceIni}</span> por</p>
            <h2>R$ <span>{product.priceFin}</span></h2>
        </Card.Text>
        
        <div className="popup" onclick="openPopup()">
            <p className="legend">Ver mais</p>
            <div className="content-popup" id="details">
              <p className="description">
                {product.description}
              </p>
            </div>
        </div>

      </Card.Body>
    </Card>
  </Col>
)

export default Product;