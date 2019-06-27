//aqui temos funcao a constante app ira possibilitar habilitar um http server.
const app = require('./src/config/custom-express');//usando o module.exports;

/**
 * Aqui sera criado o servidor de fato; o metodo listen recebe como primeiro
 * parametro a porta na qual ele sera executado, posteriore recebe uma funcao 
 * anonima que sera chama atraves de callback. Nela executamos o o que quiser.
 * Ler documentacao para detalhes, da para ate levanta um server HTTPS, soh nao
 * sei como funciona a questao do certificado... enfim
 * A refatoracao prega que este arquivo seja responsavel somente por criar o 
 * servidor.
 */
app.listen(3000, function () {
    console.log("Servidor pronto para e-business e escutando na porta 3000");
});


