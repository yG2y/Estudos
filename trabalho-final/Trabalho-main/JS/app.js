const getGames = (data) =>{
    let dados = JSON.parse(data.target.response)
    localStorage.setItem('db_games', data.target.response)
    let dadosHTML = '';
    for (let i = 0; i < dados.results.length; i++) {
        let game = dados.results[i];
        dadosHTML += `
        <div class="col-4">
            <img src="${game.background_image}" class="card-img-top" alt="game">
            <div class="card-body">
                <h5 class="card-title">${game.name}</h5>
                <p class="card-text">Avalição: ${game.rating}</p>
                <p class="avaliacao">Ano de Lançamento: ${game.released}</p>
                <a href="gameDetails.html?id=${game.id}" class="btn btn-primary botao">Veja mais...</a>
            </div>
        </div>`
    }
    document.getElementById('tela-game').innerHTML = dadosHTML
}

const init =  () => {
    
    const API_KEY = "6ebe3ad1a7d74972bd9b7c2a5fb89eed";
    const url = `https://api.rawg.io/api/games?key=${API_KEY}`
    let xhr = new XMLHttpRequest ();
    xhr.onload = getGames
    xhr.open ('GET', url);
    xhr.send ();
   
}


document.body.onload = init

$("#btn_pesquisa").click(function () {
    //sessionStorage.setItem("isPesquisa", true);
    if (sessionStorage.getItem("isPesquisa")) {
      sessionStorage.setItem("item", $("#search").val());
    }
  });