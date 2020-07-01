import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    width: 600px;
    max-width: 100%;
    -webkit-font-smoothing: antialised;
    margin: 0 auto;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700
  }

  button {
    cursor: pointer;
  }
`;
