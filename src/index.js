import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SymptomsProvider } from './context/symptoms';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SymptomsProvider>
      <App />
    </SymptomsProvider>
  </React.StrictMode>
);


