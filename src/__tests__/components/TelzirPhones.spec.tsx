import React from 'react';
import { render } from '@testing-library/react';
import TelzirCalculator from '../../components/TelzirCalculator';

describe('TelzirCalculator Page', () => {
  it('should be able to load the TelzirCalculator page', () => {
    const { debug } = render(<TelzirCalculator />);

    debug();
  });
});
