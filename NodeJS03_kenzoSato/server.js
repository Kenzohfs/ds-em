const express = require("express")
const bodyParser = require("body-parser")
const mysql = require("mysql2")

const port = process.env.PORT || 8081
const app = express()

const sql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306
})

sql.query("USE NODEJS03_ATIVIDADE");

app.use(express.static(__dirname + "/"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/formulario", (req, res) => {
    res.sendFile(__dirname + "/formulario.html")
});

app.post("/formulario", (req, res) => {
    console.log(req.body);
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const cpf = req.body.cpf;
    const email = req.body.email;
    const cep = req.body.cep;
    const rua = req.body.rua;
    const numero = req.body.numero;
    const complemento = req.body.complemento;
    const bairro = req.body.bairro;
    const cidade = req.body.localidade;
    const estado = req.body.uf;

    sql.query("INSERT INTO PESSOA VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [cpf, nome, sobrenome, email, cep, rua, numero, complemento, bairro, cidade, estado])
    res.redirect("/formulario")
});

app.listen(port, () => {
    console.log(`App listenint at http://localhost:${port}`)
});