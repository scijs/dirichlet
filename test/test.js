"use strict"

var tape = require("tape")
var dirichlet = require("../dirichlet")
var almostEqual = require("almost-equal")

tape("dirichlet", function(t) {

  t.ok(almostEqual(dirichlet(10, 0), 1, almostEqual.DBL_EPSILON, almostEqual.DBL_EPSILON))
  t.ok(almostEqual(dirichlet(10, 2), 0, almostEqual.DBL_EPSILON, almostEqual.DBL_EPSILON))
  t.ok(almostEqual(dirichlet(10, 10), 1, almostEqual.DBL_EPSILON, almostEqual.DBL_EPSILON))
  t.end()
})