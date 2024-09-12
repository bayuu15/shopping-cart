const products = [
    {
        id:1,
        product_name: 'SEPATU',
        price: 100000,
        description: 'SEPATU',
        img_url: 'products/product-1.jpeg',
        qty: 10,
    },
    {
        id:2,
        product_name: 'SEPATU 2',
        price: 200000,
        description: 'SEPATU 2',
        img_url: 'products/product-2.jpeg',
        qty: 10,
    },
    {
        id:3,
        product_name: 'SEPATU 3',
        price: 300000,
        description: 'SEPATU 3',
        img_url: 'products/product-3.jpeg',
        qty: 10,
    },
]


const listProducts = document.getElementById('list-products')
const productView = products.map(product =>    
    
        `<div class="col-lg-4 col-12">
        <div class="card" style="width: 18rem;">
            <img src="${product.img_url}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${product.product_name}</h5>
            <p class="card-text">HARGA: <span></span>${product.price}</p>
            <p class="card-text">Qty: <span>${product.qty}</span></p>
            <p class="card-text">Deskripsi: <span>${product.description}</span></p>
            <a href="#" class="btn btn-primary">
                <i class="fa-solid fa-cart-shopping text-light"></i>
                Add to cart
            </a>
            </div>
        </div>
        </div>`).join(",").replaceAll(",","")

listProducts.innerHTML = productView

