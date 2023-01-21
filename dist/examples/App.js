import React, { useState } from "react";
import { Modal } from "../../lib/components/Modal";
import GlobalStyle from "../components/utils/GlobalStyle";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GlobalStyle, null), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsOpen(true),
    className: "openModalBtn",
    style: {
      padding: "10px",
      margin: "50px 50px",
      borderRadius: "5px",
      border: "none"
    }
  }, "Open Modal"), isOpen && /*#__PURE__*/React.createElement(Modal, {
    setIsOpen: setIsOpen
  }));
};
export default App;