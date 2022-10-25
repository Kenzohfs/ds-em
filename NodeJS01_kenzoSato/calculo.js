const adicao = require("./operacoes").adicao;
const subtracao = require("./operacoes").subtracao;
const multiplicacao = require("./operacoes").multiplicacao;
const divisao = require("./operacoes").divisao;
const bhaskara = require("./operacoes").bhaskara;
const teoremaPitagoras = require("./operacoes").teoremaPitagoras;
const areaTriangulo = require("./operacoes").areaTriangulo;
const perimetroCirculo = require("./operacoes").perimetroCirculo;
const volumeCubo = require("./operacoes").volumeCubo;
const volumeCilindro = require("./operacoes").volumeCilindro;

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const adicaoRes = adicao(5, 7);
const subtracaoRes = subtracao(5, 2);
const multiplicacaoRes = multiplicacao(4, 4);
const divisaoRes = divisao(2, 2);
const bhaskaraRes = bhaskara(1, -5, 6).x1 + ", X2: " + bhaskara(1, -5, 6).x2;
const teoremaPitagorasRes = teoremaPitagoras(3, 4);
const areaTrianguloRes = areaTriangulo(5, 10);
const perimetroCirculoRes = perimetroCirculo(8)
const volumeCuboRes = volumeCubo(3);
const volumeCilindroRes = volumeCilindro(2, 4);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Server rodando! \nOperações: \nAdicao:' +
        adicaoRes + ", \nSubtracao: " +
        subtracaoRes + ", \nMultiplicacao: " +
        multiplicacaoRes + ", \nDivisao: " +
        divisaoRes + ", \nBhaskara: " +
        bhaskaraRes + ", \nPitágoras: " +
        teoremaPitagorasRes + ", \Área triângulo: " +
        areaTrianguloRes + ", \nPerímetro circulo: " +
        perimetroCirculoRes + ", \nVolume cubo: " +
        volumeCuboRes + ", \nVolume cinlindro: " +
        volumeCilindroRes
    );
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);

    console.log("Adição: " + adicaoRes);
    console.log("Subtração: " + subtracaoRes);
    console.log("Multiplicação: " + multiplicacaoRes);
    console.log("Divisão: " + divisaoRes);
    console.log("Bhaskara: X1: " + bhaskaraRes);
    console.log("Teorema de Pitágoras: " + teoremaPitagorasRes);
    console.log("Área do triângulo: " + areaTrianguloRes);
    console.log("Perímetro do círculo: " + perimetroCirculoRes);
    console.log("Volume do cubo: " + volumeCuboRes);
    console.log("Volume do cilindro: " + volumeCilindroRes);
});
