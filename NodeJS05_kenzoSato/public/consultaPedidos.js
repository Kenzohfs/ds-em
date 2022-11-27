var dados = (results) => {
    console.log(results);
    const tbody = document.getElementById("tbody");
    
    for (let result of results) {
        let tr = document.createElement("tr");
        let tdId = document.createElement("td");
        let tdCpf = document.createElement("td");
        let tdNome = document.createElement("td");
        let tdData = document.createElement("td");
        let tdHora = document.createElement("td");
        let tdSabores = document.createElement("td");
        let tdTamanho = document.createElement("td");
        let tdValorTotal = document.createElement("td");
        
        tdId.innerText = result.ID;
        tdCpf.innerText = result.CPF;
        tdNome.innerText = result.NOME + " " + result.SOBRENOME;
        tdData.innerText = result.DATA_PEDIDO.slice(0, 10);
        tdHora.innerText = result.HORA;
        tdSabores.innerText = result.SABOR1 + ", " + result.SABOR2 + ", " + result.SABOR3 + ", " + result.SABOR4 + ", " + result.SABOR5;
        tdTamanho.innerText = result.TAMANHO;
        tdValorTotal.innerText = result.VALOR_TOTAL;

        tr.appendChild(tdId);
        tr.appendChild(tdCpf);
        tr.appendChild(tdNome);
        tr.appendChild(tdData);
        tr.appendChild(tdHora);
        tr.appendChild(tdSabores);
        tr.appendChild(tdTamanho);
        tr.appendChild(tdValorTotal);

        tbody.appendChild(tr);
    }
}

const btnConsulta = document.getElementById("btnConsulta");

btnConsulta.addEventListener("click", () => {
    fetch("/consultar_pedidos", {
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