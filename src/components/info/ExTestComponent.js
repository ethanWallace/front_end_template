import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';

import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';

export const ExTestComponent = (props) => {
  const { name } = props;
  return (
    <Card>
      <CardBody>
        <div className="h5">
          {__('Your Name is:')}
        </div>
        <div className="h6">
          {name}
        </div>
        <div>
          {__('Just doing a test')}
        </div>
      </CardBody>
    </Card>
  );
};

ExTestComponent.defaultProps = {
  name: 'Jonald',
};

ExTestComponent.propTypes = {
  name: PropTypes.string,
};

export default LocalizedComponent(ExTestComponent);
