var dbRelatorio = {
    "relatorio": [{
        "Semana": 1,
        "Informacao1": "Uma informação qualquer",
        "Dados2": "slkjdhflsdhfg",
    }, {
        "Semana": 2,
        "Informacao1": "Uma informação qualquer",
        "Dados2": "slkjdhflsdhfg",
    },
    {
        "Semana": 3,
        "Informacao1": "Uma informação qualquer",
        "Dados2": "slkjdhflsdhfg",
    },
    {
        "Semana": 4,
        "Informacao1": "Uma informação qualquer",
        "Dados2": "slkjdhflsdhfg",
    }]
}

var db = JSON.parse(localStorage.getItem("dbusuário"));
if (!db) {
    db = dbRelatorio;

}

function carregarDados() {
    let tamanhoDb = db.relatorio.length;
    console.log(tamanhoDb);
    let texto = "";
    for(let i=0; i<tamanhoDb; i++) {
       texto += `<h3>${db.relatorio.Semana[i]}</h3>
        <p>${db.relatorio.Informacao1[i]}</p>
        <p>${db.relatorio.Dados2[i]}</p>`
    }
    document.getElementById("tela").innerHTML=texto;
}

