"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCircleIcon = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _typography = require("../../utils/typography");
var _themes = require("../../utils/themes");
var _circle = require("./circle.svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var StyledCircleIcon = (0, _styledComponents.default)(_circle.ReactComponent).attrs(function (props) {
  return {
    fill: props.checkcolor || _themes.ColourShemes["green-300"],
    width: props.sizecheck || _typography.TypeScale.iconLarge
  };
}).withConfig({
  displayName: "CircleIcon__StyledCircleIcon",
  componentId: "sc-sm2r2w-0"
})(["fill:", ";width:", ";"], function (props) {
  return _themes.ColourShemes[props.checkcolor];
}, function (props) {
  return _typography.TypeScale[props.sizecheck];
});

// height: ${(props) => TypeScale[props.sizecheck]};
// 	width: ${(props) => TypeScale[props.sizecheck]};
exports.StyledCircleIcon = StyledCircleIcon;