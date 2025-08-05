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

function sortearAmigo() {
    if (listaNomes.length === 0) {
        alert("Nenhum nome foi adicionado!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaNomes.length);
    let nomeSorteado = listaNomes[indiceSorteado];

    let ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = "";

    let li = document.createElement("li");
    li.textContent = `Amigo secreto sorteado foi: ${nomeSorteado}`;
    ulResultado.appendChild(li);
}

