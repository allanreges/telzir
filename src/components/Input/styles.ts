import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrorEd: boolean;
  width?: string;
}

export const Container = styled.div<ContainerProps>`
  width: ${props => props.width};
  border-bottom: 1px solid #C9C9C9;
  color: #C9C9C9;
  position: relative;

  & + div {
    margin-top: 40px;
  }

  span{
    opacity: 0;
    width: 100%;
    color: #C9C9C9;
    display: flex;
    font-size: 13px;
    margin: 0 0 5px 0;
    transition: opacity 0.2s;
  }

  ${props =>
    props.isErrorEd &&
    css`
      color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #3c3c3c;

      span {
        opacity: 1;
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      span {
        opacity: 1;
      }
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    width: 100%;
    padding-bottom: 5px;
    font-size: 17px;

    &::placeholder {
      color: #C9C9C9;
    }
  }


`;

export const Error = styled.div`
  height: 20px;
  color: #eb5757;
  position: absolute;
  left: 0;
  right: auto;
  transform: translateY(5px);

  svg {
    margin: 0;
  }
`;
