import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
var date = ""

const fetchApi = () => {
  axios.get("https://api.proximasferiasescolares.pt/").then((response) => {
    date = response.data
  })
}

const renderPage = () => {
  root.render(
    <div>
      <App dateString = {date}/>
    </div>
    
  );
}

fetchApi()
renderPage()

setInterval(() => {
  renderPage()
}, 10);

setInterval(() => {
  fetchApi()
}, 25000);
