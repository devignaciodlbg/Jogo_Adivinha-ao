//Variáveis
const randomNumber = Math.round(Math.random() * 10)
const screenOne = document.querySelector('.screenOne')
const screenTwo = document.querySelector('.screenTwo')
const btnTry = document.querySelector('#btnTry')
const btnTryAgain = document.querySelector('#btnTryAgain')
let xAttempts = 1

//Funções
function tryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screenTwo.querySelector('h2').innerText = `Parabéns! Você acertou em ${xAttempts} tentativas.`
  }
  
  inputNumber.value = ''
  xAttempts++
}

function tryAgain() {
  toggleScreen()
  xAttempts = 1
}

function toggleScreen() {
  screenOne.classList.toggle('hide')
  screenTwo.classList.toggle('hide')
}

//Eventos
btnTry.addEventListener('click', tryClick)
btnTryAgain.addEventListener('click', tryAgain)
