let nomeCliente = document.getElementById("nomeCliente");
let cpfCliente = document.getElementById("cpfCliente");
let emailCliente = document.getElementById("emailCliente");
let telefoneCliente = document.getElementById("telefoneCliente");
let formaPagamento = document.getElementById("formaPagamentoCliente");

let dadosPessoais = JSON.parse(localStorage.getItem("DADOSPESSOAIS"));
let formaPagamentoDado = JSON.parse(localStorage.getItem("PAGAMENTO"));

nomeCliente.innerText = dadosPessoais.nome;
cpfCliente.innerText = dadosPessoais.cpf;
emailCliente.innerText = dadosPessoais.email;
telefoneCliente.innerText = dadosPessoais.telefone;
formaPagamento.innerText = formaPagamentoDado.pagamento;

let saboresContainer = document.getElementById("sabores");
let sabores = JSON.parse(localStorage.getItem("SABORES"));
for (let sabor of sabores) {
    saboresContainer.innerHTML += `<li>${sabor.sabor}</li>`;
}

let subtotalContainer = document.getElementById("subtotalSabores");
let subtotal = JSON.parse(localStorage.getItem("TAMANHO"));

subtotalContainer.innerText = getPrecoBRL(subtotal.preco);

let adicionaisContainer = document.getElementById("adicionais");
let adicionais = JSON.parse(localStorage.getItem("ADICIONAIS"));

adicionaisContainer.innerHTML = `<li class="espacoItemLista"><span>${adicionais.adicional}</span><span>${getPrecoBRL(adicionais.preco)}</span></li>`;

let bebidas = JSON.parse(localStorage.getItem("BEBIDAS"));
let precoBebida = 0;
for (let bebida of bebidas) {
    precoBebida += bebida.preco;
    adicionaisContainer.innerHTML += `<li class="espacoItemLista"><span>${bebida.bebida}</span><span>${getPrecoBRL(bebida.preco)}</span></li>`;
}

let entregaContainer = document.getElementById("entrega");
let entrega = JSON.parse(localStorage.getItem("ENTREGA"));

if (entrega.preco == 0) {
    entregaContainer.innerHTML = `<span>Retirada</span><span>${getPrecoBRL(entrega.preco)}</span>`;
} else {
    entregaContainer.innerHTML = `<span>Entrega</span><span>${getPrecoBRL(entrega.preco)}</span>`;
}

let totalPedidoContainer = document.getElementById("totalPedido");
let totalPedido = subtotal.preco + adicionais.preco + entrega.preco + precoBebida;

totalPedidoContainer.innerText = getPrecoBRL(totalPedido);

function cancelarPedido() {
    localStorage.clear();
    alert("Pedido cancelado com sucesso!");
    window.location.href = "dadosPessoais.html";
}

function confirmarPedido() {
    fetch("/pedido",
        {
            method: "POST",
            body: JSON.stringify({ dadosPessoais, sabores, adicionais, entrega, formaPagamentoDado, totalPedido, bebidas }),
            headers: { "Content-Type": "application/json" }
        },
    )
        .then(res => {
            console.log("pedido feito com sucesso!");
            localStorage.clear();
            alert("Pedido realizado com sucesso!");
            window.location.href = "/";
        });
}

function getPrecoBRL(preco) {
    return preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}