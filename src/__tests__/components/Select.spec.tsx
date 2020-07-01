import React from 'react';
import { render } from '@testing-library/react';
import Select from '../../components/Select';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'origin',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
      };
    },
  };
});

describe('Select', () => {
  it('should be able to load the home page', () => {
    const { getByPlaceholderText } = render(
      <Select name="origin" placeholder="selecione o DD de origem" />,
    );

    expect(getByPlaceholderText('selecione o DD de origem')).toBeTruthy();
  });
});
