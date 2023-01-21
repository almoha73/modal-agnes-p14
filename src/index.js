import React from "react";
import ReactDOM from 'react-dom/client';
import Modal from "./lib/components/Modal";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    <React.StrictMode>
        <Modal setIsOpen={true} />
    </React.StrictMode>

);