const http = require('http');

http.createServer( (req, res) => {

    // res.writeHead(404)
    
    res.write('Hola Mundo');
    res.end();
})
.listen( 8080 );

console.log('Activo en el puerto, 8080');