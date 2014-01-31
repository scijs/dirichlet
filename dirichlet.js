"use strict"

var EPSILON = require("almost-equal").DBL_EPSILON

module.exports = dirichlet

var PI = Math.PI
var sin = Math.sin

function dirichlet(n, x) {
  var denom = sin(PI * x / n)
  if(-EPSILON <= denom && denom <= EPSILON) {
    return 1.0
  }
  return sin(PI * x) / (n * denom)
}