const contenedorTarjetas = document.getElementById("containerProduct");

/* Crear las tarjetas de productos */
function crearTarjetasProductosInicio(products){
  // Ordenar y seleccionar aleatoriamente los primeros seis productos
  const productosAleatorios = products.sort(() => 0.5 - Math.random()).slice(0, 6);
  
  productosAleatorios.forEach(products=> {
    const nuevoItem = document.createElement("div");
    nuevoItem.classList = "cardProduct";
    nuevoItem.innerHTML = `<img src="${products.id}.webp">
    <h3>${products.name}</h3>
    <p class="precio">$${products.price}</p>
    <button>Agregar al carrito</button>`;

    contenedorTarjetas.appendChild(nuevoItem);

    nuevoItem.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(products));
  });
}

/* Step3. back-end data in front-end */
getProducts().then(items=> {  // Recibe la lista de productos y luego muestra esos productos en la interfaz de usuario
  crearTarjetasProductosInicio(items);
})