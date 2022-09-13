function cadastrar() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let alimentado = document.getElementById("alimentado").value;
    let resfriado = document.getElementById("resfriado").value;


    if (!(nome && idade && peso)) {
        alert("Insira todas os campos para poder se cadastrar!");
    } else {
        if (pessoaValida(idade, peso, alimentado, resfriado)) {
            alert("Olá " + nome + ", você está apto a se cadastrar!");
        } else {
            alert("Olá " + nome + ", infelizmente você não está apto a se cadastrar.");
        }
    }
}

function pessoaValida(idade, peso, alimentado, resfriado) {
    return idade >= 16 && idade <= 69 && peso >= 50 && alimentado == "sim" && resfriado == "nao";
}