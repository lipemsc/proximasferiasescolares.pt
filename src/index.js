import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderPage = () => {
  root.render(
    <div>
      <App />
    </div>
    
  );
}

renderPage()

setInterval(() => {
  renderPage()
}, 10);
