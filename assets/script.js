/*lang change*/
function changeLanguage(lang) {
    document.getElementById("language-button").innerText = {
        'pt': 'pt',
        'en': 'en',
        'es': 'es'
    }[lang];
}

/*theme change*/
const button = document.getElementById('toggleTheme');
const body = document.body;

button.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
        button.textContent = 'dark'; // Atualiza o texto para "Claro"
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        button.textContent = 'light'; // Atualiza o texto para "Escuro"
    }
});

/*Hamburguer menu toggle*/
const hamburguer = document.getElementById('hamburguer');
const navContainer = document.querySelector('.nav-container');

hamburguer.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    hamburguer.classList.toggle('active');
});
