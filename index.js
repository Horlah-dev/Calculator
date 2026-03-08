let display = document.getElementById("display");
let value = "0";
function updateDisplay(){
  display.textContent = value;
}
function appendNumber(num) {
  if (value === "0") {
    value = num;
  } else {
    value += num;
  }
  updateDisplay()
  }

function appendOperator(operator) {
    if (value.slice(-1,)){
      value += operator;
      updateDisplay();
    }
  }

  function clearAll(){
    value = "0";
    updateDisplay()
  }
  function deleteLast() {
    if (value.length > 1) {
      value = value.slice(0, -1);
    } else{
      value = "0";
    }
    updateDisplay();
  }
  function percent() {
    value = ((value / 100));
    updateDisplay();
  }
  function calculate() {
    value = eval(value);
  updateDisplay();
  }
