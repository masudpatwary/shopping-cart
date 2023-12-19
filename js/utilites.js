function getinputCountValue(getInput, isIncrease) {
  const phoneCount = document.getElementById(getInput, isIncrease);
  const phoneCountString = phoneCount.value;
  const previouscountNumber = parseInt(phoneCountString);

  let newNumberField;

  if (isIncrease === true) {
    newNumberField = previouscountNumber + 1;
  } else {
    newNumberField = previouscountNumber - 1;
  }

  phoneCount.value = newNumberField;
  return newNumberField;
}

function getTextElementValueById(elementId) {
  const totalElement = document.getElementById(elementId);
  const totalElementIdString = totalElement.innerText;
  const currentTextTotalElement = parseFloat(totalElementIdString);
  return currentTextTotalElement;
}

function setElementValueById(elementId, newValue) {
  const element = document.getElementById(elementId);
  element.innerText = newValue;
}

function updateSubTotalElement() {
  const currentPhoneTotal = getTextElementValueById("phone-total");
  const currentCaseTotal = getTextElementValueById("case-total");

  const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  setElementValueById("sub-total", currentSubTotal);

  const taxTotal = currentSubTotal * 0.1;
  const taxtTotalString = setElementValueById(
    "tax-amount",
    taxTotal.toFixed(2)
  );

  const finalAmount = taxTotal + currentSubTotal;
  setElementValueById("final-total", finalAmount);
}
