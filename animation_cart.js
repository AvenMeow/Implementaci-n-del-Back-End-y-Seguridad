const contenedorTarjetas = document.getElementById("containerProduct");
const unidadesElementos = document.getElementById("quantity");
const precioElementos = document.getElementById("price");
const carritoVacioMensaje = document.getElementById("emptyCart");
const contenedorTotales = document.getElementById("total");
const carritoComprado = document.getElementById("fullCart");
const carritoBorrado = document.getElementById("reboot");

/* Crear las tarjetas de productos teniendo en cuenta lo guardado en localStorage */
function crearTarjetasProductosInicio(){
  contenedorTarjetas.innerHTML = "";
  const products = JSON.parse(localStorage.getItem("items"));
  console.log(products);
  if (products && products.length > 0){
    products.forEach(products=> {
      const nuevoItem = document.createElement("div");
      nuevoItem.classList = "cardProduct";
      nuevoItem.innerHTML = `<img src="${products.id}.webp">
      <h3 class="product-name">${products.name}</h3>
      <p class="product-price">$${products.price}</p>
      <div class="quantity-controls">
       <button class="decrement-btn">-</button>
       <span class="product-quantity">${products.quantity}</span>
       <button class="increment-btn">+</button>
      </div>`;
      contenedorTarjetas.appendChild(nuevoItem);
  
      nuevoItem.getElementsByTagName("button")[1].addEventListener("click", (e)=> { 
        const numeroElementos = e.target.parentElement.getElementsByTagName("span")[0];
        numeroElementos.innerText = agregarAlCarrito(products);
        actualizarTotales();
      });
      nuevoItem.getElementsByTagName("button")[0].addEventListener("click", (e)=> {
        restarAlCarrito(products);
        crearTarjetasProductosInicio();
        actualizarTotales();
      });
    });
  }
  mostrarCarritoVacioMensaje();
}

crearTarjetasProductosInicio();
actualizarTotales();

/* Actualizar el total de precio y unidades de la página del carrito */
function actualizarTotales(){
  const products = JSON.parse(localStorage.getItem("items"));
  let unidades = 0;
  let precio = 0;
  if (products && products.length > 0){
    products.forEach(products=> {
      unidades += products.quantity;
      precio += products.price * products.quantity;
    });
    unidadesElementos.innerText = unidades;
    precioElementos.innerText = precio;
    if(precio === 0){
      reinicarCarrito();
      mostrarCarritoVacioMensaje();
    }
  }
}

/* Step4. front-end cart */
carritoComprado.addEventListener("click", async()=> { // Envía el contenido actual del carrito de compras almacenado en localStorage al servidor */
  const currentCart = JSON.parse(localStorage.getItem("items"));
  if (currentCart && currentCart.length > 0){
    const res = await fetch("http://localhost:3000/currentCart/fullCart", {
      method: "POST", // Especifica una solicitud POST para enviar datos al servidor
      headers: {"Content-Type": "application/json"}, // Define el tipo de contenido como JSON
      body: JSON.stringify(currentCart) // Convierte el carrito a JSON para enviarlo
    });
    if (res.ok){
      reinicarCarrito(); // Elimina los elementos de localStorage
      window.location.href = "http://127.0.0.1:5500/welldone.html" // Redirige al usuario a una página de confirmación de compra exitosa
    } 
  }
});

/* Borrar todos los elementos guardados en el carrito */
carritoBorrado.addEventListener("click", reinicarCarrito)
function reinicarCarrito(){
  localStorage.removeItem("items");
  actualizarTotales();
  crearTarjetasProductosInicio();
}

/* Mostrar o esconder el mensaje de inexistencias en el carrito */
function mostrarCarritoVacioMensaje(){
  const products = JSON.parse(localStorage.getItem("items"));
  carritoVacioMensaje.classList.toggle("hidden", products && products.length > 0);
  contenedorTotales.classList.toggle("hidden", !(products && products.length > 0));
}