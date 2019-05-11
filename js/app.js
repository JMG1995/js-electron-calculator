window.addEventListener("keydown", handleFirstTab);

const calculate = (firstNum, operator, secondNum) => {
  if (operator == "divide") {
    return parseFloat(firstNum) / parseFloat(secondNum);
  } else if (operator == "multiply") {
    return parseFloat(firstNum) * parseFloat(secondNum);
  } else if (operator == "add") {
    return parseFloat(firstNum) + parseFloat(secondNum);
  } else if (operator == "subtract") {
    return parseFloat(firstNum) - parseFloat(secondNum);
  }
};

const getKey = () => {
  const keys = document.querySelectorAll("button");
  let result = document.querySelector(".screen__result");
  const calculator = document.querySelector("#app");
  let previousKeyType = calculator.dataset.previousKeyType;

  keys.forEach(key => {
    key.addEventListener("click", e => {
      const btn = e.target;
      const action = btn.dataset.action;

      // check type of key pressed and perform appropriate function
      if (!action) {
        // appends numbers rather than replace
        if (
          result.textContent == "0" ||
          previousKeyType == "operator" ||
          previousKeyType == "equals"
        ) {
          result.textContent = key.textContent;
          previousKeyType = "number";
        } else {
          result.textContent += key.textContent;
        }
      } else if (
        action === "divide" ||
        action === "add" ||
        action === "subtract" ||
        action === "multiply"
      ) {
        if (previousKeyType === "operator") {
          return result.textContent;
        }
        const firstVal = calculator.dataset.firstVal;
        const operator = calculator.dataset.operator;
        const secondval = result.textContent;
        // hitting an operator key will sum the previous 2 numbers
        if (firstVal && operator) {
          result.textContent = calculate(firstVal, operator, secondval);
        }
        previousKeyType = "operator";
        calculator.dataset.firstVal = result.textContent;
        calculator.dataset.operator = action;
      } else if (
        // adds decimal if does not exist
        action === "decimal" &&
        !result.textContent.includes(".")
      ) {
        // clicking decimal results in "0." if previous button was operator
        if (previousKeyType == "operator") {
          result.textContent = "0";
        }
        result.textContent += key.textContent;
        previousKeyType = "decimal";
      } else if (action === "equals") {
        if (
          previousKeyType == "equals" ||
          previousKeyType == "decimal" ||
          previousKeyType == "operator"
        ) {
          return result.textContent;
        }
        previousKeyType = "equals";
        const firstVal = calculator.dataset.firstVal;
        const operator = calculator.dataset.operator;
        const secondval = result.textContent;

        result.textContent = calculate(firstVal, operator, secondval);
      }
      // end check
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
