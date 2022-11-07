const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 8081;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'node05'
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + '/cadastro.html');
});

app.get('/consultar', (req, res) => {
    sql.query(`SELECT * FROM CADASTRO;`, (error, results, fields) => {
        res.json(results);
    });
});

app.get('/consulta', (req, res) => {
    res.sendFile(__dirname + '/consulta.html');
});

app.post('/cadastro', (req, res) => {
    // console.log(req.body);
    sql.query(`INSERT INTO cadastro (cpf, nome, sobrenome, nascimento) VALUES (?, ?, ?, ?)`, [req.body.cpf, req.body.nome, req.body.sobrenome, req.body.nascimento]);
    sql.query(`INSERT INTO endereco (cep, rua, numero, complemento, bairro, cidade, uf, cpf) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [req.body.cep, req.body.logradouro, req.body.numero, req.body.complemento, req.body.bairro, req.body.localidade, req.body.uf, req.body.cpf]);
    res.redirect('/consulta');
});

app.listen(port, (req, res) => {
    console.log(`Server listening at http://localhost:${port}`);
});

//npx nodemon app.js ou npm start