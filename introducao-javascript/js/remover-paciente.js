//Usando o conceito de Event Bubbling do JS
var tabelaPacientes = document.querySelector("table");//Pegou toda a tabela

/**
 * Adciona um evento direto na tabela e depois
 * com os filhos vai buscando e arrancando.
 * Dessa forma a cada elemento adicionado,
 * eh possivel exclui-lo
 */
tabelaPacientes.addEventListener("dblclick", function (event) {
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;//TR da tabela
    paiDoAlvo.classList.add("fadeOut");//criei nova classe no CSS.

    //Baitolagem para colocar opacidade
    setTimeout(function () {
        paiDoAlvo.remove()
    }, 500); //Remove a linha toda 
});


//Jeito arcaico:
//var pacientes = document.querySelectorAll(".paciente");
//Percorrer a lista de pacientes e adicionar evento.
// pacientes.forEach(function (paciente){
//     paciente.addEventListener("dblclick",function(){
//         this.remove();//o this é o dono do evento nesse caso é paciente
//         console.log("double click");
//     })
// });