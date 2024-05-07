const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const randomNumber = Math.round(Math.random()*10)
let xAttempts = 1

//Função callback
function handleTryClick (event) {
    event.preventDefault() //Não faça o padrao (Não envie o formulário.)

    const inputNumer = document.getElementById('inputNumber')

    if(Number(inputNumer.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        document.querySelector(".screen2 h2").innerText = 'Tentativas: '+xAttempts
  
    }
    xAttempts++
}

//Eventos
const btnTry = document.getElementById('btnTry')
const btnReset = document.getElementById('btnReset')

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function () {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    let xAttempts = 1
})