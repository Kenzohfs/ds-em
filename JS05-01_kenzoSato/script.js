function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value / 100;

    if (!peso && !altura) {
        alert("Por favor insira as informações solicitadas!");
    } else {
        let imc = (peso / (altura * altura)), categoria = "Extremo ou alto risco de obesidade";

        if (imc < 18.5) {
            categoria = "Abaixo do peso";
        } else if (imc >= 18.5 && imc <= 24.9) {
            categoria = "Saudável";
        } else if (imc >= 25 && imc <= 29.9) {
            categoria = "Sobrepeso"
        } else if (imc >= 30 && imc <= 39.9) {
            categoria = "Obeseo";
        }

        let divImc = document.getElementById("resultadoIMC");
        divImc.innerHTML = `<div class='containerResult'><h2 class='title'>IMC: </h2> ${imc} <h2 class='title'>Categoria: </h2> ${categoria}</div>`;
    }
}