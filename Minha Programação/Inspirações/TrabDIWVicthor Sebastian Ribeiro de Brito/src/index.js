"use strict";
const carouselAP = document.getElementById("carouselAP")
const listaJogos = document.getElementById("listaJogos")
const publishers = document.getElementById("publishers")
const plataformaJogos = document.getElementById("plataformaJogos")
const gstore = document.getElementById("gstore")
var apiKey = "33b802cbf0ff4bdd8034ab3b808da9e0"
fetch("https://api.rawg.io/api/games?key=" + apiKey + "&dates=2019-12-01,2022-12-19&platforms=1,7&page=2")
    .then(res => res.json())
    .then(jlista => {
        let i = 0
        jlista.results.forEach(element => {
            if (i < 4) {
                let div1 = document.createElement("div")
                if (i == 0) {
                    div1.setAttribute("class", "carousel-item active")
                } else {
                    div1.setAttribute("class", "carousel-item")
                }
                let div2 = document.createElement("div")
                div2.setAttribute("class", "container")
                div2.setAttribute("style", "display: flex;flex-direction: column;height: 100%;align-items: center;")
                let h1 = document.createElement("h1")
                h1.innerHTML = element.name
                let div3 = document.createElement("div")
                div3.setAttribute("style", "display: flex; height: 100%; padding: 5px; flex-direction: column;align-items: center;")
                let div4 = document.createElement("div")
                div4.setAttribute("class", "container")
                div4.setAttribute("style", "max-width: 320px;")
                div4.innerHTML = '<img src="' + element.background_image + '" alt="" style="width: 20rem;">'
                let plataforms = element.parent_platforms
                let plataforma = "Plataformas: "
                plataforms.forEach(e => {
                    if (e.platform.slug == "pc") {
                        plataforma += ' <i class="bi bi-windows"></i> <i class="bi bi-steam"></i> '
                    } else if (e.platform.slug == "ios") {
                        plataforma += ' <i class="bi bi-apple"></i> '
                    } else if (e.platform.slug == "nintendo") {
                        plataforma += ' <i class="bi bi-nintendo-switch"></i> '
                    } else if (e.platform.slug == "linux") {
                        plataforma += ' <i class="bi bi-ubuntu"></i> '
                    } else {
                        plataforma += ' <i class="bi bi-' + e.platform.slug + '"></i> '
                    }
                })
                let dlancamento = element.released.split('-')
                let lancamento = dlancamento[2] + "/" + dlancamento[1] + "/" + dlancamento[0]
                let p = document.createElement("p")
                p.setAttribute("style", "max-width: 800px; max-height: fit-content; margin: 15px; border: #040404; border-width: 9px;")
                p.innerHTML = plataforma + '<br>Rating: ' + element.rating + '<br>Data de lançamento: ' + lancamento + '<br>Genero: ' + element.genres[0].name + ", " + element.genres[1].name + '<br> <br><a class="btn btn-primary" style="margin-bottom: 20px;" type="button" href="./detalhes.html?id=' + element.id + '">Ver mais detalhes</a>'
                div3.appendChild(div4)
                div3.appendChild(p)
                div2.appendChild(h1)
                div2.appendChild(div3)
                div1.appendChild(div2)
                carouselAP.appendChild(div1)
            } else {
                let cdiv1 = document.createElement("div")
                cdiv1.setAttribute("class", "card")
                cdiv1.setAttribute("style", "width: 18rem;")
                let img = document.createElement("img")
                img.setAttribute("src", element.background_image)
                img.setAttribute("class", "card-img-top")
                let div5 = document.createElement("div")
                div5.setAttribute("class", "card-body")
                let h5 = document.createElement("h5")
                h5.setAttribute("class", "card-title")
                h5.innerHTML = element.name
                let plataforms = element.parent_platforms
                let plataforma = "Plataformas: "
                plataforms.forEach(e => {
                    if (e.platform.slug == "pc") {
                        plataforma += ' <i class="bi bi-windows"></i> <i class="bi bi-steam"></i> '
                    } else if (e.platform.slug == "ios") {
                        plataforma += ' <i class="bi bi-apple"></i> '
                    } else if (e.platform.slug == "nintendo") {
                        plataforma += ' <i class="bi bi-nintendo-switch"></i> '
                    } else if (e.platform.slug == "linux") {
                        plataforma += ' <i class="bi bi-ubuntu"></i> '
                    } else {
                        plataforma += ' <i class="bi bi-' + e.platform.slug + '"></i> '
                    }
                })
                let dlancamento = element.released.split('-')
                let lancamento = dlancamento[2] + "/" + dlancamento[1] + "/" + dlancamento[0]
                let p1 = document.createElement("p")
                p1.setAttribute("class", "card-text")
                p1.innerHTML = plataforma
                let p2 = document.createElement("p")
                p2.setAttribute("class", "card-text")
                p2.innerhtml = "Nota: " + element.rating
                let p3 = document.createElement("p")
                p3.setAttribute("class", "card-text")
                p3.innerHTML = "data de lançamento: " + lancamento
                let p4 = document.createElement("p")
                p4.setAttribute("class", "card-text")
                if (element.genres.length < 2) {
                    p4.innerHTML = "generos: " + element.genres[0].name
                } else {
                    p4.innerHTML = "generos: " + element.genres[0].name + ", " + element.genres[1].name
                }
                let p5 = document.createElement("p")
                p5.setAttribute("class", "card-text")
                p5.innerHTML = "Rating: " + element.rating
                let al = document.createElement("a")
                al.setAttribute("href", "./detalhes.html?id=" + element.id)
                al.setAttribute("class", "btn btn-primary")
                al.innerHTML = "Ver Detalhes"
                div5.appendChild(h5)
                div5.appendChild(p1)
                div5.appendChild(p5)
                div5.appendChild(p2)
                div5.appendChild(p3)
                div5.appendChild(p4)
                div5.appendChild(al)
                cdiv1.appendChild(img)
                cdiv1.appendChild(div5)
                listaJogos.appendChild(cdiv1)
            }
            i++
        });
    })
fetch("https://api.rawg.io/api/developers?key=" + apiKey + "&dates=2021-12-01,2022-11-15&platforms=1,7")
    .then(res => res.json())
    .then(plista => {
        plista.results.forEach(element => {
            let div1 = document.createElement("div")
            div1.setAttribute("class", "card mb-3")
            div1.setAttribute("style", "width: 580px;")
            let div2 = document.createElement("div")
            div2.setAttribute("class", "row g-0")
            let div3 = document.createElement("div")
            div3.setAttribute("class", "col-md-4")
            let img = document.createElement("img")
            img.setAttribute("src", element.image_background)
            img.setAttribute("class", "card-img-top")
            let div4 = document.createElement("div")
            div4.setAttribute("class", "col-md-8")
            let div5 = document.createElement("div")
            div5.setAttribute("class", "card-body")
            let h5 = document.createElement("h5")
            h5.setAttribute("class", "card-title")
            h5.innerHTML = element.name
            let p = document.createElement("p")
            p.setAttribute("class", "card-text")
            p.innerHTML = "Jogos Publicados: " + element.games_count
            let p1 = document.createElement("strong")
            p1.innerHTML = "Principais Jogos: "
            let cdiv3 = document.createElement("ul")
            cdiv3.setAttribute("class", "list-group list-group-flush")
            let jogos = element.games
            jogos.forEach(e => {
                let a = document.createElement("a")
                a.setAttribute("href", "./detalhes.html?id=" + e.id)
                let pa = document.createElement("li")
                pa.setAttribute("class", "list-group-item")
                a.innerHTML = e.name
                pa.appendChild(a)
                cdiv3.appendChild(pa)
            })
            div5.appendChild(h5)
            div5.appendChild(p)
            div5.appendChild(p1)
            div5.appendChild(cdiv3)
            div4.appendChild(div5)
            div3.appendChild(img)
            div2.appendChild(div3)
            div2.appendChild(div4)
            div1.appendChild(div2)
            publishers.appendChild(div1)
        })
    })
fetch("https://api.rawg.io/api/platforms?key=" + apiKey + "&dates=2021-12-01,2022-11-15&platforms=1,7")
    .then(res => res.json())
    .then(pplista => {
        let i = 0
        pplista.results.forEach(element => {
            if (i < 8) {
                let div1 = document.createElement("div")
                div1.setAttribute("class", "card mb-3")
                div1.setAttribute("style", "width: 580px;")
                let div2 = document.createElement("div")
                div2.setAttribute("class", "row g-0")
                let div3 = document.createElement("div")
                div3.setAttribute("class", "col-md-4")
                let img = document.createElement("img")
                img.setAttribute("src", element.image_background)
                img.setAttribute("class", "card-img-top")
                let div4 = document.createElement("div")
                div4.setAttribute("class", "col-md-8")
                let div5 = document.createElement("div")
                div5.setAttribute("class", "card-body")
                let h5 = document.createElement("h5")
                h5.setAttribute("class", "card-title")
                h5.innerHTML = element.name
                let p = document.createElement("p")
                p.setAttribute("class", "card-text")
                p.innerHTML = "Jogos Publicados: " + element.games_count
                let p1 = document.createElement("strong")
                p1.innerHTML = "Principais Jogos: "
                let cdiv3 = document.createElement("ul")
                cdiv3.setAttribute("class", "list-group list-group-flush")
                let jogos = element.games
                jogos.forEach(e => {
                    let a = document.createElement("a")
                    a.setAttribute("href", "./detalhes.html?id=" + e.id)
                    let pa = document.createElement("li")
                    pa.setAttribute("class", "list-group-item")
                    a.innerHTML = e.name
                    pa.appendChild(a)
                    cdiv3.appendChild(pa)
                })
                div5.appendChild(h5)
                div5.appendChild(p)
                div5.appendChild(p1)
                div5.appendChild(cdiv3)
                div4.appendChild(div5)
                div3.appendChild(img)
                div2.appendChild(div3)
                div2.appendChild(div4)
                div1.appendChild(div2)
                plataformaJogos.appendChild(div1)
            }
            i++
        })
    })
fetch("https://api.rawg.io/api/stores?key=" + apiKey + "&dates=2021-12-01,2022-11-15&platforms=1,7")
    .then(res => res.json())
    .then(pplista => {
        let i = 0
        pplista.results.forEach(element => {
            if (i < 8) {
                let div1 = document.createElement("div")
                div1.setAttribute("class", "card mb-3")
                div1.setAttribute("style", "width: 580px;")
                let div2 = document.createElement("div")
                div2.setAttribute("class", "row g-0")
                let div3 = document.createElement("div")
                div3.setAttribute("class", "col-md-4")
                let img = document.createElement("img")
                img.setAttribute("src", element.image_background)
                img.setAttribute("class", "card-img-top")
                let div4 = document.createElement("div")
                div4.setAttribute("class", "col-md-8")
                let div5 = document.createElement("div")
                div5.setAttribute("class", "card-body")
                let h5 = document.createElement("h5")
                h5.setAttribute("class", "card-title")
                h5.innerHTML = element.name
                let p = document.createElement("p")
                p.setAttribute("class", "card-text")
                p.innerHTML = "Jogos Publicados: " + element.games_count
                let p1 = document.createElement("strong")
                p1.innerHTML = "Principais Jogos: "
                let cdiv3 = document.createElement("ul")
                cdiv3.setAttribute("class", "list-group list-group-flush")
                let jogos = element.games
                jogos.forEach(e => {
                    let a = document.createElement("a")
                    a.setAttribute("href", "./detalhes.html?id=" + e.id)
                    let pa = document.createElement("li")
                    pa.setAttribute("class", "list-group-item")
                    a.innerHTML = e.name
                    pa.appendChild(a)
                    cdiv3.appendChild(pa)
                })
                div5.appendChild(h5)
                div5.appendChild(p)
                div5.appendChild(p1)
                div5.appendChild(cdiv3)
                div4.appendChild(div5)
                div3.appendChild(img)
                div2.appendChild(div3)
                div2.appendChild(div4)
                div1.appendChild(div2)
                gstore.appendChild(div1)
            }
            i++
        })
    })
function setinha(a) {
    let c = document.getElementById("c" + a)
    if (c.innerHTML == '<i class="bi bi-chevron-down"></i>') {
        c.innerHTML = '<i class="bi bi-chevron-up"></i>'
    } else {
        c.innerHTML = '<i class="bi bi-chevron-down"></i>'
    }
}