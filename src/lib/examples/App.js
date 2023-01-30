/**
@file App component
@author almoha73
@description A component to handle opening and closing of the modal.
*/

import React, { useState } from "react";
import Modal from "../components/Modal";
import GlobalStyle from "../components/utils/GlobalStyle";

/**

@function
@name App
@returns {JSX.Element} - returns a JSX component
@description A component to handle opening and closing of the modal.
*/
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <GlobalStyle />
      {/* <button
        onClick={() => setIsOpen(true)}
        className="openModalBtn"
        style={{
          padding: "10px",
          margin: "50px 50px",
          borderRadius: "5px",
          border: "none",
        }}
      >
        Open Modal
      </button> */}
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default App;
