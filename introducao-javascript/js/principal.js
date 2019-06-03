var titulo = document.querySelector("h1")
// console.log(titulo)
// console.log(titulo.textContent)
titulo.textContent = "Clinica"

//Obter paciente da porra do HTML
var paciente1 = document.querySelector("#primeiro-paciente")
// console.log(paciente1)



//OBTER dado especifico da porra do paciente
var pesoP1 = paciente1.querySelector(".info-peso").textContent
var alturaP1 = paciente1.querySelector(".info-altura").textContent
var imcTEXT = paciente1.querySelector(".info-imc")
// console.log(pesoP1)

var pesoEhValido = true
var alturaEhValida = true

if (pesoP1 <= 0 || pesoP1 >= 1000) {
    // console.log("Peso Valido")
    pesoEhValido = false
    pesoP1.textContent = "Peso errado FILHO DA PUTA!"
}

if (alturaP1 <= 0 || alturaP1 >= 3) {
    // console.log("Altura inválida, filho da puta!")
    alturaEhValida = false
    alturaP1.textContent = "Altura Invalida Filho da PUTA!"
}

if (alturaEhValida && pesoEhValido) {
    //Calcular IMC do gordo P1
    var IMCP1 = pesoP1 / (alturaP1 * alturaP1)
    // console.log(IMCP1)
    //SETAR IMC do gordo
    // console.log(imcTEXT)
    imcTEXT.textContent = IMCP1
} else{
    imcTEXT.textContent = "ALTURA OU PESO ERRADOS, FILHO DA PUTA!"
}