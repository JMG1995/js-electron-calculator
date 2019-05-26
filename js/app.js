import numKey from "./numLogic.js";

const keys = document.querySelectorAll("button");
let result = document.querySelector(".screen__result");
window.addEventListener("keydown", handleFirstTab);

const getKey = () => {
  keys.forEach(key => {
    key.addEventListener("click", e => {
      const btn = e.target;
      const action = btn.dataset.action;
      if (!action) {
        numKey(btn, result);
      } else if (
        action === "divide" ||
        action === "add" ||
        action === "subtract" ||
        action === "multiply"
      ) {
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

// Add focus outline if user is not using mouse
function handleFirstTab(e) {
  if (e.keyCode === 9) {
    // the "I am a keyboard user" key
    document.body.classList.add("user-is-tabbing");
    window.removeEventListener("keydown", handleFirstTab);
  }
}
