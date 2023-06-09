import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Layouts/Navbar';
import Footer from './Layouts/Footer';

import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <App />
    <Footer/>
    </BrowserRouter>
  

  </React.StrictMode>
);

