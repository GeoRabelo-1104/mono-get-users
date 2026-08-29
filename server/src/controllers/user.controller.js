import { findAllUser } from '../services/user.services.js'

export function getAllUser(response) {
    const users = findAllUser();

    response.writeHead(
        200, 
        { "content-type": "application/json" }
    );
    response.end(JSON.stringify(users)); // transforma array em JSON e .end() mostra na tela a resposta
}