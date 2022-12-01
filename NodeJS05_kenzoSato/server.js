const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'GetPizza'
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/pedido/dadosPessoais.html");
});

app.get("/size", (req, res) => {
    res.sendFile(__dirname + "/public/pedido/tamanho.html");
});

app.get("/flavours", (req, res) => {
    res.sendFile(__dirname + "/public/pedido/sabores.html");
});

app.get("/additionals", (req, res) => {
    res.sendFile(__dirname + "/public/pedido/adicionais.html");
});

app.get("/delivery", (req, res) => {
    res.sendFile(__dirname + "/public/pedido/entrega.html");
});

app.get("/confirmation", (req, res) => {
    res.sendFile(__dirname + "/public/pedido/confirma.html");
});

app.get("/consulta_produtos", (req, res) => {
    res.sendFile(__dirname + "/public/pedido/consulta_produtos.html");
});

app.get("/consultar_produtos", (req, res) => {
    sql.query("SELECT * FROM PRODUTO", (error, results, fields) => {
        res.json(results)
    })
});

app.get("/consulta_pedidos", (req, res) => {
    res.sendFile(__dirname + "/public/pedido/consulta_pedidos.html");
});

app.get("/consultar_pedidos", (req, res) => {
    sql.query("SELECT PEDIDO.ID, PEDIDO.DATA_PEDIDO, PEDIDO.HORA, PEDIDO.VALOR_TOTAL, CLIENTE.CPF, CLIENTE.NOME, CLIENTE.SOBRENOME, PIZZA.TAMANHO, PIZZA.SABOR1, PIZZA.SABOR2, PIZZA.SABOR3, PIZZA.SABOR3, PIZZA.SABOR4, PIZZA.SABOR5 FROM PEDIDO INNER JOIN CLIENTE ON PEDIDO.CPF_CLIENTE = CLIENTE.CPF INNER JOIN PIZZA ON PEDIDO.ID_PIZZA = PIZZA.ID", (error, results, fields) => {
        res.json(results)
    })
});

app.put("/atualizar_produto/:cod_barras/:nome/:preco/:quantidade/:tipo", (req, res) => {
    console.log(req.params);
    const cod_barras = req.params.cod_barras;
    const nome = req.params.nome;
    const tipo = req.params.tipo;
    const preco = req.params.preco;
    const quantidade = req.params.quantidade;

    sql.query("UPDATE PRODUTO SET NOME = ?, TIPO = ?, QUANTIDADE = ?, PRECO = ? WHERE COD_BARRAS = ?",
        [nome, tipo, quantidade, preco, cod_barras], (error, results, fields) => {
            res.json(results)
        });
})

app.delete("/deletar_produto/:cod_barras", (req, res) => {
    const cod_barras = req.params.cod_barras;
    sql.query("DELETE FROM PRODUTO WHERE COD_BARRAS = ?", [cod_barras], (error, results, fields) => {
        res.json(results)
    });
});

app.post("/pedido", (req, res) => {
    console.log(req.body)
    let cep = req.body.entrega.cep;
    let logradouro = req.body.entrega.logradouro;
    let numero = req.body.entrega.numero;
    let complemento = req.body.entrega.complemento;
    let bairro = req.body.entrega.bairro;
    let cidade = req.body.entrega.cidade;
    let estado = req.body.entrega.estado;

    let cpf = req.body.dadosPessoais.cpf;
    let nome = req.body.dadosPessoais.nome;
    let sobrenome = req.body.dadosPessoais.sobrenome;
    let nascimento = req.body.dadosPessoais.nascimento;
    let telefone = req.body.dadosPessoais.telefone;
    let email = req.body.dadosPessoais.email;

    let tamanho = req.body.sabores.length;
    let sabor1 = "", sabor2 = "", sabor3 = "", sabor4 = "", sabor5 = "";
    let sabores = req.body.sabores;

    for (let i = 0; i < sabores.length; i++) {
        switch (i) {
            case 0:
                sabor1 = sabores[i].sabor;
                break;
            case 1:
                sabor2 = sabores[i].sabor;
                break;
            case 2:
                sabor3 = sabores[i].sabor;
                break;
            case 3:
                sabor4 = sabores[i].sabor;
                break;
            case 4:
                sabor5 = sabores[i].sabor;
                break;
        }
    }

    console.log("sabor1: " + sabor1);
    console.log("sabor2: " + sabor2);
    console.log("sabor3: " + sabor3);
    console.log("sabor4: " + sabor4);
    console.log("sabor5: " + sabor5);

    let idPizza;

    sql.query("INSERT INTO ENDERECO (CEP, RUA, NUMERO, COMPLEMENTO, BAIRRO, CIDADE, ESTADO) VALUES (?, ?, ?, ?, ?, ?, ?);",
        [cep, logradouro, numero, complemento, bairro, cidade, estado]);
    sql.query("INSERT INTO CLIENTE (CPF, NOME, SOBRENOME, NASCIMENTO, TELEFONE, EMAIL, ENDERECO_CEP) VALUES (?, ?, ?, ?, ?, ?, ?);",
        [cpf, nome, sobrenome, nascimento, telefone, email, cep]);
    sql.query("INSERT INTO PIZZA (TAMANHO, SABOR1, SABOR2, SABOR3, SABOR4, SABOR5) VALUES (?, ?, ?, ?, ?, ?);",
        [tamanho, sabor1, sabor2, sabor3, sabor4, sabor5]);

    sql.query("SELECT LAST_INSERT_ID();", (error, results, fields) => {
        console.log("resultad: ", results)
        console.log(results[0]['LAST_INSERT_ID()']);
        idPizza = results[0]['LAST_INSERT_ID()'];
        parte2(idPizza, req);
        res.redirect("/");
    })
})

function insertProduto(cod_barras, nome, tipo, quantidade, preco) {
    sql.query("INSERT INTO PRODUTO (COD_BARRAS, NOME, TIPO, QUANTIDADE, PRECO) VALUES (?, ?, ?, ?, ?);",
        [cod_barras, nome, tipo, quantidade, preco]);
}

function insertPedidoProdutos(cod_barras, id_pizza) {
    sql.query("INSERT INTO PEDIDO_PRODUTOS (COD_BARRAS, ID_PIZZA) VALUES (?, ?);",
        [cod_barras, id_pizza]);
}

function parte2(idPizza, req) {
    console.log("idPizza: ", idPizza);

    let cod_barras = "";
    let nomeProduto = "";
    let tipo = "";
    let quantidade = 0;
    let precoProduto = 0;

    let bebidas = req.body.bebidas;

    for (let bebida of bebidas) {
        cod_barras = (Math.random() * 100000000000000).toString();
        nomeProduto = bebida.bebida;
        tipo = "BEBIDA";
        quantidade = 1;
        precoProduto = bebida.preco;

        insertProduto(cod_barras, nomeProduto, tipo, quantidade, precoProduto);
        insertPedidoProdutos(cod_barras, idPizza);
    }

    cod_barras = (Math.random() * 100000000000000).toString();
    nomeProduto = req.body.adicionais.adicional;
    tipo = "ADICIONAL";
    quantidade = 1;
    precoProduto = req.body.adicionais.preco;

    insertProduto(cod_barras, nomeProduto, tipo, quantidade, precoProduto);
    insertPedidoProdutos(cod_barras, idPizza);

    let data = new Date().toISOString().slice(0, 19).slice(0, 9);
    let hora = new Date().toISOString().slice(0, 19).slice(11, 19);
    let valorTotal = req.body.totalPedido;

    console.log("data: ", data);
    console.log("hora: ", hora);

    sql.query("INSERT INTO PEDIDO (DATA_PEDIDO, HORA, VALOR_TOTAL, RETIRADA_ENTREGA, CPF_CLIENTE, ID_PIZZA) VALUES (?, ?, ?, ?, ?, ?);",
        [data, hora, valorTotal, "", req.body.dadosPessoais.cpf, idPizza]);
}

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
