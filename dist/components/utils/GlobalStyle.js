"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = require("styled-components");
var _themes = require("./themes");
var _typography = require("./typography");
var GlobalStyle = (0, _styledComponents.createGlobalStyle)(["*,::after,::before{margin:0;padding:0;box-sizing:border-box;}body{background:", ";font-family:", ";}"], _themes.ColourShemes["green-500"], _typography.primaryFont);
var _default = GlobalStyle;
exports.default = _default;