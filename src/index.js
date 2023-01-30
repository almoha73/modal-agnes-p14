/**
@file Entry point for the React application.
Renders the App component to the HTML element with id "root".
@author almoha
*/

import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./lib/examples/App";

/**
Creates a root React DOM instance and renders the App component.
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    <React.StrictMode>
        <App />
    </React.StrictMode>

);