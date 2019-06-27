const http = require('http');//Lidando diretamente com o protocolo HTTP, temos nuances desnecessarias e trabalhosas.

const servidor = http.createServer(function(requisicao, resposta){

    let html = '';
    /**
     * Nas aulas da tia cotinha isso quer dizer o q ??
     * Complexidade ciclomática!!
     * Até aqui o projeto não é um nodejs project
     * Para iniciar um projeto como nodejs eh preciso
     * executar o comando npm init.
     * Iremos importar módulos que facilitaram a vida!
     */
    if(requisicao.url == '/'){
        html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Casa do Código </h1>
            </body> 
        </html>
    `;
    }else if(requisicao.url == '/mulheres'){
        html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Gatas Quentes </h1>
            </body> 
        </html>
    `;
    }else if (requisicao.url == '/config'){
        html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Tec </h1>
            </body> 
        </html>
    `;
    }else if (requisicao.url == '/cash'){
        html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Grana Alta </h1>
            </body> 
        </html>
    `;
    }

    resposta.end(html);
});
servidor.listen(3000);