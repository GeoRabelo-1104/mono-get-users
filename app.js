const input = document.querySelector('input');
const button = document.querySelector('button');
const paragraph = document.querySelector('p');

button.addEventListener('click', async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do botão - event é o paramaetro com todas as informações do elemento (botao, no caso...)

    const inputValue = input.value; // Armazena o valor do input em uma variável
    input.value = ''; // Reatribue o valor do input para nada

    const response = await fetch('http://localhost:3000/users'); // requisição ao servidor (fetch) e o conteúdo trazido por ele será armazenado em response
    const data = await response.json(); // transforma o retorno do fetch em json 

    // A partir de async/await, o JS se torna assincrono (espera algo)
    console.log(data);

    let found = false;

    for (let i = 0; i < data.length; i++) {
        if (inputValue === data[i].email) {
            paragraph.textContent = `Usuário ${data[i].user} encontrado!`
            found = true;
            break;
        }

        if (!found) paragraph.textContent = 'Usuário não encontrado.'
    }
} );