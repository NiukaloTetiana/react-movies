import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/CreateGlobalStyle';
import { ThemeProvider } from 'components/ThemeContext/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-movies">
      <ThemeProvider>
        <App /> <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
