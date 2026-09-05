import { findAllProduct } from '../services/product.services.js'

export function getAllProduct(response) {
    const products = findAllProduct();

    response.writeHead(
        200, 
        { "content-type": "application/json" }
    );
    response.end(JSON.stringify(products)); // transforma array em JSON e .end() mostra na tela a resposta
}