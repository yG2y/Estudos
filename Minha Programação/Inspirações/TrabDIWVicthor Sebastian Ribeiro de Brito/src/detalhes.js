"use strict";
const urlP = new URLSearchParams(window.location.search)
const JID = urlP.get('id')
const siteJogo = document.getElementById("siteJogo")
const gameNome = document.getElementById("gameNome")
const imagemc = document.getElementById("imagemc")
const description_game = document.getElementById("description_game")
const tabela = document.getElementById("tabela")
const requisitos = document.getElementById("requisitos")
const tagsN = document.getElementById("tagsN")
var apiKey = "33b802cbf0ff4bdd8034ab3b808da9e0"
fetch("https://api.rawg.io/api/games/" + JID + "?key=" + apiKey + "&dates=2019-09-01,2019-09-30&platforms=18,1,7")
    .then(res => res.json())
    .then(flista => {
        gameNome.innerHTML = flista.name
        let divimg = document.createElement("div")
        divimg.setAttribute("class", "carousel-item active")
        divimg.innerHTML = '<img src="' + flista.background_image + '" class="d-block w-100" alt="...">'
        let divimg2 = document.createElement("div")
        divimg2.setAttribute("class", "carousel-item")
        divimg2.innerHTML = '<img src="' + flista.background_image_additional + '" class="d-block w-100" alt="...">'
        imagemc.appendChild(divimg)
        imagemc.appendChild(divimg2)
        if (flista.clip) {
            let divimg3 = document.createElement("div")
            divimg3.setAttribute("class", "carousel-item")
            divimg3.innerHTML = '<img src="' + flista.clip + '" class="d-block w-100" alt="...">'
            imagemc.appendChild(divimg3)
        }
        description_game.innerHTML += flista.description
        let btn = document.createElement("a")
        btn.setAttribute("class", "btn btn-primary")
        btn.setAttribute("href", flista.website)
        btn.innerHTML = "Visitar o site"
        siteJogo.appendChild(btn)
    })
fetch("https://api.rawg.io/api/games/" + JID + "/screenshots?key=" + apiKey + "&dates=2021-12-01,2022-11-15&platforms=1,7")
    .then(res => res.json())
    .then(sc => {
        let sc1 = sc.results
        let i = 0
        sc1.forEach(e => {
            let divimg = document.createElement("div")
            divimg.setAttribute("class", "carousel-item")
            divimg.innerHTML = '<img src="' + e.image + '" class="d-block w-100" alt="...">'
            imagemc.appendChild(divimg)
            i++
        })
    })
fetch("https://api.rawg.io/api/games/" + JID + "?key=" + apiKey + "&dates=2019-09-01,2019-09-30&platforms=18,1,7")
    .then(res => res.json())
    .then(dlista => {
        let tr1 = document.createElement("tr")
        let dataraw = dlista.released.split('-')
        let data = dataraw[2] + '/' + dataraw[1] + '/' + dataraw[0]
        tr1.innerHTML = '<th scope="row">Data de Lançamento: </th><td id="tr1">' + data + '</td>'
        let tr2 = document.createElement("tr")
        let timestamp = new Date(dlista.updated)
        let dia = timestamp.getDay() + "/" + timestamp.getMonth() + "/" + timestamp.getFullYear() + " às " + timestamp.getHours() + ":" + timestamp.getMinutes()
        tr2.innerHTML = '<th scope="row">Ultima Atualização: </th><td>' + dia + '</td>'
        let tr3 = document.createElement("tr")
        tr3.innerHTML = '<th scope="row">Rating: </th><td>' + dlista.rating + '</td>'
        let tr4 = document.createElement("tr")
        let pl = ''
        let pl1 = 0
        let pl2 = dlista.parent_platforms.length - 1
        dlista.parent_platforms.forEach(element => {
            if (pl1 < pl2) {
                if (element.platform.name == "Nintendo") {
                    pl += 'Nintendo Switch, '
                } else {
                    pl += element.platform.name + ', '
                }
            } else {
                if (element.platform.name == "Nintendo") {
                    pl += 'Nintendo Switch'
                } else {
                    pl += element.platform.name
                }
            }
            pl1++
        });
        tr4.innerHTML = '<th scope="row">Plataformas disponiveis: </th><td>' + pl + '</td>'
        let tr5 = document.createElement("tr")
        tr5.innerHTML = '<th scope="row">Desenvolvedor: </th><td>' + dlista.developers[0].name + '</td>'
        let tr6 = document.createElement("tr")
        tr6.innerHTML = '<th scope="row">Distribuidor: </th><td>' + dlista.publishers[0].name + '</td>'
        let tr7 = document.createElement("tr")
        let generos = ''
        let ge = 0
        let gi = dlista.genres.length - 1
        dlista.genres.forEach(element => {
            if (ge < gi) {
                generos += element.name + ', '
            } else {
                generos += element.name
            }
            ge++
        });
        tr7.innerHTML = '<th scope="row">Generos: </th><td>' + generos + '</td>'
        let tr8 = document.createElement("tr")
        let lg = ''
        let lg1 = 0
        let lg2 = dlista.stores.length - 1
        dlista.stores.forEach(element => {
            if (lg1 < lg2) {
                lg += '<a href="https://' + element.store.domain + '">' + element.store.name + '</a>, '
            } else {
                lg += '<a href="https://' + element.store.domain + '">' + element.store.name + '</a>'
            }
            lg1++
        });
        tr8.innerHTML = '<th scope="row">Lojas: </th><td>' + lg + '</td>'
        let tbody = document.createElement("tbody")
        tbody.appendChild(tr1)
        tbody.appendChild(tr2)
        tbody.appendChild(tr3)
        tbody.appendChild(tr4)
        tbody.appendChild(tr5)
        tbody.appendChild(tr6)
        tbody.appendChild(tr7)
        tbody.appendChild(tr8)
        tabela.appendChild(tbody)
        let gp = 0
        dlista.platforms.forEach(element => {
            if (element.requirements.minimum) {
                let div1 = document.createElement("div")
                let h6 = document.createElement("h6")
                h6.innerHTML = element.platform.name + ":"
                let p1 = document.createElement("p")
                let str1 = element.requirements.minimum
                str1 = str1.replace(/(?:\r\n|\r|\n)/g, '<br>')
                p1.innerHTML = str1
                div1.appendChild(h6)
                div1.appendChild(p1)
                if (element.requirements.recommended) {
                    let p2 = document.createElement("p")
                    let str2 = element.requirements.recommended
                    str2 = str2.replace(/(?:\r\n|\r|\n)/g, '<br>')
                    p2.innerHTML = str2+"<br>"
                    div1.appendChild(p2)
                }
                requisitos.appendChild(div1)
            }
            gp++
        })
        let tag = ''
        let tag1 = 0
        let tag2 = dlista.tags.length - 1
        dlista.tags.forEach(element => {
            if (tag1 < tag2) {
                tag += element.name + ', '
            } else {
                tag += element.name
            }
            tag1++
        })
        tagsN.innerHTML += tag
    })
