import React from 'react';
import { Row, Col } from 'reactstrap';

import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';

import config from '../../assets/imgs/config.png';

function ConfigSection() {
  return (
    <Row className="flex mt-5">
      <Col md="7" className="align-self-center">
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
      <Col md={{ size: 5 }} className="sm-img-col">
        <img className="align-self-center sm-blob" src={config} alt="" />
      </Col>
    </Row>
  );
}

export default LocalizedComponent(ConfigSection);
