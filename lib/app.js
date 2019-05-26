"use strict";

var _buttonLogic = require("./buttonLogic");

var keys = document.querySelectorAll("button");
var result = document.querySelector(".screen__result");

var getKey = function getKey() {
  keys.forEach(function (key) {
    key.addEventListener("click", function (e) {
      var btn = e.target;
      var action = btn.dataset.action;

      if (!action) {
        (0, _buttonLogic.numKey)(btn, result);
      } else if (action === "divide" || action === "add" || action === "subtract" || action === "multiply") {
        console.log("operator key");
      } else if (action === "decimal") {
        console.log("decimal key");
      } else if (action === "equals") {
        console.log("equals key");
      }

      if (key === "=") {
        return null;
      }
    });
  });
};

getKey();