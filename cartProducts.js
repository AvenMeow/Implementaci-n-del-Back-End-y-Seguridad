/* Step3. back-end data in front-end */
async function getProducts() {
    const res = await fetch("http://localhost:3000/Ware/products"); // fetch envía una solicitud GET al servidor en el endpoint localhost:3000/Ware/products
    const resJson = await res.json();   // Se procesa el cuerpo de la respuesta y se convierte en un objeto JavaScript (JSON)
    return resJson;  // Devuelve como resultado los datos de productos obtenidos del servidor
}