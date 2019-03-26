/** Simple test to check if the component will render with props */
import React from 'react';

import { render, cleanup } from 'react-testing-library';

import { ExTestComponent } from './ExTestComponent';

afterEach(cleanup);

describe('ExTestComponent', () => {
  it('renders without props', () => {
    const { queryByText } = render((
      <ExTestComponent />
    ));
    const name = queryByText('Jonald');
    expect(name.innerHTML).toBe('Jonald');
  });
  
  it('renders with props', () => {
    const { queryByText } = render((
      <ExTestComponent
        name="Darth Vader"
      />
    ));
    const name = queryByText('Darth Vader');
    expect(name.innerHTML).toBe('Darth Vader');
  });
});