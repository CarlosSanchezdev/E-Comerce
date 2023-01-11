
let DOMcart = document.querySelector('.main-cart');
let DOMbuttonAdd = document.querySelector('#product-button');


// console.info(products)





// function PrintCart (){
// }   
   




products.forEach((item) => {
        let print = document.createElement('div');
        print.innerHTML = `
        <div class="itemCart" style="height: 15vh;">
            <img src="${item.image}">
            <div>
                <h5>${item.name}</h5>
                <button>borrar</button>
            </div>
            <div>
                <button>-</button>
                <p>cantidad</p>
                <button>+</button>
            </div>
            <div>
                <p>${item.price}€</p>
            </div>
            <div>
                <p>total €</p>
            </div>
        </div>
        `;
    
    DOMcart.append(print);
})
    

DOMbuttonAdd.addEventListener("click", AddtoCart())
let Cart = JSON.parse(localStorage.getItem("Cart")) || []

function AddtoCart(newItem) {
    switch (Cart.indexOf(newItem)){
        case ('-1'):{
            Cart.push(newItem)
        }

    }
}

