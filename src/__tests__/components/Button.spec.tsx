import React from 'react';
import { render } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button', () => {
  it('should be able to load the home page', () => {
    const { debug } = render(<Button />);

    debug();
  });
});
