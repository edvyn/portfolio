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
    const navcontainerDiv = document.getElementById('navcontainer');

    checkbox.addEventListener("change", function () {
        if (this.checked) {
            particlesDiv.style.backgroundColor = "#15383C"; // Cor quando ativado
        } else {
            particlesDiv.style.backgroundColor ='#6da0a3'; // Cor quando desativado
        }
    });
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