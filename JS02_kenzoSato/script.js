function antecessorESucessor() {
    let numero = prompt("Informe um número para saber seu antecessor e sucessor");

    alert("Antecessor: " + (numero - 1) + "\nSucessor: " + (numero * 1 + 1));
}

function reajuste15() {
    let numero = prompt("Informe um número para ter seu reajuste");

    alert(numero + " com reajuste de 15%: " + (numero * 1.15));
}

function distanciaPercorrida() {
    let tempoH = prompt("Informe o tempo percorrido");
    let vM = prompt("Informe a velocidade média");

    alert("Distância percorrida: " + (vM * tempoH));
}

function metadeSeMaior20() {
    let numero = prompt("Informe um número");

    if (numero > 20)
        alert("Metade de " + numero + ": " + (numero / 2));
}

function somaDoisNumeros() {
    let numero1 = prompt("Informe um número");
    let numero2 = prompt("Informe outro número");

    let soma = (numero1 * 1) + (numero2 * 1);

    if (soma > 10)
        alert("Soma: " + soma);
}

function salario() {
    let salario = prompt("Informe seu salário");
    let prestacao = prompt("Informe a prestação");

    if (salario * 0.2 < prestacao * 1)
        alert("Empréstimo não pode ser concedido");
    alert("Empréstimo pode ser concedido");
}

function comerciante() {
    let valorProd = prompt("Informe o valor do produto");

    if ((valorProd * 1) < 20) {
        alert("Valor de venda: " + valorProd * 1.45);
    } else {
        alert("Valor de venda: " + valorProd * 1.3);
    }
}

function classeEleitoral() {
    let idade = prompt("Informe sua idade");

    if (idade < 16) {
        alert("Não eleitor");
    } else if (idade > 18 && idade < 65) {
        alert("Eleitor obrigatório");
    } else {
        alert("Eleitor facultativo");
    }
}