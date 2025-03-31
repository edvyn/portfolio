/*lang change*/
function changeLanguage(lang) {
    document.getElementById("language-button").innerText = {
        'pt': 'pt',
        'en': 'en',
        'es': 'es'
    }[lang];
}

/*Hamburguer menu toggle*/
const hamburguer = document.getElementById('hamburguer');
const navContainer = document.querySelector('.nav-container');

hamburguer.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    hamburguer.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("checkboxInput");
    const body = document.body;

    checkbox.addEventListener("change", function () {
        if (this.checked) {
            body.style.backgroundColor = "#3EA6B1"; // Cor quando ativado
        } else {
            body.style.backgroundColor = "#171818";// Cor quando desativado
        }
    });
});

