"use strict";
const Ljogos = document.getElementById("Ljogos")
var apiKey = "33b802cbf0ff4bdd8034ab3b808da9e0"
const ListaNome = document.getElementById("ListaNome")
const btnPag = document.getElementById("btn-pag")
function pesquisar(nPage) {
    if (!nPage) {
        nPage = 1
    }
    fetch("https://api.rawg.io/api/games?search=" + ListaNome.value + "&page=" + nPage + "&key=" + apiKey)
        .then(res => res.json())
        .then(plista => {
            Ljogos.innerHTML = ""
            btnPag.innerHTML = ""
            if (nPage != 1) {
                let num = nPage - 1
                let back_btn = document.createElement("button")
                back_btn.setAttribute("type", "button")
                back_btn.setAttribute("class", "btn btn-outline-primary me-2")
                back_btn.setAttribute("onclick", "pesquisar(" + num + ")")
                back_btn.innerHTML = '<i class="bi bi-caret-left-fill"></i>'
                btnPag.appendChild(back_btn)
            }
            let divbtn = document.createElement("div")
            divbtn.setAttribute("class", "btn-group me-2")
            divbtn.setAttribute("role", "group")
            divbtn.setAttribute("aria-label", "First group")
            let ind2
            let ind
            if (nPage >= 1 && nPage < 4) {
                ind = 1
                ind2 = 5
            } else {
                ind = nPage - 2
                ind2 = nPage + 2
            }
            for (; ind <= ind2; ind++) {
                let ibtn = document.createElement("button")
                ibtn.setAttribute("type", "button")
                if (ind == nPage) {
                    ibtn.setAttribute("class", "btn btn-primary me-1 rounded")
                } else {
                    ibtn.setAttribute("class", "btn btn-outline-primary me-1 rounded")
                }
                ibtn.setAttribute("onclick", "pesquisar(" + ind + ")")
                ibtn.innerHTML = ind
                divbtn.appendChild(ibtn)
            }
            let fnPage = nPage + 1
            let fo_btn = document.createElement("button")
            fo_btn.setAttribute("type", "button")
            fo_btn.setAttribute("class", "btn btn-outline-primary")
            fo_btn.setAttribute("onclick", "pesquisar(" + fnPage + ")")
            fo_btn.innerHTML = '<i class="bi bi-caret-right-fill"></i>'
            btnPag.appendChild(divbtn)
            btnPag.appendChild(fo_btn)
            let Lista = plista.results
            Lista.forEach(element => {
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
                let generos = element.genres
                p4.innerHTML = "generos: "
                generos.forEach(e => {
                    p4.innerHTML += e.name + " - "
                })
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
                Ljogos.appendChild(cdiv1)
            })
        })
}
ListaNome.addEventListener("keypress", (e)=> {
    if (e.key === "Enter") {
        pesquisar()
    }
});