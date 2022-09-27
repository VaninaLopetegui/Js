/*                         formulario                              */

const inputName = document.getElementById ("inputName");

const inputEmail = document.getElementById ("inputEmail");

const comentarioTextarea = document.getElementById ("textarea");

const enviar = document.getElementById ("botonSubmit");

enviar.onclick = (e) => {
    e.preventDefault();
    const usuario = {
        nombre: inputName.value,
        email: inputEmail.value,
        comentario: comentarioTextarea.value
    }
}