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
    const particlesDiv = document.getElementById("particles-js");

    // Verifica se há um valor salvo no localStorage
    const savedState = localStorage.getItem("checkboxState");
    if (savedState === "true") {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }

    function updateStyles() {
        if (checkbox.checked) {
            particlesDiv.style.backgroundColor = "#15383C"; // Cor quando ativado
            document.documentElement.style.setProperty("--primary-color", "#C1F9FF");
            document.documentElement.style.setProperty("--tertiary-color", "#C1F9FF");
            document.documentElement.style.setProperty("--aux-color", "#3EA6B1");
            document.documentElement.style.setProperty("--dropdown-color", "#171818a8;");

            localStorage.setItem("checkboxState", "true"); // Salva o estado ativado
        } else {
            particlesDiv.style.backgroundColor = "#6da0a3"; // Cor quando desativado
            document.documentElement.style.setProperty("--primary-color", "#15383C");
            document.documentElement.style.setProperty("--tertiary-color", "#15383C");
            document.documentElement.style.setProperty("--aux-color", "#15383C");
            document.documentElement.style.setProperty("--dropdown-color", "#171818a8;");
            localStorage.setItem("checkboxState", "false"); // Salva o estado desativado
        }
    }

    // Aplica o estilo ao carregar a página
    updateStyles();

    // Escuta mudanças no checkbox e atualiza o estado
    checkbox.addEventListener("change", updateStyles);
});



particlesJS("particles-js", {
    "particles": {
      "number": { "value": 40, "density": { "enable": true, "value_area": 600 } },
      "color": { "value": "#4FC3F7" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.7, "random": false },
      "size": { "value": 4, "random": true },
      "move": { "speed": 1, "direction": "none", "random": false }
    },
    "interactivity": {
      "events": {
        "onhover": { "enable": true, "mode": "repulse" },
        "onclick": { "enable": true, "mode": "push" } 
      },
      "modes": {
        "repulse": { "distance": 1000, "duration": 0.4 },
        "push": { "particles_nb": 4 } 
      }
    }
  });