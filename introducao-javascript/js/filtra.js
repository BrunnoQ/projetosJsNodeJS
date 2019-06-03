var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    //console.log(this.value);//This é o dono do evento lembre-se! This é o campoFiltro
    var pacientes = document.querySelectorAll(".paciente");//Pega todos os elementos com a classe paciente
    if (this.value.length > 0) {
        pacientes.forEach(function (paciente) {
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            //console.log(campoFiltro.value);//This não existe nesse contexto sei la pq.talve o foreach
            var expressao = new RegExp(campoFiltro.value, "i");//"Regex" dizendo para se insensitve. Com regex permite busca por letra existente.
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        });
    } else {
        pacientes.forEach(function (paciente) {
            paciente.classList.remove("invisivel");//removo o filtro
        });
    }
});
