let saboresAtuais = 0;

function formatarNumeroSabores() {
    let elemento = document.getElementById("numeroSabores");
    saboresAtuais = document.querySelectorAll(".selected-sabor").length;
    console.log(saboresAtuais);
    let numeroSabores = JSON.parse(localStorage.getItem("TAMANHO")).qtdsabores;

    elemento.innerText = saboresAtuais + " / " + numeroSabores;

    setTimeout(() => {
        formatarNumeroSabores();
    }, 500)
}

formatarNumeroSabores();