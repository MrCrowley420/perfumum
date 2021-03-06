const carro = new Carrito();
const carrito = document.getElementById("carrito");
const productos = document.getElementById("lista-productos");
const listaProductos = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
const procesarPedidoBtn = document.getElementById("procesar-pedido");


cargarEventos();

function cargarEventos() {
    //Se ejecuta cuando se presionar agregar carrito
    productos.addEventListener("click", (e) => {
        carro.comprarProducto(e);
    });

    //Cuando se elimina productos del carrito
    carrito.addEventListener("click", (e) => {
        carro.eliminarProducto(e);
    });

    //Al vaciar carrito
    vaciarCarritoBtn.addEventListener("click", (e) => {
        carro.vaciarCarrito(e);
    });

    //Al cargar documento se muestra lo almacenado en LS
    document.addEventListener("DOMContentLoaded", () => {
        carro.leerLocalStorage();
        fetchProductos();
    });




    //Enviar pedido a otra pagina
    procesarPedidoBtn.addEventListener("click", (e) => {
        carro.procesarPedido(e);
    });
}




async function fetchProductos() {
    let res = await fetch("api.json");
    let data = await res.json();
    let html = "";
    data.forEach((producto, index) => {
                card = `
				<div class="card mb-4 shadow-sm" style="width: 18rem;">
				<div class="card-header">
					<h4 class="card-title">${producto.nombre}</h4>
					
				</div>
				<div class="card-body d-flex flex-column" id = "cardBody">
	
					<img src=${producto.imagen} class="card-img-top" alt=${producto.nombre}>
					<h1 class="card-title pricing-card-title precio">$ <span class="">${producto.precio}</span></h1>
					<h4 class="card-title">Categoria: ${producto.categoria}</h4>
					<ul class="list-unstyled mt-3 mb-4">
						${producto.detalles .map( (ele) => `
						<li>${ele}</li>
						` ) .join("")}
					</ul>
					<a type="button" class="align-self-end btn btn-block btn-primary agregar-carrito text-white" style="margin-top: auto;" data-id=${producto.id}>COMPRAR  </a>
				</div>
			</div>
		`
		if(index === 0){
			html += `<div class="card-deck mb-3 col-lg-12 text-center md:w-10">${card}`
		}else if(index % 4 === 0 && index !== 0){
			html += `</div><div class="card-deck mb-3 col-lg-12 text-center md:w-10">${card}`
		}else{
			html += card
		}
	})
	productos.innerHTML = html;}