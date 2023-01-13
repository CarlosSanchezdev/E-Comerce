const divisa = '€';
const DOMnew = document.querySelector('#new');
const DOMproducts = document.querySelector('#products');
const DOMexclusive = document.querySelector('#exclusive');
const DOMtotalItem = document.querySelectorAll('.totalItem')





function renderIndex() {

    var news = products.filter(item => item.category == "New");
    var product = products.filter(item => item.category == "Products");
    var exclusive = products.filter(item => item.category == "Exclusive");

    news.forEach((item) => { DOMnew.appendChild(printNew(item)) });

    product.forEach((item) => { DOMproducts.appendChild(printNew(item)) });

    exclusive.forEach((item) => { DOMexclusive.appendChild(printNew(item)) });

}


function printNew(item) {

    const myProduct = document.createElement("div");
    myProduct.id = "box";

    const myProductTitle = document.createElement('h2');
    myProductTitle.innerText = item.name;
    myProductTitle.id = 'product-title';

    const myProductImage = document.createElement("img");
    myProductImage.src = item.image;
    myProductImage.id = 'product-image';

    const myProductDescription = document.createElement('p');
    myProductDescription.innerText = item.description;
    myProductDescription.id = 'product-description';

    const myProductPrice = document.createElement("p");
    myProductPrice.innerText = item.price + divisa;
    myProductPrice.id = 'product-price';

    const myProductButton = document.createElement("button");
    myProductButton.innerHTML = "Shop"
    myProductButton.id = 'product-button';
    myProductButton.setAttribute('marker', item.id);
    myProductButton.addEventListener('click', shoppingButton);


    myProduct.appendChild(myProductTitle);
    myProduct.appendChild(myProductImage);
    myProduct.appendChild(myProductDescription);
    myProduct.appendChild(myProductPrice);
    myProduct.appendChild(myProductButton);
    return myProduct
}



function shoppingButton(event) {

    let des = event.target.getAttribute('marker')
    console.info(des)
    let storage = products[des];

    let prueba = products.find(element => element.id = des)
    console.info(prueba)

    const exist = cart.some(product => product.id === storage.id);
    if (exist) {
        const pro = cart.map(product => {
            if (product.id === storage.id) {
                product.quantity++;
                return product;
            } else {
                return product
            }
        });
        cart = [...pro]

    }else {
        cart.push(storage)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    location.reload()
    console.info(cart)
    totalItem2()
    location.reload()
}

DOMtotalItem.forEach (boton => {
    boton.innerHTML += totalItem2()
})

//DOMtotalItemIndex.innerHTML += totalItem;

renderIndex();


console.info(cart)
