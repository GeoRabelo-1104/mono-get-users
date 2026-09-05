const btnIndex = document.querySelector('#btn-index');
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const btnLogin = document.querySelector('#btn-login');
const btnHome = document.querySelector('#btn-home');
const titleHome = document.querySelector('#title-home');

// Event prevent default só é necessário quando o button esta em um form - para previnir o submit padrão
// window.location.href -> altera a página que está sendo mostrada

if (btnIndex) {
    btnIndex.addEventListener('click', () => { window.location.href = './pages/login.html' });
}

// async -> a função irá ter um pequeno delay antes de seguir com a execução

if (btnLogin) {
    btnLogin.addEventListener('click', async (event) => {
        event.preventDefault();

        const emailValue = email.value;
        const passwordValue = password.value;

        const response = await fetch('http://localhost:3000/users'); // retorna a resposta da requisição (vários dados)
        const data = await response.json(); // transforma a resposta em JSON e armazena em data

        const user = data.find((user) => (
            user.email === emailValue && user.password === passwordValue
        ));

        if (!user) return window.alert('Email e/ou senha inválidos.');

        window.alert('Acesso permitido');

        window.location.href = './home.html';
    })
}

if (btnHome) {
    btnHome.addEventListener('click', () => { 
        setTimeout(() => {
            titleHome.textContent = 'Saindo.'
        }, 0);

        setTimeout(() => {
            titleHome.textContent = 'Saindo..'
        }, 1000);

        setTimeout(() => {
            titleHome.textContent = 'Saindo...'
        }, 2000);

        setTimeout(() => {
            window.location.href = './login.html' 
        }, 3000);
    });
}

/*
button.addEventListener('click', async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do botão - event é o paramaetro com todas as informações do elemento (botao, no caso...)

    const inputValue = input.value; // Armazena o valor do input em uma variável
    input.value = ''; // Reatribue o valor do input para nada

    const response = await fetch('http://localhost:3000/users'); // requisição ao servidor (fetch) e o conteúdo trazido por ele será armazenado em response
    const data = await response.json(); // transforma o retorno do fetch em json 

    // A partir de async/await, o JS se torna assincrono (espera algo)
    console.log(data);

    const user = data.find(user => user.email === inputValue);

    if (!user) {
        return paragraph.textContent = `Usuário não encontrado.`;
    }

    paragraph.textContent = `Usuário ${user.name} encontrado.`;
} ); 
 */