import React from 'react';
import { Row, Col } from 'reactstrap';

export default () => (
  <div className="mt-5">
    <h1>Using the Front-end Template</h1>
    <ul className="mt-5 mb-5">
      <li>First link</li>
      <li>Second Link</li>
      <li>Third link</li>
    </ul>
    <Row>
      <Col lg="6" className="pl-5">
        <h2>First Section</h2>
        <p>Cool stuff</p>
      </Col>
      <Col lg="6" />
      <Col lg="6" />
      <Col lg="6" className="pl-5">
        <h2>Second Section</h2>
        <p>Cool stuff</p>
      </Col>
      <Col lg="6" className="pl-5">
        <h2>Third Section</h2>
        <p>Cool stuff</p>
      </Col>
      <Col lg="6" />
    </Row>

    <a href="/">Return</a>
  </div>
);
