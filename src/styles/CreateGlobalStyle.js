import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {  
    background-color:#716c64;
    color:#fff;
}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,

  p {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  button {
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
