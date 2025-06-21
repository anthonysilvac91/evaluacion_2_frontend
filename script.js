// Funcion para renderizar tarjetas en sección blog-Container

function mostrarBlogCard(categoria) {
    const contenedor = document.querySelector(".blog-container");

    const items = data[categoria];

    const tarjetasHTML = items.map((item, index) => `
    <div class="card" style="width: 18rem;">
        <img src="${item.img}" class="card-img-top" alt="${item.titulo}">
        <div class="card-body">
        <h5 class="card-title">${item.titulo}</h5>
        <p class="card-text">${item.texto}</p>
        <p>Categoría: <strong>${categoria}</strong> - ${item.tipo}</p>
        <button onclick='mostrarDetalles("${categoria}", ${index})' class="btn-custom">Ver más</button>
        </div>
    </div>
    `).join("");

    contenedor.innerHTML = tarjetasHTML;
}




// Funcion del Modal

function mostrarDetalles(categoria, index) {
  const item = data[categoria][index];

  // Insertar contenido
  document.getElementById("modalTitulo").textContent = item.titulo;
  document.getElementById("modalImagen").src = item.img;
  document.getElementById("modalImagen").alt = item.titulo;
  document.getElementById("modalTexto").textContent = item.texto;
  document.getElementById("modalTipo").textContent = item.tipo;
  document.getElementById("modalDetalles").textContent = item.detalles || "No hay detalles";

  // Mostrar modal
  document.getElementById("miModal").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("miModal").style.display = "none";
}