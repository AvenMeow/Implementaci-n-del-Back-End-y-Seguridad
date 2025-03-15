/* Tomar un producto o un objeto con al menos un ID y agregarlo al carrito */
function agregarAlCarrito(product){
  // Revisa si el producto está en el carrito
  const memoria = JSON.parse(localStorage.getItem("items"));
  console.log(memoria);
  let count = 0;
  // Si no hay localStorage, se agrega:
  if (!memoria){
    const productoNuevo = getNuevoProductoParaMemoria(product);
    localStorage.setItem("items",JSON.stringify([productoNuevo]));
    count = 1;
  } else {
    // Si hay localStorage, fijarse si el artículo ya está ahí:
    const productoIndice = memoria.findIndex(item => item.id === product.id);
    console.log(productoIndice);
    const memoriaNueva = memoria;
    // Si el producto no está en el carrito, se agrega:
    if (productoIndice === -1) {
      memoriaNueva.push(getNuevoProductoParaMemoria(product));
      count = 1;
    } else {
      // Si el producto está en el carrito, +1 a la cantidad:
      memoriaNueva[productoIndice].quantity++;
      count = memoriaNueva[productoIndice].quantity;
    }
    localStorage.setItem("items",JSON.stringify(memoriaNueva));
  }
  actualizarConteoCarrito();
  return count;
}

/* Restar una unidad de un producto del carrito */
function restarAlCarrito(product){
  const memoria = JSON.parse(localStorage.getItem("items"));
  const productoIndice = memoria.findIndex(item => item.id === product.id);
  if (memoria[productoIndice].quantity === 1){
    memoria.splice(productoIndice, 1);
  } else {
    memoria[productoIndice].quantity--;
  }
  localStorage.setItem("items",JSON.stringify(memoria));
  actualizarConteoCarrito();
}

/* Agregar cantidad a un producto */
function getNuevoProductoParaMemoria(product){
  const productoNuevo = product;
  productoNuevo.quantity = 1;
  return productoNuevo;
}

/* Actualizar el número del carrito en el header */
const contadorCarritoElementos = document.getElementById("counter");
function actualizarConteoCarrito(){
  const memoria = JSON.parse(localStorage.getItem("items"));
  if (memoria && memoria.length > 0){
    const contador = memoria.reduce((acum, current)=> acum+current.quantity, 0);
    contadorCarritoElementos.innerText = contador;
    console.log(contador);
  } else {
    contadorCarritoElementos.innerText = 0;
  }
}

actualizarConteoCarrito();