var dados = (results) => {
    const tbody = document.getElementById("tbody");

    for (let result of results) {
        let tr = document.createElement("tr");
        let tdCodBarras = document.createElement("td");
        let tdNome = document.createElement("td");
        let tdTipo = document.createElement("td");
        let tdQuantidade = document.createElement("td");
        let tdPreco = document.createElement("td");
        let tdUpdate = document.createElement("td");
        let tdDelete = document.createElement("td");

        let btnUpdate = document.createElement("button");
        let btnDelete = document.createElement("button");

        tdCodBarras.innerText = result.cod_barras;
        tdNome.innerText = result.nome;
        tdTipo.innerText = result.tipo;
        tdQuantidade.innerText = result.quantidade;
        tdPreco.innerText = result.preco;
        btnUpdate.innerText = "Atualizar";
        btnUpdate.onclick = () => {
            onProductClickUpdate(result);
            console.log(result.cod_barras);
        }
        btnDelete.innerText = "Deletar";
        btnDelete.onclick = () => {
            onProductClickDelete(result);
            console.log(result.cod_barras);
        }
        tr.className = "row";

        tdUpdate.appendChild(btnUpdate);
        tdDelete.appendChild(btnDelete);

        tr.appendChild(tdCodBarras);
        tr.appendChild(tdNome);
        tr.appendChild(tdTipo);
        tr.appendChild(tdQuantidade);
        tr.appendChild(tdPreco);
        tr.appendChild(tdUpdate);
        tr.appendChild(tdDelete);

        tbody.appendChild(tr);
    }
}

const btnConsulta = document.getElementById("btnConsulta");

btnConsulta.addEventListener("click", () => {
    deleteTable();
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

const deleteTable = () => {
    const rows = document.querySelectorAll(".row");
    if (rows.length > 0) {
        for (let row of rows) {
            row.remove();
        }
    }
}

const onProductClickUpdate = (produto) => {
    const modal = document.getElementById("modal-update");
    const cod_barrasInput = document.getElementById("cod_barras-input");
    cod_barrasInput.value = produto.cod_barras;
    modal.style.display = 'flex';
}

const onProductClickDelete = (produto) => {
    fetch(`/deletar_produto/${produto.cod_barras}`, {
        method: "DELETE",
        cache: "default",
    })
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data);
                    alert("Produto deletado com sucesso!");
                    reloadData();
                })
        });
}

function udpate() {
    console.log("a")
    const cod_barras = document.getElementById("cod_barras-input").value;
    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;
    const tipo = document.getElementById("tipo").value;

    fetch(`/atualizar_produto/${cod_barras}/${nome}/${preco}/${quantidade}/${tipo}`, {
        method: "PUT",
        cache: "default"
    })
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data);
                    alert("Produto atualizado com sucesso!");
                    const modal = document.getElementById("modal-update");
                    modal.style.display = 'none';
                    reloadData();
                })
        }
        );
}

const reloadData = () => {
    deleteTable();
    btnConsulta.click();
}