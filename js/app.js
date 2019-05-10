const getKey = () => {
  const keys = document.querySelectorAll("button");
  let result = document.querySelector(".screen__result");
  keys.forEach(key => {
    return key.addEventListener("click", () => {
      result.innerHTML = key.innerHTML;
      console.log(key.innerHTML);
    });
  });
};

getKey();
