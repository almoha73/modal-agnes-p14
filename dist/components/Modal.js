"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _assets = require("../components/assets");
var _themes = require("./utils/themes");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var animation = (0, _styledComponents.keyframes)(["0%{transform:translateX(-100%);opacity:0;}100%{transform:translate(-50%,-50%);opacity:1;}"]);
var ModalContainer = _styledComponents.default.div.withConfig({
  displayName: "Modal__ModalContainer",
  componentId: "sc-19kk5as-0"
})(["height:100%;width:100vh;"]);
var ModalOverlay = _styledComponents.default.div.attrs(function (props) {
  return {
    overlayColor: props.overlayColor
  };
}).withConfig({
  displayName: "Modal__ModalOverlay",
  componentId: "sc-19kk5as-1"
})(["background:", ";height:100vh;width:100%;position:fixed;opacity:0.5;top:0;left:0;bottom:0;right:0;transition:opacity 0.2s ease-out;z-index:1;"], function (props) {
  return _themes.ColourShemes[props.overlayColor] || _themes.ColourShemes["neutral-500"];
});
var ModalBody = _styledComponents.default.div.attrs(function (props) {
  return {
    bodyColor: props.bodyColor,
    animationBody: props.animationBody
  };
}).withConfig({
  displayName: "Modal__ModalBody",
  componentId: "sc-19kk5as-2"
})(["background:", ";box-shadow:rgba(50,50,93,0.25) 0px 50px 100px -20px,rgba(0,0,0,0.3) 0px 30px 60px -30px,rgba(10,37,64,0.35) 0px -2px 6px 0px inset;max-width:50%;min-width:300px;min-height:300px;border-radius:8px;z-index:10;position:absolute;top:50%;left:50%;display:flex;justify-content:center;align-items:center;transform:translate(-50%,-50%);", ""], function (props) {
  return _themes.ColourShemes[props.bodyColor] || _themes.ColourShemes["neutral-100"];
}, function (_ref) {
  var animationBody = _ref.animationBody;
  return animationBody && (0, _styledComponents.css)(["animation:", " 500ms ease-out both;"], animation);
});
var ModalContent = _styledComponents.default.div.withConfig({
  displayName: "Modal__ModalContent",
  componentId: "sc-19kk5as-3"
})(["width:100%;min-height:260px;display:flex;flex-direction:column;align-items:center;justify-content:space-around;padding:40px 20px 20px;"]);
var ModalTitle = _styledComponents.default.h2.withConfig({
  displayName: "Modal__ModalTitle",
  componentId: "sc-19kk5as-4"
})(["font-family:sans-serif;width:90%;text-align:center;margin:0;padding:10px;"]);
var ModalText = _styledComponents.default.p.withConfig({
  displayName: "Modal__ModalText",
  componentId: "sc-19kk5as-5"
})(["font-family:sans-serif;font-size:1.125rem;color:rgb(0,0,0);text-align:center;width:90%;margin:12px 0;padding:9px;"]);
var ModalButton = _styledComponents.default.button.attrs(function (props) {
  return {
    buttonbg: props.buttonbg,
    buttonTextColor: props.buttonTextColor,
    buttonbgHover: props.buttonbgHover
  };
}).withConfig({
  displayName: "Modal__ModalButton",
  componentId: "sc-19kk5as-6"
})(["display:block;font-size:1rem;font-family:sans-serif;padding:10px 12px;border-radius:5px;background:", ";color:", ";border:none;outline:none;cursor:pointer;&&:hover{background:", ";}"], function (props) {
  return _themes.ColourShemes[props.buttonbg] || _themes.ColourShemes["green-300"];
}, function (props) {
  return _themes.ColourShemes[props.buttonTextColor] || _themes.ColourShemes["neutral-1000"];
}, function (props) {
  return _themes.ColourShemes[props.buttonbgHover] || _themes.ColourShemes["green-200"];
});
var Modal = function Modal(props) {
  var setIsOpen = props.setIsOpen,
    bodyColor = props.bodyColor,
    overlayColor = props.overlayColor,
    modalTitle = props.modalTitle,
    modalText = props.modalText,
    button = props.button,
    buttonText = props.buttonText,
    buttonbg = props.buttonbg,
    buttonbgHover = props.buttonbgHover,
    buttonTextColor = props.buttonTextColor,
    close = props.close,
    closecolor = props.closecolor,
    sizeclose = props.sizeclose,
    check = props.check,
    checkcolor = props.checkcolor,
    sizecheck = props.sizecheck,
    animationBody = props.animationBody;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(ModalContainer, {
    className: "modalContainer"
  }, /*#__PURE__*/_react.default.createElement(ModalBody, {
    className: "modalBody",
    bodyColor: bodyColor,
    animationBody: animationBody
  }, close && /*#__PURE__*/_react.default.createElement(_assets.StyledCloseIcon, {
    closecolor: closecolor,
    sizeclose: sizeclose,
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }), /*#__PURE__*/_react.default.createElement(ModalContent, {
    className: "modalContent"
  }, check && /*#__PURE__*/_react.default.createElement(_assets.StyledCircleIcon, {
    sizecheck: sizecheck,
    checkcolor: checkcolor
  }), /*#__PURE__*/_react.default.createElement(ModalTitle, {
    className: "modalTitle"
  }, modalTitle || "Employee created"), /*#__PURE__*/_react.default.createElement(ModalText, {
    className: "modalText"
  }, modalText || "If you want, you can create more !"), button && /*#__PURE__*/_react.default.createElement(ModalButton, {
    onClick: function onClick() {
      return setIsOpen(false);
    },
    className: "modalButton",
    buttonbg: buttonbg,
    buttonbgHover: buttonbgHover,
    buttonTextColor: buttonTextColor
  }, buttonText || "Close"))), /*#__PURE__*/_react.default.createElement(ModalOverlay, {
    className: "modalOverlay",
    onClick: function onClick() {
      return setIsOpen(false);
    },
    overlayColor: overlayColor
  })));
};
exports.Modal = Modal;