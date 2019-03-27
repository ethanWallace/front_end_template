import React from 'react';

import { Container, Row } from 'reactstrap';

import ProductJumbo from '../../components/examples/product/ProductJumbo';

const ProductPage = () => (
  <div>
    <ProductJumbo />
    <Container>
      <Row>
        What is it?
      </Row>
      <Row>
        Feature
      </Row>
      <Row>
        Call to Action?
      </Row>
      <Row>
        Feature
      </Row>
    </Container>
  </div>
);

export default ProductPage;
