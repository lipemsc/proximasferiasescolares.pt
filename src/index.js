import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const fetchApi = () => {
  fetch("https://api.proximasferiasescolares.pt/").then((response) => {
    console.log(response.body);
  })
}

const renderPage = () => {
  root.render(
    <div>
      <App dateString = "2023-02-28T18:10:00.000"/>
    </div>
    
  );
}

renderPage()



setInterval(() => {
  renderPage()
}, 10);

setInterval(() => {
  fetchApi()
}, 1000);
