const calculator = () => {
  const inputFirst = document.querySelector("#input1"),
    inputSecond = document.querySelector("#input2"),
    plus = document.querySelector("#plus"),
    minus = document.querySelector("#minus"),
    resultButton = document.querySelector("#submit"),
    resultValue = document.querySelector("#result");

  let action = "+";

  function actionValue() {
    plus.addEventListener("click", (e) => {
      if (e.target) {
        action = "+";
      }
    });

    minus.addEventListener("click", (e) => {
      if (e.target) {
        action = "-";
      }
    });
  }

  function clearInputs() {
    inputFirst.value = "";
    inputSecond.value = "";
  }

  resultButton.addEventListener("click", (e) => {
    e.preventDefault()
    
    const sumFirst = Number(inputFirst.value),
          sumSecond = Number(inputSecond.value)

    if(action === '+') {
      resultValue.textContent = sumFirst + sumSecond
    } else {
      resultValue.textContent = sumFirst - sumSecond
    }

    clearInputs()
  })

  actionValue();
};

document.addEventListener("DOMContentLoaded", calculator);
