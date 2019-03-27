import React from 'react';
import PropTypes from 'prop-types';

import { Container, Jumbotron, Button } from 'reactstrap';

const ProductJumbo = (props) => {
  const {
    appName,
    appDescription,
    buttonAction,
    buttonText,
  } = props;
  return (
    <Jumbotron fluid>
      <Container>
        <div>
          <h1>{appName}</h1>
        </div>
        <p className="lead">
          {appDescription}
        </p>
        <div>
          <Button
            onClick={buttonAction}
            color="primary"
          >
            {buttonText}
          </Button>
        </div>
      </Container>
    </Jumbotron>
  );
};

ProductJumbo.defaultProps = {
  appName: 'Open Accessible Digital Workspace',
  // eslint-disable-next-line max-len
  appDescription: 'Ice cream candy canes candy canes jelly beans jelly-o oat cake dragée. Wafer oat cake pastry marzipan. Tiramisu chupa chups lollipop croissant halvah bear claw jelly-o.',
  buttonAction: () => {},
  buttonText: 'Learn More',
};

ProductJumbo.propTypes = {
  appName: PropTypes.string,
  appDescription: PropTypes.string,
  buttonAction: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ProductJumbo;
