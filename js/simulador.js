alert ("Pongamos a prueba tus decisiones al cruzar la calle 👀");

let jugarSimulador = parseInt(prompt ("¿Jugamos?: 1.Si 2.No"));
while (jugarSimulador===1){
    alert ("Supongamos que estas en una situacion en la que llegas a una esquina🚶, debes cruzar la calle y ves la luz en rojo para peatones");
    let preguntaCruzarCalle = parseInt(prompt ("¿Cruzas la calle o esperas a que este verde?: 1.Espero 2.Cruzo"));
    if (preguntaCruzarCalle===1){
        alert ("Muy bien! esperaste y ahora vas a cruzar la calle en semáforo verde para tí.")
    } else if (preguntaCruzarCalle===2) {
        alert ("☠Lamentamos informarte que cruzaste la calle y un auto te atropelló en el camino.☠");
    } else {
        alert ("No has ingresado ninguna opción válida, vuelve a intentarlo.");
        preguntaCruzarCalle = parseInt(prompt ("¿Cruzas la calle o esperas a que este verde?: 1.Espero 2.Cruzo"));
    }
} if (jugarSimulador===2){
    alert ("Disculpe las molestias, ¡gracias por su atención!");
} else {
    alert ("No has ingresado ninguna opción válida, vuelve a intentarlo.");
    jugarSimulador = parseInt(prompt ("¿Jugamos?: 1.Si 2.No"));
}

if (preguntaCruzarCalle===1) {
    let preguntaEsquivar = parseInt(prompt ("Oh no!😱 cuando estas cruzando, se te atraviesa una moto que no vió la luz en rojo para vehículos 🏍: 1.Esquivar 2.Me paralizo 3.Retrocedo")); 
    if (preguntaEsquivar===1){
    alert ("Eso estuvo muy cerca! buena decision! Sigue avanzando hacia tu destino.✔")
    } else if (preguntaEsquivar===2){
    alert ("No fue una decision muy correcta, ahora tendremos que ir a un médico urgente😵‍💫")
    } else if (preguntaEsquivar===3){
    alert ("Tomaste la mejor decisión!! Felicidades, ahora podrás seguir caminando hacia tu destino.💯✔")
    } else {
    alert ("No has escrito una opción correcta❗❗ Intenta escribiendo los números como respuesta.")
    preguntaEsquivar = parseInt(prompt ("Oh no!😱 cuando estas cruzando, se te atraviesa una moto que no vió la luz en rojo para vehículos 🏍: 1-Esquivar 2-Me paralizo 3-Retrocedo"));
    }
}

let jugarDeNuevo
jugarDeNuevo = parseInt (prompt("Quieres volver a jugar para buscar un final diferente❓ 1.Si 2.No"))
if (jugarDeNuevo===1){
    jugarSimulador = parseInt(prompt ("¿Jugamos?: 1.Si 2.No"));
} else if (jugarDeNuevo===2){
    alert ("💟 Gracias por jugar con nosotros!! 💟")
} else {
    alert ("No escribiste una opcion existente, vuelve a escribirnos!")
    jugarDeNuevo = parseInt (prompt("Quieres volver a jugar para buscar un final diferente❓ 1.Si 2.No"))
}