import React from 'react';
import PropTypes from 'prop-types';
import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';

import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Button
} from 'reactstrap';  

export const ExamplePropsComponent = (props) => {
  const { name, primaryAction } = props;
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>
            {__('Hello')} { name }!
          </CardTitle>
          <CardText>
            {__('I am an example component! Very simple.')}
          </CardText>
          <Button
            color="primary"
            onClick={primaryAction}
          >
            {__('Action')}
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

ExamplePropsComponent.propTypes = {
  name: PropTypes.string.isRequired,
  primaryAction: PropTypes.func.isRequired,
};

export default LocalizedComponent(ExamplePropsComponent);