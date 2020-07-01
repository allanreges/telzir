import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';
import { Container, Error } from './styles';

import { Option } from '../../utils/schemas';

interface InputProps extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  width?: string;
  data?: any;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  data,
  width = '100%',
  ...rest
}) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container
      isErrorEd={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
      width={width}
    >
      <span>{placeholder}</span>
      <select
        placeholder={placeholder}
        defaultValue={defaultValue}
        name={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        {...rest}
      >
        <option value="" selected>
          {placeholder}
        </option>
        {data &&
          data.map((item: Option) => {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          })}
      </select>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default Input;
