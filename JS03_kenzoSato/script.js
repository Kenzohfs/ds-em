function informarNome() {
    let nome = prompt("Informe seu nome");

    let mensagem = "";

    for (let i = 0; i < 10; i++) {
        mensagem += nome + "\n";
    }

    alert(mensagem);
}

function nomeMaiusculo() {
    let nome = prompt("Informe seu nome");

    alert(nome.toUpperCase());
}

function nomeFormatado() {
    let nome = prompt("Informe seu nome");
    alert(nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase());
}

function qtdCaracteresNome() {
    let nome = prompt("Informe seu nome");
    alert("Quantidade de caracteres de " + nome + ": " + nome.length);
}

function palavraPorCaractere() {
    let mensagem = prompt("Informe uma palavra");

    let output = "";
    for (let i = 0; i < mensagem.length; i++) {
        output += mensagem + "\n";
    }

    alert(output);
}

function nomeParImpar() {
    let nome = prompt("Informe seu nome");

    let output;
    if (nome.length % 2 == 0) {
        output = "Par";
    } else {
        output = "Impar";
    }

    alert(output);
}

function senha6Carateres() {
    let senha = prompt("Informe uma senha");

    if (senha.length < 6) {
        alert("A senha tem que ter no mínimo 6 caracteres");
    }
}

function imprimirNomeTela() {
    let nome = prompt("Informe um nome");

    if (nome.length % 2 == 0) {
        alert(nome.toUpperCase());
    } else {
        alert(nome.toLowerCase());
    }
}

function imprimir3LetrasNome() {
    let nome = prompt("Informe um nome");

    if (nome.length < 3) {
        alert("Nome precisa ter pelo menos 3 letras");
    } else {
        alert(nome.slice(0, 3));
    }
}

function imprimirNomeZ() {
    let nome = prompt("Informe um nome");

    if (nome.charAt(0).toUpperCase() == "Z") {
        alert(nome);
    } else {
        alert("Nome não começa com Z");
    }
}

function qtdCaracteresVogais() {
    let nome = prompt("Informe um nome");

    let vogais = "aAeEiIoOuU";
    let numVogais = 0;

    for (let i = 0; i < nome.length; i++) {
        for (let a = 0; a < vogais.length; a++) {
            if (nome.charAt(i) == vogais.charAt(a)) {
                numVogais++;
            }
        }
    }

    alert("Número de caracteres: " + nome.length + "\nNúmero de vogais: " + numVogais);
}

function mesPlacaCarro() {
    let placa = prompt("Informe a placa do veículo");

    let mes = "Final da placa deve terminar com um número";
    switch (placa.charAt(placa.length - 1)) {
        case "1":
            mes = "Março";
            break;
        case "2":
            mes = "Abril";
            break;
        case "3":
            mes = "Maio";
            break;
        case "4":
            mes = "Junho";
            break;
        case "5":
            mes = "Julho";
            break;
        case "6":
            mes = "Agosto";
            break;
        case "7":
            mes = "Setembro";
            break;
        case "8":
            mes = "Outubro";
            break;
        case "9":
            mes = "Novembro";
            break;
        case "0":
            mes = "Dezembro";
            break;
    }

    alert(mes);
}

function placaMercosul() {
    let placa = prompt("Informe a placa do veículo");
    let mensagem = placa.slice(0, 5);
    console.log(mensagem);
    
    switch (placa.charAt(6)) {    
        case "1":
            mensagem += "A";
            break;
        case "2":
            mensagem += "B";
            break;
        case "3":
            mensagem += "C";
            break;
        case "4":
            mensagem += "D";
            break;
        case "5":
            mensagem += "E";
            break;
        case "6":
            mensagem += "F";
            break;
        case "7":
            mensagem += "G";
            break;
        case "8":
            mensagem += "H";
            break;
        case "9":
            mensagem += "I";
            break;
        case "0":
            mensagem += "J";
            break;
    }

    alert(mensagem + placa.slice(6));
}