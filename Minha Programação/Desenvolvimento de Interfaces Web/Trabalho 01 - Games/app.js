function gameAPI() {
    const API_KEY = "6ebe3ad1a7d74972bd9b7c2a5fb89eed";
    let xhr = new XMLHttpRequest();

    xhr.onload = function() {
        let data = JSON.parse(this.responseText);
        let texto;
        let lista 
        for(let i=0; i<5; i++) {
            texto += `<div class="outros-conteudos">
            <h2>Jogos de ${data.results[i].name}</h2>
            <img src="${data.results[i].image_background}" alt="">
            <div class="videos">
                <div class="video">
                    <ul id="${i}listaGames">
                        <li>
                        ${data.results[i].games[i].name}
                        </li>
                    </ul>
                </div>
            </div>
        </div>`;   
        }
        document.getElementById("teste").innerHTML = texto;
        for(let i=0; i<data.results[i].games.length; i++) {
           for(let j=0; j<data.results[j].games.length; j++) {
            lista += `<li>${data.results[j].games[j].name}</li>`;
            }
            document.getElementById(`"${i}listaGames"`).innerHTML = lista;
        }
        
        console.log(data);
    }
    xhr.onerror = function () {
        alert("Error");
    }
    xhr.open("GET", `https://api.rawg.io/api/platforms?key=${API_KEY}`);
    xhr.send();
}
