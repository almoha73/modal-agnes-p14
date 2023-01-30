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
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GlobalStyle, null), isOpen && /*#__PURE__*/React.createElement(Modal, {
    setIsOpen: setIsOpen
  }));
};
export default App;