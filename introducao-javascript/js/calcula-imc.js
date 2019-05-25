/**Calcula o IMC */
function calcularIMC(peso, altura) {
    var imc = 0
    imc = peso / (Math.pow(altura, 2));
    return imc.toFixed(2);
}