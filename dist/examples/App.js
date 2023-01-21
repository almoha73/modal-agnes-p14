import React, { useState } from "react";
import Modal from "../components/Modal";
import GlobalStyle from "../components/utils/GlobalStyle";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GlobalStyle, null), isOpen && /*#__PURE__*/React.createElement(Modal, {
    setIsOpen: setIsOpen
  }));
};
export default App;