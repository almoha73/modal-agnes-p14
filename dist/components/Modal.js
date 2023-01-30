import React from "react";
import styled from "styled-components";
import { keyframes, css } from "styled-components";
import { StyledCloseIcon } from "./assets/icons/CloseIcon";
import { StyledCircleIcon } from "./assets";
import { ColourShemes } from "./utils/themes";

/**
This is a code comment for the Modal component in React. The Modal component is styled using the styled-components library and contains different styles for the ModalContainer, ModalOverlay, ModalBody, ModalContent, ModalTitle, ModalText, and ModalButton.
The keyframes are used to create the animation for the ModalBody and the styles for each component are passed dynamic values through the "attrs" method for more customizability.
@param {Object} props - The properties passed to the Modal component.
@property {function} setIsOpen - The function to close the modal.
@property {string} modalTitle - Changes the title displayed in the ModalContent.Employee created' by default
@property {string} modalText - Changes the text displayed in the ModalContent. 'If you want, you can create more !' by default
@property {string} close - To determine whether to display the close icon in the alert component.The base color is closecolor="green-300".
@property {string} closecolor - Changes the close icon color of the alert component. The base color is green-300. 
@property {string} sizeclose - Changes the close icon size. sizeclose="header4" by default
@property {boolean} check - Add the display of the check icon in the Modal component. 
@property {string} checkcolor - Changes the color of the check mark.
@property {string} sizecheck - Changes the size of the check mark. sizecheck="iconLarge" by default
@property {boolean} animationBody - Enables the animation on the ModalBody 
@property {boolean} button - Add the display of a button in the Modal component. The text displayed in the ModalButton. "Close" by default. buttonBg='green-300'by default. buttonTextColor='neutral-1000' by default
@property {string} buttonbg - Changes the background color of the ModalButton. buttonBg='green-300' by default
@property {string} buttonText - Changes the text of the button
@property {string} buttonTextColor - Changes the text color of the ModalButton.buttonTextColor='neutral-1000' by default
@property {string} buttonbgHover - Changes the background color of the ModalButton when hovered. buttonBgHover='green-200' by default
@property {string} bodyColor - Change the background color of the modal. bodyColor='neutral-100' by default
@property {string} overlayColor - Change the background color of the overlay. overlayColor='neutral-500' by default
*/

let animation = keyframes`
0% {
    
	transform: translateX(-100%);
	  opacity: 0;
	}
	100% {
	  
	transform: translate(-50%, -50%);
	opacity: 1;
	}
`;
const ModalContainer = styled.div`
  height: 100%;
  width: 100vh;
`;
const ModalOverlay = styled.div.attrs(props => ({
  overlayColor: props.overlayColor
}))`
  background: ${props => ColourShemes[props.overlayColor] || ColourShemes["neutral-500"]};
  height: 100vh;
  width: 100%;
  position: fixed;
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: opacity 0.2s ease-out;
  z-index: 1;
`;
const ModalBody = styled.div.attrs(props => ({
  bodyColor: props.bodyColor,
  animationBody: props.animationBody
}))`
  background: ${props => ColourShemes[props.bodyColor] || ColourShemes["neutral-100"]};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  max-width: 50%;
  min-width: 300px;
  min-height: 300px;
  border-radius: 8px;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);

  ${({
  animationBody
}) => animationBody && css`
      animation: ${animation} 500ms ease-out both;
    `}
`;
const ModalContent = styled.div`
  width: 100%;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 40px 20px 20px;
`;
const ModalTitle = styled.h2`
  font-family: sans-serif;
  width: 90%;
  text-align: center;
  margin: 0;
  padding: 10px;
`;
const ModalText = styled.p`
  font-family: sans-serif;
  font-size: 1.125rem;
  color: rgb(0, 0, 0);
  text-align: center;
  width: 90%;
  margin: 12px 0;
  padding: 9px;
`;
const ModalButton = styled.button.attrs(props => ({
  buttonbg: props.buttonbg,
  buttonTextColor: props.buttonTextColor,
  buttonbgHover: props.buttonbgHover
}))`
  display: block;
  font-size: 1rem;
  font-family: sans-serif;
  padding: 10px 12px;
  border-radius: 5px;
  background: ${props => ColourShemes[props.buttonbg] || ColourShemes["green-300"]};
  color: ${props => ColourShemes[props.buttonTextColor] || ColourShemes["neutral-1000"]};
  border: none;
  outline: none;
  cursor: pointer;

  &&:hover {
    background: ${props => ColourShemes[props.buttonbgHover] || ColourShemes["green-200"]};
  }
`;
const Modal = props => {
  const {
    setIsOpen,
    bodyColor,
    overlayColor,
    modalTitle,
    modalText,
    button,
    buttonText,
    buttonbg,
    buttonbgHover,
    buttonTextColor,
    close,
    closecolor,
    sizeclose,
    check,
    checkcolor,
    sizecheck,
    animationBody
  } = props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ModalContainer, {
    className: "modalContainer"
  }, /*#__PURE__*/React.createElement(ModalBody, {
    className: "modalBody",
    bodyColor: bodyColor,
    animationBody: animationBody
  }, close && /*#__PURE__*/React.createElement(StyledCloseIcon, {
    closecolor: closecolor,
    sizeclose: sizeclose,
    onClick: () => setIsOpen(false)
  }), /*#__PURE__*/React.createElement(ModalContent, {
    className: "modalContent"
  }, check && /*#__PURE__*/React.createElement(StyledCircleIcon, {
    sizecheck: sizecheck,
    checkcolor: checkcolor
  }), /*#__PURE__*/React.createElement(ModalTitle, {
    className: "modalTitle"
  }, modalTitle || "Employee created"), /*#__PURE__*/React.createElement(ModalText, {
    className: "modalText"
  }, modalText || "If you want, you can create more !"), button && /*#__PURE__*/React.createElement(ModalButton, {
    onClick: () => setIsOpen(false),
    className: "modalButton",
    buttonbg: buttonbg,
    buttonbgHover: buttonbgHover,
    buttonTextColor: buttonTextColor
  }, buttonText || "Close"))), /*#__PURE__*/React.createElement(ModalOverlay, {
    className: "modalOverlay",
    onClick: () => setIsOpen(false),
    overlayColor: overlayColor
  })));
};
export default Modal;