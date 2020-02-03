import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${Reset}
  * {
    box-sizing: border-box;
    outline: 0
  }
  html,
  body,
  #root {
    height: 100%;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #333;
    -webkit-font-smoothing: antialised !important
  }
`;
