import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';
import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  width?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  width = '100%',
  ...rest
}) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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

      <input
        placeholder={placeholder}
        defaultValue={0}
        name={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        {...rest}
      />

      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default Input;
