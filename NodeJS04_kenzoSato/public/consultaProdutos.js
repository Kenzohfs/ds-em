var dados = (results) => {
    const tbody = document.getElementById("tbody");
    
    for (let result of results) {
        let tr = document.createElement("tr");
        let tdCodBarras = document.createElement("td");
        let tdNome = document.createElement("td");
        let tdTipo = document.createElement("td");
        let tdQuantidade = document.createElement("td");
        let tdPreco = document.createElement("td");

        tdCodBarras.innerText = result.cod_barras;
        tdNome.innerText = result.nome;
        tdTipo.innerText = result.tipo;
        tdQuantidade.innerText = result.quantidade;
        tdPreco.innerText = result.preco;

        tr.appendChild(tdCodBarras);
        tr.appendChild(tdNome);
        tr.appendChild(tdTipo);
        tr.appendChild(tdQuantidade);
        tr.appendChild(tdPreco);

        tbody.appendChild(tr);
    }
}

const btnConsulta = document.getElementById("btnConsulta");

btnConsulta.addEventListener("click", () => {
    fetch("/consultar_produtos", {
        method: "GET",
        cache: "default",
    })
    .then(res => {
        res.json()
            .then(data => {
                dados(data);
            })
    });
})