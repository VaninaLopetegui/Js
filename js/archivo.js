/*       DOM      */
const titulo = document.getElementById ("h1");
h1.innerHTML = "Nuestra Veterinaria";
const botonAyuda = document.getElementById ("botonAyuda");
botonAyuda.addEventListener("click",clickFuction);
function clickFuction() {
    let serviciosContratados = 0
    alert ("Bienvenidos a la página web de servicios de nuestra veterinaria!✨🤩");
    let serviciosSeleccionados = parseInt (prompt ("¿Qué servicio podemos ofrecerte o en qué te podemos ayudar? 1.Quiero bañar a mi mascota 2.Quiero un corte de pelo para mi mascota 3.Quiero atender a mi mascota por sintomas de enfermedad 4.Quiero comprar un kit de juguetes para mi mascota"));
    let servicioContradadoSi = true
    let domicilio
    let volverAContratarServicios
    /* ciclo que se repetirá hasta que el usuario ponga que no quiere comprar mas nada*/
    while (servicioContradadoSi===true) {
        console.log("serviciosSeleccionados", serviciosSeleccionados);
        if(serviciosSeleccionados===1) {
            serviciosContratados = serviciosContratados + 400;
        } else if (serviciosSeleccionados===2) {
            serviciosContratados = serviciosContratados + 500;
        } else if (serviciosSeleccionados===3) {
            serviciosContratados = serviciosContratados + 300;
        } else if (serviciosSeleccionados===4){
            serviciosContratados = serviciosContratados + 1000;
        } else {
            serviciosSeleccionados = parseInt (prompt ("Has ingresado un producto inexistente! escribe alguno de estos: 1.Quiero bañar a mi mascota 2.Quiero un corte de pelo para mi mascota 3.Quiero atender a mi mascota por sintomas de enfermedad 4.Quiero comprar un kit de juguetes para mi mascota"));
            continue
        }
        volverAContratarServicios = parseInt (prompt ("¿Quieres contratar algún otro servicio? 1.Si 2.No"));
        if(volverAContratarServicios===1){
            serviciosSeleccionados = parseInt (prompt ("¿Qué servicio podemos ofrecerte o en qué te podemos ayudar? 1.Quiero bañar a mi mascota 2.Quiero un corte de pelo para mi mascota 3.Quiero atender a mi mascota por sintomas de enfermedad 4.Quiero comprar un kit de juguetes para mi mascota"));
        } else if (volverAContratarServicios===2) {
            break;
        } else {
            alert ("Lamentamos informarte que no has ingresado una opción correcta 😓");
        }
    }
    /*   valor de servicios seleccionados                    */
    alert ("El costo de los servicios contradados es "+serviciosContratados);
    let valorDomicilio
    const servicioADomicilio = (valor) => {
        let impuestoPorIrADomicilio = 0
        if (valor<=300){
            impuestoPorIrADomicilio = 100
        } else if (valor>300 && valor<=1000){
            impuestoPorIrADomicilio = 90
        } else if (valor>1000 && valor<=3000){
            impuestoPorIrADomicilio = 0
        }
        valorDomicilio = valor + impuestoPorIrADomicilio
        return valorDomicilio
    }
    /*   valor de servicios seleccionados con atención en domicilio           */
    let valorConImpuestoDomicilio = servicioADomicilio(serviciosContratados);
    alert ("El total para ir hasta el domicilio es de "+valorConImpuestoDomicilio)
    let ingreseDomicilio = parseInt (prompt ("¿Ingresas tu domicilio para poder ir a acesorarte? 1.Si 2.No"));
    let domicilioUsuario
    if (ingreseDomicilio===1){
        domicilioUsuario = prompt ("Ingresa aquí tu domicilio");
        alert ("Muchísimas gracias! en los próximos 2 días irá un profesional por tu domicilio! Tu precio final será de "+valorConImpuestoDomicilio+"Cualquier consulta al 092222999")
    } else if (ingreseDomicilio===2){
        alert ("Perfecto! en este caso, puedes recurrir a la sucursal más cercana en las calles Av Wilson 10 en esquina 11, el costo total para abonar en sucursal sería de "+serviciosContratados)
    } else {
        ingreseDomicilio = parseInt (prompt ("No entendimos tu respuesta, ¿Ingresas tu domicilio para poder ir a acesorarte? 1.Si 2.No"));
    }
}
/*           objetos para compra de carrito con usuario             */
let servicios = [];

const cardCarrito1 = document.getElementById("cardCarrito1");
const cardCarrito2 = document.getElementById("cardCarrito2");
const cardCarrito3 = document.getElementById("cardCarrito3");

let carrito = [];

const servicioBaño = {
    id: 1,
    servicio: "Baño",
    precio: 500,
}
servicios.push(servicioBaño);

const servicioPeluqueria = {
    id: 2,
    servicio: "Peluqueria canina",
    precio: 400,
}
servicios.push(servicioPeluqueria);

const servicioAtencionMedica = {
    id: 3,
    servicio: "Atencion medica",
    precio: 300,
}
servicios.push(servicioAtencionMedica);

const servicioJuguetes = {
    id: 4,
    servicio: "Kit de juguetes",
    precio: 1000,
}
servicios.push(servicioJuguetes);

servicios.forEach((servicioBaño) => {
    const botonCarrito1 = document.getElementById("botonCarrito1");
    botonCarrito1.innerText = `Comprar ${servicioBaño.servicio} a $${servicioBaño.precio}`;
    botonCarrito1.setAttribute("id", `${servicioBaño.id}`);
    cardCarrito1.append(botonCarrito1);
})

servicios.forEach((servicioPeluqueria) => {
    const botonCarrito2 = document.getElementById("botonCarrito2");
    botonCarrito2.innerText = `Comprar ${servicioPeluqueria.servicio} a $${servicioPeluqueria.precio}`;
    botonCarrito2.setAttribute("id", `${servicioPeluqueria.id}`);
    cardCarrito2.append(botonCarrito2);
})

servicios.forEach((servicioAtencionMedica) => {
    const botonCarrito3 = document.getElementById("botonCarrito3");
    botonCarrito3.innerText = `Comprar ${servicioAtencionMedica.servicio} a $${servicioAtencionMedica.precio}`;
    botonCarrito3.setAttribute("id", `${servicioAtencionMedica.id}`);
    cardCarrito3.append(botonCarrito3);
})





