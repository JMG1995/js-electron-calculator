const numKey = (btnValue, screenNum) => {
  switch (screenNum.textContent) {
    case "0":
      screenNum.textContent = btnValue.textContent;
      break;
    default:
      screenNum.textContent += btnValue.textContent;
      break;
  }
};

export default numKey;
