var a = 5;
let b = 10;
const c = 15;
const name = "Yanis";
const array = ["Привет", b, name];
const cartButton = document.getElementById("cart-btn");

cartButton.addEventListener("click", function () {
  this.style.background = "green";
});
