import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Make sure this is pointing to your CSS file with Tailwind setup

import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);


