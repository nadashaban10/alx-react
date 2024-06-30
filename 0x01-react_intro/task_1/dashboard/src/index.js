import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Notifications from './Notifications';


// Create root for the main app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const notification = ReactDOM.createRoot(document.getElementById('notification'));
notification.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);

