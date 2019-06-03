//BOtao clicar
var botaoSalvaPaciente = document.querySelector("#adicionar-paciente");
botaoSalvaPaciente.addEventListener("click", eventoBotao);

/** Evento que serve para adicionar todos os dados do paciente.*/
function eventoBotao(event) {
    event.preventDefault();//FAz com que a pagina nao recarregue
    //Pegou elemento
    var formulario = document.querySelector("#form-adiciona");
    //Pegou as variaveis e mandou pro Objeto paciente
    var paciente = obterDadosPaciente(formulario);
    var erros = validarPaciente(paciente);
    //console.log(erros);
    if (erros.length == 0) {
        //Vai Montar TRs e TDs
        // var pacienteTR = montarTr(paciente);
        //vai colocar na tabela tudo foi para a funcao!
        // var tabela = document.querySelector("#tabela-pacientes");
        // tabela.appendChild(pacienteTR);
        adicionarPacienteNaTabela(paciente);
        formulario.reset();
        var mensagensErro = document.querySelector("#mensagens-erro");
        mensagensErro.innerHTML = "";
        // console.log(pacienteTR);
    } else {
        exibirMensagensDeErro(erros);
        // console.log(paciente);
        // console.log("paciente invalido");
    }
}

/**Adiciona o paciente na tabela do HTML */
function adicionarPacienteNaTabela(paciente) {
    var pacienteTr = montarTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

/**Monta as li dentro da ul, exibindo a mensagem de erro no formulario. */
function exibirMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

/** Cria um objeto paciente com os dados do formulario. */
function obterDadosPaciente(formulario) {
    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calcularIMC(formulario.peso.value, formulario.altura.value)
    }
    // console.log(paciente.imc);
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
