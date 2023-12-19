document.getElementById("btn-phone-plus").addEventListener("click", () => {
  const newNumberField = getinputCountValue("phone-number-field", true);
  const previousPrice = document.getElementById("phone-total");
  const totalPrice = newNumberField * 1219;
  previousPrice.innerText = totalPrice;

  updateSubTotalElement();
});

document.getElementById("btn-phone-minus").addEventListener("click", () => {
  const newNumberField = getinputCountValue("phone-number-field", false);
  const totalPhonePrice = newNumberField * 1219;
  const previousPrice = document.getElementById("phone-total");
  previousPrice.innerText = totalPhonePrice;

  updateSubTotalElement();
});
