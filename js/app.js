<<<<<<< HEAD
window.addEventListener("keydown", handleFirstTab);
const keys = document.querySelectorAll("button");
let result = document.querySelector(".screen__result");
const screen = document.querySelector(".screen");
const operator = document.querySelectorAll("button .item__operator");

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
  // appends numbers rather than replaces

  if (result.textContent === "0") {
    return (result.textContent = item.textContent);
  } else if (prevKey == "operator" || prevKey == "equals") {
    console.log("test:", "test");
    return (result.textContent = item.textContent);
  } else {
    return (result.textContent += item.textContent);
  }
};

const operatorKey = (prevKey, action, calc) => {
  if (prevKey == "operator" || prevKey == "equals") {
    ("console.log('worked:', worked)");
    return result.textContent;
  }
  const firstVal = calc.dataset.firstVal;
  const operator = calc.dataset.operator;
  const secondval = result.textContent;
  // hitting an operator key will sum the previous 2 numbers
  if (firstVal && operator) {
    return (result.textContent = calculate(firstVal, operator, secondval));
  }
  calc.dataset.firstVal = result.textContent;
  calc.dataset.operator = action;
  return (prevKey = "operator");
};

const decimal = (prevKey, item) => {
  // clicking decimal results in "0." if previous button was operator
  if (prevKey == "operator") {
    result.textContent = "0";
  }
  return (result.textContent += item.textContent);
  // return (prevKey = "decimal");
};

const equals = (prevKey, calc) => {
  if (prevKey == "equals" || prevKey == "decimal" || prevKey == "operator") {
    return result.textContent;
  }
  // prevKey = "equals";
  const firstVal = calc.dataset.firstVal;
  const operator = calc.dataset.operator;
  const secondval = result.textContent;

  return (result.textContent = calculate(firstVal, operator, secondval));
};

const getKey = () => {
=======
const getKey = () => {
  const keys = document.querySelectorAll("button");
  let result = document.querySelector(".screen__result");
>>>>>>> parent of 9da72c5... add calculator functionality. add button press effects
  keys.forEach(key => {
    key.addEventListener("click", e => {
      const btn = e.target;
      const action = btn.dataset.action;
<<<<<<< HEAD
      const calculator = document.querySelector("#app");
      let previousKeyType = calculator.dataset.previousKeyType;

      // check type of key pressed and perform appropriate function

      if (!action) {
        numKey(previousKeyType, key);
        console.log("prevKey", previousKeyType);
=======
      if (!action) {
        console.log("number key");
>>>>>>> parent of 9da72c5... add calculator functionality. add button press effects
      } else if (
        action === "divide" ||
        action === "add" ||
        action === "subtract" ||
        action === "multiply"
      ) {
<<<<<<< HEAD
        return operatorKey(previousKeyType, action, calculator);
      } else if (
        // adds decimal if does not exist
        action === "decimal" &&
        !result.textContent.includes(".")
      ) {
        decimal(previousKeyType, key);
        previousKeyType = "decimal";
      } else if (action === "equals") {
        equals(previousKeyType, calculator);
        previousKeyType = "equals";
      }
      // Restrict numbers shown
      // if (result.textContent.length > 16) {
      //   result.textContent;
      // } else if (result.textContent.length > 13) {
      //   screen.style.fontSize = "1.4em";
      // } else if (result.textContent.length > 11) {
      //   screen.style.fontSize = "1.6em";
      // } else if (result.textContent.length > 9) {
      //   screen.style.fontSize = "2em";
      // }

      // end check
=======
        console.log("operator key");
      } else if (action === "decimal") {
        console.log("decimal key");
      } else if (action === "equals") {
        console.log("equals key");
      }

      if (key === "=") {
        return null;
      }
      return (result.innerHTML = key.innerHTML);
>>>>>>> parent of 9da72c5... add calculator functionality. add button press effects
    });
  });
};

getKey();
