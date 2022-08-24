function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin;
  }
}

function generatePin() {
  const pin = getPin();
  document.getElementById("pingenerate").value = pin;
}
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return pin;
  }
}

document.getElementById("key-pad").addEventListener("click", (event) => {
  const number = event.target.innerText;
  const calInput = document.getElementById("typed-numbers");
  if (isNaN(number)) {
    if (number == "C") {
      calInput.value = "";
    }
  } else {
    const previousNumber = calInput.value;
    const newNumber = previousNumber + number;
    calInput.value = newNumber;
  }
});

function verifyPin() {
  const pin = document.getElementById("pingenerate").value;
  const typeNumber = document.getElementById("typed-numbers").value;
  const notifySuccess = document.getElementById("notify-success");
  const failError = document.getElementById("notify-fail");
  if (pin == typeNumber) {
    notifySuccess.style.display = "block";
    failError.style.display = "none";
  } else {
    notifySuccess.style.display = "none";
    failError.style.display = "block";
  }
}
