const productList = document.getElementById("productList");

async function loadProducts() {

    try {

        const response = await fetch("http://localhost:5000/api/products");

        const products = await response.json();

        productList.innerHTML = "";

        products.forEach(product => {

            productList.innerHTML += `
                <div class="card">
                    <h3>${product.name}</h3>
                    <p>₹${product.price}</p>

                    <button onclick='addToCart(${JSON.stringify(product)})'>
                        Add to Cart
                    </button>

                </div>
            `;

        });

    } catch (err) {

        console.log(err);

    }

}

function addToCart(product){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product Added Successfully");

}

loadProducts();