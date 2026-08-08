import http from 'node:http';

const users = [{
    user: 'Geovanne',
    email: 'geovanne@email.com'
}, {
    user: 'Vitoria',
    email: 'vitoria@email.com'
}, {
    user: 'Georgia',
    email: 'georgia@email.com'
}];

http.createServer((request, response) => {
    response.writeHead(
        200, 
        { "content-type": "application/json" }
    );
    response.end(JSON.stringify(users)); // transforma array em JSON e .end() mostra na tela a resposta
}).listen(3000);