var titulo = document.querySelector("h1");
titulo.textContent = "Clinica";

//OBTER os pacientes
var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var imcTEXT = paciente.querySelector(".info-imc");
    var pesoEhValido = validarPeso(peso);
    var alturaEhValida = validarAltura(altura);

    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida, filho da puta!");
        alturaEhValida = false;
        imcTEXT.textContent = "Altura Invalida Filho da PUTA!";

    }

    if (alturaEhValida && pesoEhValido) {
        //Calcular IMC do gordo P1
        var IMCP1 = calcularIMC(peso, altura);
        imcTEXT.textContent = IMCP1;
    } else {
        if (!alturaEhValida && !pesoEhValido) {
            imcTEXT.textContent = "PESO e ALTURA INVALIDOS FILHO DA PUTA!";

        } else if (!pesoEhValido) {
            imcTEXT.textContent = "PESO INVALIDO FILHO DA PUTA!";
        } else {
            imcTEXT.textContent = "ALTURA INVALIDA FILHO DA PUTA!";
        }
        paciente.classList.add("paciente-invalido");
    }
}

/**Validar a porra do peso. */
function validarPeso(peso) {
    if (peso <= 0 || peso >= 1000) {
        return false;
    } else {
        return true;
    }
}

/**Validar a porra da altura. */
function validarAltura(altura) {
    if (altura <= 0 || altura >= 3) {
        return false;
    } else {
        return true;
    }
}
/**Validar paciente */
function validarPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validarPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validarAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

//titulo click
titulo.addEventListener("click", funcaoParaClicar);
function funcaoParaClicar() {
    console.log("Filho da puta clicou no tituto.")
}