import { getAllProduct } from '../controllers/product.controller.js';

export default function routerProducts(request, response) {
    if (request.method === 'GET') return getAllProduct(response);
}