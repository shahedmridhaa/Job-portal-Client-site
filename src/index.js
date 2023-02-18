import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Authprovider from './Authentication/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Authprovider>
        <App />
    </Authprovider>
  </React.StrictMode>
);

reportWebVitals();
