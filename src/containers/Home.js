import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Home extends Component {
  componentDidMount() {
    document.title = 'Front-end Template';
  }

  render() {
    return (
      <Row>
        <h1 className="sr-only">Front End Template</h1>
        <Col className="mt-5" lg="12">
          <h2 className="display-4">Massive header</h2>
          <p>Look at this</p>
          <a href="/info">Get started</a>
        </Col>
        <Col className="mt-4">
          <h3 className="h4">Resources</h3>
          <ul>
            <li>FE Github</li>
            <li>MS Github</li>
            <li>Account Github</li>
          </ul>
        </Col>
      </Row>
    );
  }
}

export default Home;
