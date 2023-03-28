import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
var date = ""

const renderPage = () => {
  root.render(
    <div>
      <App dateString = {date}/>
    </div>
    
  );
}

renderPage()
