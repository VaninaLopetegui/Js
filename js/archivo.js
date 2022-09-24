/*      DOM PRUEBA PARA DESAFÍO       */
const titulo = document.getElementById ("h1");
h1.innerHTML = "Nuestra Veterinaria";
/*           objetos para compra de carrito con usuario             */


const cardServicio1 = document.getElementById("card1");

const cardServicio2 = document.getElementById("card2");

const cardServicio3 = document.getElementById("card3");

let carrito = [];

let servicios = [];

servicios.push({
    nombre: "Baño mascota",
    precio: 500,
    idBoton: "botonCard1",
});

servicios.push({
    nombre: "Peluqueria canina",
    precio: 400,
    idBoton: "botonCard2",
});

servicios.push({
    nombre: "Atencion medica",
    precio: 300,
    idBoton: "botonCard3",
});

console.log (servicios)
/*              evento para cuando el usuario compra                    */

servicios.forEach((servicio) => {
    if(servicio.nombre === "Baño mascota"){
        const botonCard1 = document.getElementById(servicio.idBoton);
        botonCard1.innerText = "Comprar servicio";
        botonCard1.onclick = () =>{
            carrito.push(servicios[0]);
            console.log (carrito.length)
        }
    } else if(servicio.nombre === "Peluqueria canina"){
        const botonCard2 = document.getElementById(servicio.idBoton);
        botonCard2.innerText = "Comprar servicio";
        botonCard2.onclick = () =>{
            carrito.push(servicios[1]);
            console.log (carrito.length)
        }
    } else if (servicio.nombre === "Atencion medica"){
        const botonCard3 = document.getElementById(servicio.idBoton);
        botonCard3.innerText = "Comprar servicio";
        botonCard3.onclick = () =>{
            carrito.push(servicios[2]);
            console.log (carrito.length)
        }
    }
})

/*              boton de finalizar compra con precio final                       */
const botonAyuda = document.getElementById ("botonCompraFinal");
let totalServiciosAdquiridos
botonCompraFinal.onclick = () => {
    totalServiciosAdquiridos = 0
    carrito.forEach((serviciosAdquiridos)=>{
        totalServiciosAdquiridos = totalServiciosAdquiridos + serviciosAdquiridos.precio;
    })
    alert (`El costo total a pagar es de $${totalServiciosAdquiridos}!`)
}



