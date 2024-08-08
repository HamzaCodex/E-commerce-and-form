document.addEventListener('DOMContentLoaded', function() {

    var user = localStorage.getItem("loggedinuser");
    var displayname = document.getElementById("welcome-message");
    displayname.textContent = "Hello, " + user;

    let cart = [];
    let totalPrice = 0;

    function loadCart() {
        let cloudtotal = JSON.parse(localStorage.getItem("userstotal")) || {};
        let cloudcart = JSON.parse(localStorage.getItem("userscart"));

        totalPrice = cloudtotal[user] || 0;
        console.log('Total Price from storage:', totalPrice);

        cart = cloudcart[user] || [];
        console.log("Total items in cart: ", cart);

        updateCartDisplay(); 
    }
    loadCart()

    function addToCart(productName, price) {
        console.log(`Adding ${productName} to cart at $${price}`);
        cart.push({ productName, price });
        totalPrice += price;
        updateCartDisplay();

        let userstotal = JSON.parse(localStorage.getItem("userstotal")) || {};
        userstotal[user] = totalPrice;
        localStorage.setItem("userstotal", JSON.stringify(userstotal));

        let userscart = JSON.parse(localStorage.getItem("userscart")) || {};
        userscart[user] = cart;
        localStorage.setItem("userscart", JSON.stringify(userscart));
        console.log(userscart[user]);
    }

    function updateCartDisplay() {
        console.log("Updating cart display");
        const cartItems = document.getElementById('cart-items');
        const totalPriceElement = document.getElementById('total-price');

        cartItems.innerHTML = ""; 

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.productName} - $${item.price}`;
            cartItems.appendChild(itemElement);
        });

        totalPriceElement.textContent = `Total Price: $${totalPrice}`;
    }

    document.querySelector('.Markxbt').addEventListener('click', () => addToCart('Markx', 20));
    document.querySelector('#Markxbt2').addEventListener('click', () => addToCart('Markx Modified', 100));

});
