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
    var pacienteTR = document.createElement("tr");
    var nomeTD = document.createElement("td");
    var pesoTD = document.createElement("td");
    var alturaTD = document.createElement("td");
    var gorduraTD = document.createElement("td");
    var imcTD = document.createElement("td");
    //vai atriburi os valores
    nomeTD.textContent = paciente.nome;
    pesoTD.textContent = paciente.peso;
    alturaTD.textContent = paciente.altura;
    gorduraTD.textContent = paciente.gordura;
    imcTD.textContent = paciente.imc;
    //vai linkar as coisas
    pacienteTR.appendChild(nomeTD);
    pacienteTR.appendChild(pesoTD);
    pacienteTR.appendChild(alturaTD);
    pacienteTR.appendChild(gorduraTD);
    pacienteTR.appendChild(imcTD);
    //vai colocar na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTR);
    console.log(nomeTD);

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
    td.classList.add(nomeClasse);
    return td;

}
/**Monta o TR da table. */
function montarTr(paciente){
    //Criando o elemento
    var tr = document.createElement("tr");
    tr.classList.add("paciente");
    //Insere os TDs no TR e insere os dados.
    //Cria as TD's e a adiciona dentro da TR
    tr.appendChild(montaTd(paciente.nome, "info-nome"));
    tr.appendChild(montaTd(paciente.peso, "info-peso"));
    tr.appendChild(montaTd(paciente.altura, "info-altura"));
    tr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    tr.appendChild(montaTd(paciente.imc, "info-imc"));
    // retorna a TR
    return tr;
}
