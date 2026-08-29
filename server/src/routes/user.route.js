import { getAllUser } from '../controllers/user.controller.js';

export default function routerUsers(request, response) {
    if (request.method === 'GET') return getAllUser(response);
}