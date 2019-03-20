import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

// Images
import config from '../assets/imgs/config.png';
import arch from '../assets/imgs/arch.png';
import comp from '../assets/imgs/comp.png';

class Info extends Component {
  componentDidMount() {
    document.title = 'Using the Front-end template';
  }
  render() {
    return (
      <div className="mt-5">
        <h1>Using the Front-end Template</h1>
        <Row className="flex">
          <Col md="6" className="align-self-center">
            <h2>Configuration</h2>
            <p>
              To get started with the front-end template, you will need to
               create a <code>oidcConfig.dev.js</code> file in the
              <code> src</code> directory to connect to your OpenID
                authentication provider. The file should follow this format:
            </p>
            <pre>
              <code>
                <p>code</p>
              </code>
            </pre>
            <p>
              Next enter the the uri to your graphql backend in the
              <code> src/index.js</code> file.
            </p>
            <pre>
              <code>
                <p>code again</p>
              </code>
            </pre>
            <p>
              You are now ready to go.
            </p>
          </Col>
          <Col md={{ size: 5, offset: 1 }}>
            <img className="align-self-center" src={config} alt="" />
          </Col>
        </Row>
        <Row className="flex">
          <Col
            md={{ size: 6, offset: 1 }}
            className="align-self-center order-md-12"
          >
            <h2>Project Structure</h2>
            <p>
              The front-end template project structure has been setup to
               provide better findability and organization for you and your
               components. In the src directory you have four main directories
               to work with, the assets, components, containers and gql
               directories.
            </p>
            <p>
              The container directory is for your top-level page containers
               of your application. These are what you would use with React
               Router to route to new pages in your application.
            </p>
            <p>
              The components directory is for the rest of your components
               that will make up the pages of your application. We suggest
               creating a core directory to house your components that will
               be used on multiple pages of your application. Other components
               can then be sorted into directories based of your page
               structure and then be broken down further into separate
               features.
            </p>
            <p>
              The gql directory is for your graphql queries and mutations.
               We recommend keeping these in separate files for better
               organization.
            </p>
            <p>
              You can find examples of most of the structure already in
               the front-end template when you first load the project.
            </p>
          </Col>
          <Col md="5" className="order-md-1">
            <img className="align-self-center" src={arch} alt="" />
          </Col>
        </Row>
        <Row className="flex">
          <Col md="6" className="align-self-center">
            <h2>Third Section</h2>
            <p>Cool stuff</p>
          </Col>
          <Col md={{ size: 5, offset: 1 }}>
            <img className="align-self-center" src={comp} alt="" />
          </Col>
        </Row>
        <div>
          <h2 className="text-center mt-4">Happy Coding</h2>
        </div>
        <div className="mt-5 mb-5">
          <a href="/">Return to home</a>
        </div>
      </div>
    );
  }
}

export default Info;
