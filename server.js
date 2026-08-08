import http from 'node:http'; // módulo nativo do node para servidores 

http.createServer(() => {
    console.log('Knocked on the door.') // quando alguém bater na porta 3000, será mostrado no nosso console a mensagem.
}).listen(3000); // por convenção, a porta utilizada para backend é 3000 ou 3333. As demais estão em uso pelo proprio OS.