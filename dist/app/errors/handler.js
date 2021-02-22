"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _yup = require("yup");

const errorHandler = (error, req, res, next) => {
  if (error instanceof _yup.ValidationError) {
    let errors = {};
    error.inner.forEach(err => {
      if (err.path) errors[err.path] = err.errors;
    });
    return res.status(400).json({
      message: "Validation fails",
      errors
    });
  }

  return res.status(500).json({
    info: "Internal server error",
    error
  });
};

var _default = errorHandler;
exports.default = _default;