const btnPesquisa = document.getElementById("btn_pesquisa")
btnPesquisa.addEventListener("click", search)


function search() {
  const termoPesquisa = document.getElementById('search').value
  const API_KEY = "6ebe3ad1a7d74972bd9b7c2a5fb89eed";
  let xhr = new XMLHttpRequest();

  xhr.onload = function (data) {
    let dados = JSON.parse(data.target.response)
    localStorage.setItem('db_search', data.target.response)
    let texto;
    console.log(dados);
    for (let i = 0; i < 5; i++) {
      let game = dados.results[i];
      texto += `<div class="col-4">
        <img src="${game.background_image}" class="card-img-top" alt="game">
          <div class="card-body">
            <h5 class="card-title">${game.name}</h5>
            <p class="card-text">Avalição: ${game.rating}</p>
            <p class="avaliacao">Ano de Lançamento: ${game.released}</p>
            <a href="gameDetails.html?id=${game.id}" class="btn btn-primary botao">Veja mais...</a>
          </div>
      </div>`
      console.log(game);
    }
    document.getElementById("tela-game").innerHTML = texto;



  }
  xhr.onerror = function () {
    alert("Error");
  }
  xhr.open("GET", `https://api.rawg.io/api/games?search=${termoPesquisa}&key=${API_KEY}`);
  xhr.send();
}





