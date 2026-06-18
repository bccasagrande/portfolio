const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", trocarTema);

function trocarTema() {

    document.body.classList.toggle("light-mode");

}

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", mensagem);

function mensagem() {

    alert("Mensagem enviada com sucesso!");

}

