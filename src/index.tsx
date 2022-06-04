import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { TopPage } from './components/pages/Top';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    height: 100%;
    display: flex;
  }
  body {
    display: flex;
    flex: 1;
  }
  #root {
    display: flex;
    flex: 1;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <TopPage />
  </React.StrictMode>,
);
