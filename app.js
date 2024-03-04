// Initialize cart object to store items and their quantities
var cart = [];
var quantity = 0;

var url = `https://wa.me/919000000000?text=Order details This was our `;

function update(cart) {
    var cart = document.getElementById("cart-value");
    cart.innerText = quantity;
}

function addToCart(item) {
    var closest = item.closest("div[id]");
    var id = closest.id;
    var element = document.getElementById(id);
    var name_html = document.querySelector(`#${element.id} div h3`);
    var price_html = document.querySelector(`#${element.id} .buy p`);
    var name = name_html.innerText;
    var price_$ = price_html.innerText;
    var price = parseFloat(price_$.replace("$", ""));
    quantity += 1;
    // checking whether the name of the product is already in the cart
    var index = cart.findIndex(function (cartItem) 
    {
        return cartItem.name.indexOf(name) > -1;
    });

    if (index === -1) {
    // If not adding new items
    var tempcart = { name: name, price: price, quantity: 1 };
    cart.push(tempcart);
    } 
    else {
    // if it is already just add the quantity to the cart
    cart[index].quantity++;
    }
    update(cart);
}

var totalAmount = 0;

function printCart(cart) {
  cart.forEach(function (item) {
    console.log(`Item name: ${item.name} - Quantity: ${item.quantity}`);
    totalAmount += item.price * item.quantity;
    url += `${item.name} ${item.quantity} `;
  });
  printTotal(totalAmount);
}

function printTotal(totalAmount) {
    var dollar = Math.floor(totalAmount);
    var cent = Math.floor((totalAmount - dollar) * 100);
    url += `Total price:$${dollar} ${cent}c`;
    console.log(`the total amount is ${dollar}$ and ${cent} cents`);
}

function new_tab() {
  window.open(url, "_blank");
}