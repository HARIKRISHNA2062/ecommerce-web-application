const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cartItems");

let total = 0;

cartItems.forEach(item=>{

    total += item.price;

    cartContainer.innerHTML += `
    
    <div class="card">

        <h3>${item.name}</h3>

        <p>₹${item.price}</p>

    </div>

    `;

});

document.getElementById("total").innerHTML="Total : ₹"+total;