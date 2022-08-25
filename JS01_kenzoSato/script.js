function numeroDivisivel() {
    let numero = prompt("Informe um número: ");

    let message = "O número " + numero + " é divisível por";
    if (numero % 10 == 0)
        message += " 10 "

    if (numero % 5 == 0)
        message += " 5 "

    if (numero % 2 == 0)
        message += " 2 "

    if (numero % 10 != 0 && numero % 5 != 0 && numero % 2 != 0)
        message += " nenhum dos números"

    alert(message);
}

function quadradoDe15a200() {
    let message = "";

    for (let i = 15; i <= 200; i++) {
        message += i * i + "\n";
    }

    alert(message);
}

function soma100Numeros() {
    let message = 0;

    for (let i = 0; i <= 100; i++) {
        message += i;
    }

    alert(message);
}

function numerosDivisiveisPor4() {
    let message = "";

    for (let i = 0; i <= 200; i++) {
        if (i % 4 == 0)
            message += i + "\n";
    }

    alert(message);
}

function volumeFormaGeometrica() {
    let forma = prompt("Escolha uma forma geométrica: \n1 - Cubo \n2 - Cilindro");

    let volume;

    if (forma == 1) {
        let lado = prompt("Informe a medida do lado do cubo");

        volume = lado ** 3;
    } else {
        let raio = prompt("Informe o raio do cilindro");
        let altura = prompt("Informe a altura do cilindro");

        volume = Math.PI * raio * raio * altura;
    }

    alert("O volume da forma geométrica é de " + volume);
}

function cubo10Numeros() {
    let message = "";

    for (let i = 0; i <= 10; i++) {
        message += i ** 3 + "\n"
    }

    alert(message);
}

function soma10NumerosE18Porcento() {
    let soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += i;
    }

    alert("Soma dos 10 primeiros números: " + soma + "\n18% de " + soma + ": " + soma * 0.18);
}

function divisivelPor3() {
    let message = "";

    for (let i = 100; i > 0; i--) {
        if (i % 3 == 0)
            message += i + "\n";
    }

    alert(message);
}

function numeroDigitadoValido() {
    let numero = prompt("Informe um número entre 1 a 6");
    
    while (numero < 1 || numero > 6) {
        alert("O número digitado está incorreto");
        numero = prompt("Informe um número entre 1 a 6");
    }
    
    alert("O número digitado é " + numero);
}

function numeroMaior() {
    let numero = prompt("Informe o número de elementos que irá inserir: ");

    let maiorNum;
    for (let i = 0; i < numero; i++) {
        let elemento = prompt("Informe um elemento: ");

        if (i == 0)
            maiorNum = elemento;
        else {
            if (maiorNum < elemento)
                maiorNum = elemento;
        }
    }

    alert("Maior número: " + maiorNum);
}