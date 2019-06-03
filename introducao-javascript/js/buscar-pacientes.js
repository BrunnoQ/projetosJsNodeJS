var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    console.log("Buscando Paciente...");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");//Chamando o server

    xhr.addEventListener("load", function () {
        //Evento load aguarda a resposta do server.
        var erroAjax = document.querySelector("#erro-ajax");
        erroAjax.classList.add("invisivel");
        if (xhr.status == 200) {
            
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function (paciente) {
                adicionarPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }

    });

    xhr.send();
    //https://api-pacientes.herokuapp.com/pacientes;
});