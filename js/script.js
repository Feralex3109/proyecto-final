document.addEventListener("DOMContentLoaded", function () {
  const cartRows = document.querySelectorAll(".cart-row");
  const cartTotal = document.querySelector(".cart-total-price");
  const btnPurchase = document.querySelector(".btn-purchase");

  function updateCartTotal() {
    let total = 0;
    cartRows.forEach((row) => {
      const priceElement = row.querySelector(".cart-price");
      const quantityElement = row.querySelector(".cart-quantity-input");
      const price = parseFloat(priceElement.textContent.replace("$", ""));
      const quantity = parseInt(quantityElement.value);
      total += price * quantity;
    });
    cartTotal.textContent = `$ ${total.toFixed(2)}`;
  }

  function handleQuantityChange(event) {
    const input = event.target;
    if (input.value < 0) {
      input.value = 0;
    }
    updateCartTotal();
  }

  function handleDeleteButtonClick(event) {
    const button = event.target;
    const row = button.closest(".cart-row");
    row.remove();
    updateCartTotal();
  }

  function handlePurchaseButtonClick() {
    alert(`Total a pagar: ${cartTotal.textContent}`);
  }

  cartRows.forEach((row) => {
    const quantityInput = row.querySelector(".cart-quantity-input");
    const deleteButton = row.querySelector(".btn-danger");

    quantityInput.addEventListener("input", handleQuantityChange);
    deleteButton.addEventListener("click", handleDeleteButtonClick);
  });

  btnPurchase.addEventListener("click", handlePurchaseButtonClick);
});
