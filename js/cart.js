function closeCart() {
    document.getElementById("cart-background").style.display = "none";
}

function addToCart() {
    var quantity = document.getElementById("quantity").value;
    var name = document.getElementById("name").innerText;
    var price = document.getElementById("price").innerText.split("Rs. ")[1];
    var image = document.getElementById("product-image").getAttribute("src");

    document.documentElement.scrollTop = 0;
    document.getElementById("cart-background").style.display = "block";

    var cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    var cartItemImage = document.createElement("div");
    cartItemImage.classList.add("cart-item-img");

    var cartItemImageImg = document.createElement("img");
    cartItemImageImg.setAttribute("src", image);
    cartItemImage.appendChild(cartItemImageImg);

    cartItem.appendChild(cartItemImage);

    var cartItemText = document.createElement("div");
    cartItemText.classList.add("cart-item-text");

    var cartItemTextName = document.createElement("div");
    cartItemTextName.classList.add("cart-item-text-name");
    cartItemTextName.innerText = name;

    var cartItemTextPrice = document.createElement("p");
    cartItemTextPrice.classList.add("cart-item-text-price");
    cartItemTextPrice.innerText = "Rs. " + price;

    cartItemText.appendChild(cartItemTextName);
    cartItemText.appendChild(cartItemTextPrice);

    var cartItemQuantity = document.createElement("div");
    cartItemQuantity.classList.add("cart-item-quantity");

    var cartItemQuantityText = document.createElement("p");
    cartItemQuantityText.classList.add("cart-item-quantity-text");
    cartItemQuantityText.innerText = quantity;

    cartItemQuantity.appendChild(cartItemQuantityText);

    cartItem.appendChild(cartItemText);
    cartItem.appendChild(cartItemQuantity);

    document.getElementById("cart-items").appendChild(cartItem);

    var totalAmount = document.getElementById("totalAmount");
    totalAmount.innerText = parseInt(totalAmount.innerText) + (parseInt(price) * quantity);
}