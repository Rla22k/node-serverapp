

const http = require('http');

http.createServer(( request, response ) => {

    response.writeHead(200, {
        'Content-Type': 'application/json'
    })

    //response.write('Hello World!');
    let salida = {
        nombre: 'Rafa',
        edad: 30,
        url: request.url
    }
    response.write(JSON.stringify(salida));
    response.end();
})
.listen(8080);

console.log('Escuchando el puerto 8080');