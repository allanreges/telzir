import React from 'react';
import { render } from '@testing-library/react';
import Input from '../../components/Input';

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

describe('Input', () => {
  it('should be able to load the home page', () => {
    const { getByPlaceholderText } = render(
      <Input name="origin" placeholder="selecione o DD de origem" />,
    );

    expect(getByPlaceholderText('selecione o DD de origem')).toBeTruthy();
  });
});
