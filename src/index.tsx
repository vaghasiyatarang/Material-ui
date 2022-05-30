import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainApp from './darkMode/MainApp'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainApp/>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
