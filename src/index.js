import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import clear from "./Assets/clear.jpg";
import clear2 from "./Assets/clear2.jpg";
import rain from "./Assets/rain.jpg";
import rain2 from "./Assets/rain2.jpg";
import snow from "./Assets/snow.jpg";
import sunny from "./Assets/sunny.jpg";

const images = {
  clear,
  clear2,
  rain,
  rain2,
  snow,
  sunny
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default images;