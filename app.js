let listaNomes = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome, o campo não pode ficar em branco!");
        return;
    }

    listaNomes.push(nome);

    input.value= "";

    renderizarLista();
}

function renderizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listaNomes.forEach((nome) => {
        let li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
    });
}

