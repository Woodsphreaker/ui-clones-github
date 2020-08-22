import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%
  }

  body {
    background: var(--secondary)
  }

  button, input {
    border: none;
    cursor: pointer;
    background: none;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none
  }

  :root {
    --primary: #000;
    --secondary: #7159C1
  }
`;
