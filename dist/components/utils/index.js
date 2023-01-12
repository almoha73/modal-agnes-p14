"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _colors = require("./colors");
Object.keys(_colors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _colors[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _colors[key];
    }
  });
});
var _typography = require("./typography");
Object.keys(_typography).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _typography[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _typography[key];
    }
  });
});
var _themes = require("./themes");
Object.keys(_themes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _themes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _themes[key];
    }
  });
});