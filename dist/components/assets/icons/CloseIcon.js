"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCloseIcon = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _typography = require("../../utils/typography");
var _xmarkSolid = require("./xmark-solid.svg");
var _themes = require("../../utils/themes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var StyledCloseIcon = (0, _styledComponents.default)(_xmarkSolid.ReactComponent).attrs(function (props) {
  return {
    fill: props.closecolor || _themes.ColourShemes["green-300"],
    width: props.sizeclose || _typography.TypeScale.header4
  };
}).withConfig({
  displayName: "CloseIcon__StyledCloseIcon",
  componentId: "sc-mzevnb-0"
})(["fill:", ";width:", ";cursor:pointer;position:absolute;right:20px;top:20px;"], function (props) {
  return _themes.ColourShemes[props.closecolor];
}, function (props) {
  return _typography.TypeScale[props.sizeclose];
});

// & path {
// 	fill: ${({ color }) => color || "black"};
// }
exports.StyledCloseIcon = StyledCloseIcon;