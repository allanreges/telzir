import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
  padding: 30px 20px;
  border-radius: 10px;

  @media (min-width: 720px) {
    margin: 30px 0;
  }
`;

export const Title = styled.h1`
  color: #005aad;
  text-align: center;
`;

export const SubTitle = styled.h2`
  font-size: 16px;
  text-align: center;
  margin: 30px 0;
  max-width: 450px;
  color: #002159;
`;

export const FormContainer = styled(Form)`
  background: white;
  padding: 25px;
  border-radius: 10px;
`;

export const ResultContainer = styled.div`
  background: #005aad;
  padding: 25px;
  margin: 20px 0 0 0;
  border-radius: 10px;

  p {
    font-size: 18px;
    color: #fff;
    margin: 10px 0;
    line-height: 1.5;
    text-align: center;

    span {
      font-size: 24px;
      font-weight: bold;
    }
  }
`;
