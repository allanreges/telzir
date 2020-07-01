import React from 'react';
import { render } from '@testing-library/react';
import TelzirCalculator from '../../components/TelzirCalculator';

jest.mock('react', () => {
  const ActualReact = require.requireActual('react');
  return {
    ...ActualReact,
    useContext: () => ({
      plans: [
        {
          id: 1,
          label: 'FaleMais 30',
          minutes: 30,
        },
        {
          id: 2,
          label: 'FaleMais 60',
          minutes: 60,
        },
        {
          id: 3,
          label: 'FaleMais 120',
          minutes: 120,
        },
      ],
      combinations: [
        {
          id: 1,
          origin: '011',
          destiny: '016',
          priceMin: 1.9,
        },
        {
          id: 2,
          origin: '016',
          destiny: '011',
          priceMin: 2.9,
        },
        {
          id: 3,
          origin: '011',
          destiny: '017',
          priceMin: 1.7,
        },
        {
          id: 4,
          origin: '017',
          destiny: '011',
          priceMin: 1.9,
        },
        {
          id: 5,
          origin: '011',
          destiny: '018',
          priceMin: 0.9,
        },
        {
          id: 6,
          origin: '018',
          destiny: '011',
          priceMin: 1.9,
        },
      ],
    }),
  };
});

describe('TelzirCalculator Page', () => {
  it('should be able to load the TelzirCalculator page', () => {
    const { debug } = render(<TelzirCalculator />);

    debug();
  });
});
