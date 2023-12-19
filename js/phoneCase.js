document.getElementById("btn-case-plus").addEventListener("click", () => {
  const caseInputField = getinputCountValue("case-number-field", true);
  const caseTotal = document.getElementById("case-total");
  const priceTotal = caseInputField * 59;
  caseTotal.innerText = priceTotal;

  updateSubTotalElement();
});

document.getElementById("btn-case-minus").addEventListener("click", () => {
  const caseInputField = getinputCountValue("case-number-field", false);
  const caseTotal = document.getElementById("case-total");
  const priceTotal = caseInputField * 59;
  caseTotal.innerText = priceTotal;

  updateSubTotalElement();
});
