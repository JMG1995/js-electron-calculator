const getKey = () => {
  const keys = document.querySelectorAll("button");
  let result = document.querySelector(".screen__result");
  keys.forEach(key => {
    key.addEventListener("click", e => {
      const btn = e.target;
      const action = btn.dataset.action;
      if (!action) {
        console.log("number key");
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
      return (result.innerHTML = key.innerHTML);
    });
  });
};

getKey();
