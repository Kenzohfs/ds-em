function grausParaF() {
    let graus = prompt("Informe uma temperatura");

    alert("Em Fahrenheit: " + (((graus / 5) * 9) + 32));
}

function bhaskara() {
    let a = prompt("A");
    let b = prompt("B");
    let c = prompt("C");

    alert("X1: " + ((-(b) + Math.sqrt(b * b - 4 * a * c)) / (2 * a)) + "\nX2: " + ((-(b) - Math.sqrt(b * b - 4 * a * c)) / (2 * a)));
}

function variavelComposta1() {
    let variavelComposta = [];
    for (let i = 0; i < 5; i++) {
        let numero = prompt("Informe um número entre 1 a 20");
        while (numero < 1 || numero > 20) {
            numero = prompt("Informe um número entre 1 a 20");
        }
        variavelComposta.push(numero)
    }

    alert(variavelComposta);
}

function variavelComposta2() {
    let variavelComposta = [];
    for (let i = 0; i < 7; i++) {
        let numero = prompt("Informe um número entre 1 a 30");
        while (numero < 1 || numero > 30) {
            numero = prompt("Informe um número entre 1 a 30");
        }
        variavelComposta.push(numero)
    }

    alert(variavelComposta + "\nTerceiro valor: " + variavelComposta[2]);
}

function variavelComposta3() {
    let numeros = [];
    for (let i = 0; i < 3; i++) {
        let numero = prompt("Informe um número entre 5 a 9");
        while (numero < 5 || numero > 9) {
            numero = prompt("Informe um número entre 5 a 9");
        }
        numeros.push(numero)
    }

    for (let i = 0; i < 2; i++) {
        let numero = prompt("Informe um número entre 1 a 4");
        while (numero < 1 || numero > 4) {
            alert("Número inválido!");
            numero = prompt("Informe um número entre 1 a 4");
        }
        numeros.unshift(numero)
    }

    alert(numeros);
}

function variavelComposta4() {
    let variavelComposta = [], numero;
    for (let i = 0; i < 4; i++) {
        numero = prompt("Informe um número entre 1 a 9");
        while (numero < 1 || numero > 9) {
            numero = prompt("Informe um número entre 1 a 9");
        }
        variavelComposta.push(numero)
    }

    alert(variavelComposta);
    variavelComposta.pop();
    alert(variavelComposta);
}

function variavelComposta5() {
    let variavelComposta = [], numero;
    for (let i = 0; i < 6; i++) {
        numero = prompt("Informe um número entre 1 a 15");
        while (numero < 1 || numero > 15) {
            numero = prompt("Informe um número entre 1 a 15");
        }
        variavelComposta.push(numero)
    }

    alert(variavelComposta);
    variavelComposta.shift();
    alert(variavelComposta);
}

function variavelComposta6() {
    let variavelComposta = [], numero;
    for (let i = 0; i < 9; i++) {
        numero = prompt("Informe um número entre 1 a 9");
        while (numero < 1 || numero > 9) {
            numero = prompt("Informe um número entre 1 a 9");
        }
        variavelComposta.push(numero)
    }

    variavelComposta.sort();
    alert(variavelComposta.shift());
}