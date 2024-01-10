document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  let total = document.querySelector(".total");
  let leftSide;
  let rightSide;
  let currentOperand;

  let operations = document.querySelectorAll(".operation");
  let numbers = document.querySelectorAll(".number");

  console.log(numbers);

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener("click", function () {
      if (total.innerHTML == 0) {
        total.innerHTML = number.innerHTML;
      } else {
        total.innerHTML += number.innerHTML;
      }
    });
  }

  for (let i = 0; i < operations.length; i++) {
    let operation = operations[i];

    operation.addEventListener("click", function () {
      let action = operation.innerHTML;
      switch (action) {
        case "C":
          total.innerHTML = "0";
          currentOperand = null;
          leftSide = null;

          break;
        case "←":
          if (total.innerHTML.length == 1) {
            total.innerHTML = "0";
          } else {
            total.innerHTML = total.innerHTML.substring(
              0,
              total.innerHTML.length - 1
            );
          }
          break;
        case "÷":
          if (leftSide) {
            break;
          } else {
            leftSide = total.innerHTML;
            currentOperand = "÷";
            total.innerHTML = "0";
          }
          break;
        case "x":
          if (leftSide) {
            break;
          } else {
            leftSide = total.innerHTML;
            currentOperand = "x";
            total.innerHTML = "0";
          }
          break;
        case "-":
          if (leftSide) {
            break;
          } else {
            leftSide = total.innerHTML;
            currentOperand = "-";
            total.innerHTML = "0";
          }
          break;
        case "+":
          if (leftSide) {
            break;
          } else {
            leftSide = total.innerHTML;
            currentOperand = "+";
            total.innerHTML = "0";
          }
          break;
        case "=":
          switch (currentOperand) {
            case "+":
              total.innerHTML = parseInt(leftSide) + parseInt(total.innerHTML);
              currentOperand = null
              leftSide = null
              
              break;
            case "x":
              total.innerHTML = parseInt(leftSide) * parseInt(total.innerHTML);
              currentOperand = null;
              leftSide = null;
              break;
            case "-":
              total.innerHTML = parseInt(leftSide) - parseInt(total.innerHTML);
              currentOperand = null;
              leftSide = null;
              break;
            case "÷":
              total.innerHTML = parseInt(leftSide) / parseInt(total.innerHTML);
              currentOperand = null;
              leftSide = null;
              break;
          }
          
      }

    });
  }
});
