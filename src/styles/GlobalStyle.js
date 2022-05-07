import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html { 
    font-size: 62.5%; 
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;