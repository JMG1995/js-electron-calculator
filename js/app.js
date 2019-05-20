window.addEventListener("keydown", handleFirstTab);
const keys = document.querySelectorAll("button");
let result = document.querySelector(".screen__result");
const screen = document.querySelector(".screen");
const calculator = document.querySelector("#app");

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

const numKey = (prevKey, item) => {
  // appends numbers rather than replace
  if (
    result.textContent == "0" ||
    prevKey == "operator" ||
    prevKey == "equals" ||
    prevKey === ""
  ) {
    return (result.textContent = item.textContent);
  } else {
    prevKey = "number";
    return (result.textContent += item.textContent);
  }
};

const operatorKey = (prevKey, action) => {
  if (prevKey == "operator" || prevKey == "equals") {
    return result.textContent;
  }
  const firstVal = calculator.dataset.firstVal;
  const operator = calculator.dataset.operator;
  const secondval = result.textContent;
  // hitting an operator key will sum the previous 2 numbers
  if (firstVal && operator) {
    result.textContent = calculate(firstVal, operator, secondval);
  }
  prevKey = "operator";
  calculator.dataset.firstVal = result.textContent;
  calculator.dataset.operator = action;
};

const decimal = (prevKey, item) => {
  // clicking decimal results in "0." if previous button was operator
  if (prevKey == "operator") {
    result.textContent = "0";
  }
  result.textContent += item.textContent;
  return (prevKey = "decimal");
};

const equals = prevKey => {
  if (prevKey == "equals" || prevKey == "decimal" || prevKey == "operator") {
    return result.textContent;
  }
  prevKey = "equals";
  const firstVal = calculator.dataset.firstVal;
  const operator = calculator.dataset.operator;
  const secondval = result.textContent;

  return (result.textContent = calculate(firstVal, operator, secondval));
};

const getKey = () => {
  keys.forEach(key => {
    key.addEventListener("click", e => {
      const btn = e.target;
      const action = btn.dataset.action;
      console.log(action);
      let previousKeyType = calculator.dataset.previousKeyType;
      // check type of key pressed and perform appropriate function
      if (!action) {
        numKey(previousKeyType, key);
      } else if (
        action === "divide" ||
        action === "add" ||
        action === "subtract" ||
        action === "multiply"
      ) {
        operatorKey(previousKeyType, action);
      } else if (
        // adds decimal if does not exist
        action === "decimal" &&
        !result.textContent.includes(".")
      ) {
        decimal(previousKeyType, key);
      } else if (action === "equals") {
        equals(previousKeyType);
      }

      if (result.textContent.length > 16) {
        result.textContent;
      } else if (result.textContent.length > 13) {
        screen.style.fontSize = "1.4em";
      } else if (result.textContent.length > 11) {
        screen.style.fontSize = "1.6em";
      } else if (result.textContent.length > 9) {
        screen.style.fontSize = "2em";
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
