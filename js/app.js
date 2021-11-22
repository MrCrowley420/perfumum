const url = "https://dolarsi.com/api/api.php?type=valoresprincipales"


$.get(url, (data, estado) => {
    if (estado == "success") {
        //  console.log(data)
        console.log("DOLAR ACTUALIZADO")

        data.forEach(element => {

            $("#dolar").append(
                `
                    <div class="card m-3
                    " style="width: 18rem;">
                        <img src="./imagenesLogos/dolar.gif" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title"></h5>
                          <p class="card-text text-center">${element.casa.nombre}</p>
                          <p class="card-text text-center text-danger">${element.casa.compra}</p>
                          <p class="card-text text-center text-success">${element.casa.venta}</p>
                          <div class="d-grid col-12 mx-auto">
                          </div>
                        </div>
                    </div>
                    `

            );
        })
    }

});