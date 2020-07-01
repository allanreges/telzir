import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages/Home';

describe('Home Page', () => {
  it('should be able to load the home page', () => {
    const { debug } = render(<Home />);

    debug();
  });
});
