let adminProducts = JSON.parse(localStorage.getItem("adminProducts")) || [];

displayProducts();

function addProduct(){

    const name=document.getElementById("productName").value;
    const price=document.getElementById("productPrice").value;

    if(name==="" || price===""){

        alert("Please fill all fields");

        return;
    }

    adminProducts.push({
        name,
        price
    });

    localStorage.setItem("adminProducts",JSON.stringify(adminProducts));

    document.getElementById("productName").value="";
    document.getElementById("productPrice").value="";

    displayProducts();

}

function displayProducts(){

    const container=document.getElementById("adminProducts");

    container.innerHTML="";

    adminProducts.forEach((product,index)=>{

        container.innerHTML+=`

        <div class="card">

        <h3>${product.name}</h3>

        <p>₹${product.price}</p>

        <button onclick="deleteProduct(${index})">

        Delete

        </button>

        </div>

        `;

    });

}

function deleteProduct(index){

    adminProducts.splice(index,1);

    localStorage.setItem("adminProducts",JSON.stringify(adminProducts));

    displayProducts();

}