/**
 * utilizando uma arrow function no meu modulo.export, torno possivel
 * que meus modulos recebam parametros!
 * APP eh o que eu quero
 * OBS: comecando a gostar de javaScript, do caralho.
 */
module.exports = (app) => {
    //Operando o http GET
    app.get('/', function (requisicao, resposta) {
        resposta.send(`
    <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
             <h1> HOME </h1>
        </body> 
    </html>
    `);
    });

    app.get('/cash', function (requisicao, resposta) {
        resposta.send(`
    <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
             <h1> GRANA ALTA </h1>
        </body> 
    </html>
    `);
    });

    app.get('/gatas', function (requiscao, resposta) {
        resposta.send(`
    <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
             <h1> GATAS </h1>
        </body> 
    </html>
    `);
    })
}