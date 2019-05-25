//BOtao clicar
var botaoSalvaPaciente = document.querySelector("#adicionar-paciente");
botaoSalvaPaciente.addEventListener("click", eventoBotao);

/** Evento que serve para adicionar todos os dados do paciente.*/
function eventoBotao(event) {
    event.preventDefault();
    //Pegou elemento
    var formulario = document.querySelector("#form-adiciona");
    //Pegou as variaveis e mandou pro Objeto paciente
    var paciente = obterDadosPaciente(formulario);
    //Vai Montar TRs e TDs
    var pacienteTR = montarTr(paciente);
    //vai colocar na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTR);
    formulario.reset();
    console.log(pacienteTR);

}

/** Cria um objeto paciente com os dados do formulario. */
function obterDadosPaciente(formulario) {
    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calcularIMC(peso, altura),
    }

    return paciente;
}
/**Serve para montar o TD e insserir na tabela do site. */
function montarTd(dado, nomeClasse) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(nomeClasse);
    return td;

}
/**Monta o TR da table. */
function montarTr(paciente) {
    //Criando o elemento
    var tr = document.createElement("tr");
    tr.classList.add("paciente");
    //Insere os TDs no TR e insere os dados.
    //Cria as TD's e a adiciona dentro da TR
    tr.appendChild(montarTd(paciente.nome, "info-nome"));
    tr.appendChild(montarTd(paciente.peso, "info-peso"));
    tr.appendChild(montarTd(paciente.altura, "info-altura"));
    tr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    tr.appendChild(montarTd(paciente.imc, "info-imc"));
    // retorna a TR
    return tr;
}