const form = document.querySelector("form")
const usernameInput = document.getElementById("utente")
const kmPercorrereInput = document.getElementById("kmPercorrere")
const etaInput = document.getElementById("eta")
const inviaInput = document.getElementById("submit")
const annullaInput = document.getElementById("annulla")
const passeggero = document.querySelector(".passeggero")
const scontoBiglietto = document.querySelector(".scontoBiglietto")
const prezzoBiglietto = document.querySelector(".prezzoBiglietto")
let passeggeroCarrozzaElem = document.querySelector(".carrozza")


let scontoMin = 0.20;
let scontoOver = 0.40;
let prezzoKm = 0.21;




form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const kmPercorrere = kmPercorrereInput.value;
    const eta = etaInput.value;
    
    console.log(eta, kmPercorrere, username)

    let prezzoKmPercorsoScontoMin = (kmPercorrere * prezzoKm) * scontoMin;
    let bigliettoScontoMinori = (kmPercorrere * prezzoKm) - prezzoKmPercorsoScontoMin; //biglietto con sconto Under
    let prezzoKmPercorsoScontoOver = (kmPercorrere * prezzoKm) * scontoOver;
    let bigliettoScontoOver = (kmPercorrere * prezzoKm) - prezzoKmPercorsoScontoOver; //biglietto con sconto Over65

    if (eta === "under") {
        passeggero.innerText = username;
        scontoBiglietto.innerHTML = "20%"
        prezzoBiglietto.innerHTML = bigliettoScontoMinori.toFixed(1) + "$"
        passeggeroTicket.innerHTML = username;
        passeggeroCarrozzaElem.innerHTML = Math.floor(Math.random()* 10) +1;
    } else if (eta === "over") {
        passeggero.innerText = username;
        scontoBiglietto.innerHTML = "40%"
        prezzoBiglietto.innerHTML = bigliettoScontoOver.toFixed(1) + "$"
        carrozza.innerHTML = Math.floor(Math.random() * 10) +1;
    } else if (eta === "nessunaScelta") {
        passeggero.innerText = username;
        scontoBiglietto.innerHTML = "Nessun sconto"
        prezzoBiglietto.innerHTML = (kmPercorrere * prezzoKm) + "$"
        carrozza.innerHTML = Math.floor(Math.random() * 10) +1;
    }
})


