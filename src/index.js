import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import * as theme from './styledCopmonents/theme';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme} dir="rtl">
    <App />
  </ThemeProvider>
    
);

