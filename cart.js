const buttonEls = document.querySelectorAll(".add-to-cart");
const cart = document.querySelector("#cart");
const cartItems = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total");

let total = 0;

buttonEls.forEach(button => {
    button.addEventListener('click', addToCart);
  });

function addToCart(event) {
    const name = event.target.dataset.name;
    const price = Number(event.target.dataset.price);
 
    const item = document.createElement('li');
    item.innerText = `${name} - ${price}`;

    cartItems.appendChild(item);

    total += price;
    cartTotal.innerText = total.toFixed(2);
}