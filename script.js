let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;

  const confirmation = document.getElementById("confirmation");
  confirmation.classList.remove("hidden");
  setTimeout(() => {
    confirmation.classList.add("hidden");
  }, 1500);
}