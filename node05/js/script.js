var dados = (results) => {
    console.log(results);
}

const btnConsulta = document.getElementById("btnConsulta");

btnConsulta.addEventListener("click", () => {
    fetch("/consultar", {
        method: "GET",
        cache: "default",
    })
    .then(res => {
        res.json()
            .then(data => {
                dados(data);
            })
    });
})