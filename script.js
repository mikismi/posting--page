// Seletores
const form = document.querySelector('#form-post');
const inputTitulo = document.querySelector('#titulo');
const inputConteudo = document.querySelector('#conteudo');

const renderizadorTitulo = document.querySelector('#renderizador-titulo');
const renderizadorConteudo = document.querySelector('#renderizador-conteudo');

// Evento de submit
form.addEventListener("submit", function(e) {
    e.preventDefault(); // impede recarregar página

    // Montagem do objeto de envio
    const data = {
        title: inputTitulo.value,
        body: inputConteudo.value,
        userId: 1
    };

    // Fetch POST para API fake (jsonplaceholder)
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(postCriado => {
        
        // Renderização dos dados retornados
        renderizadorTitulo.innerHTML = postCriado.title;
        renderizadorConteudo.innerHTML = postCriado.body;

        // Limpar campos após envio
        inputTitulo.value = "";
        inputConteudo.value = "";
    })
    .catch(error => {
        console.error("Erro ao enviar post:", error);
    });
});
