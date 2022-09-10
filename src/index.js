
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import LandingPage from './Tasks_Superhero API/LandingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/*  
   <NewsApi/> 
*/
<React.StrictMode>
    <LandingPage/>
</React.StrictMode>
);
reportWebVitals();
