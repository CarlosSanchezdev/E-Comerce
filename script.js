



// function renderizarCarrito() {
//     DOMcarrito.textContent = '';
//     const carritoSinDuplicados = [...new Set(carrito)];
//     carritoSinDuplicados.forEach((item) => {

//         const miItem = baseDeDatos.filter((itemBaseDatos) => {
//             return itemBaseDatos.id === parseInt(item);
//         });

//         const numeroUnidadesItem = carrito.reduce((total, itemId) => {

//             return itemId === item ? total += 1 : total;
//         }, 0);

//         const miNodo = document.createElement('li');
//         miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
//         miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;

//         const miBoton = document.createElement('button');
//         miBoton.classList.add('btn', 'btn-danger', 'mx-5');
//         miBoton.textContent = 'X';
//         miBoton.style.marginLeft = '1rem';
//         miBoton.dataset.item = item;
//         miBoton.addEventListener('click', borrarItemCarrito);
//         miNodo.appendChild(miBoton);
//         DOMcarrito.appendChild(miNodo);
//     });

//     DOMtotal.textContent = calcularTotal();
// }


// function borrarItemCarrito(evento) {
//     const id = evento.target.dataset.item;
//     carrito = carrito.filter((carritoId) => {
//         return carritoId !== id;
//     });

//     renderizarCarrito();
// }


// function calcularTotal() {

//     return carrito.reduce((total, item) => {

//         const miItem = baseDeDatos.filter((itemBaseDatos) => {
//             return itemBaseDatos.id === parseInt(item);
//         });

//         return total + miItem[0].precio;
//     }, 0).toFixed(2);
// }


// function vaciarCarrito() {
//     carrito = [];
//     renderizarCarrito();
// }

// DOMbotonVaciar.addEventListener('click', vaciarCarrito);


// renderizarProductos();
// renderizarCarrito();



let DOMcart = document.querySelector('.main-cart');
let DOMbuttonAdd = document.querySelector('#product-button');

DOMbuttonAdd.addEventListener("click", AddtoCart())
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
    


let Cart = JSON.parse(localStorage.getItem("Cart")) || []

function AddtoCart(newItem) {
    switch (Cart.indexOf(newItem)){
        case ('-1'):{
            Cart.push(newItem)
        }

    }
}

