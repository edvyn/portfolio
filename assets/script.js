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
            document.documentElement.style.setProperty("--dropdown-color", "#171818a8");
            document.documentElement.style.setProperty("--skills-color", "#6ba5a2");

            localStorage.setItem("checkboxState", "true"); // Salva o estado ativado
        } else {
            particlesDiv.style.backgroundColor = "#6da0a3"; // Cor quando desativado
            document.documentElement.style.setProperty("--primary-color", "#15383C");
            document.documentElement.style.setProperty("--tertiary-color", "#15383C");
            document.documentElement.style.setProperty("--aux-color", "#15383C");
            document.documentElement.style.setProperty("--dropdown-color", "#171818a8");
            document.documentElement.style.setProperty("--skills-color", "#15383C");

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

const skills = {
    development: ['JavaScript', 'Html', 'Css', 'Sass', 'Tailwind', 'React.js', 'Node.js', 'SQL', 'Mongodb', 'Java', 'Python', 'Django', 'Bootstrap', 'Git'],
    design: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'WordPress'],
    video: ['Adobe Premiere', 'Final Cut Pro', 'DaVinci Resolve', 'After Effects']
};

const skillDescriptions = {
    'JavaScript': 'Linguagem de programação para web.',
    'Html': 'Linguagem de marcação para estruturar páginas.',
    'Css': 'Folhas de estilo para estilizar páginas.',
    'Sass': 'Pré-processador CSS para melhor organização.',
    'Tailwind': 'Framework CSS utilitário.',
    'React.js': 'Biblioteca JavaScript para interfaces.',
    'Node.js': 'Ambiente JavaScript para backend.',
    'SQL': 'Linguagem para gerenciamento de bancos de dados.',
    'Mongodb': 'Banco de dados NoSQL orientado a documentos.',
    'Java': 'Linguagem de programação versátil.',
    'Python': 'Linguagem de programação poderosa e flexível.',
    'Django': 'Framework web para Python.',
    'Bootstrap': 'Framework CSS para desenvolvimento responsivo.',
    'Git': 'Sistema de controle de versão distribuído.',
    'Figma': 'Ferramenta de design colaborativa.',
    'Adobe Photoshop': 'Edição avançada de imagens.',
    'Adobe Illustrator': 'Criação de gráficos vetoriais.',
    'WordPress': 'Plataforma para criação de sites e blogs.',
    'Adobe Premiere': 'Edição profissional de vídeos.',
    'Final Cut Pro': 'Software de edição de vídeo da Apple.',
    'DaVinci Resolve': 'Edição de vídeo e correção de cor.',
    'After Effects': 'Animações e efeitos visuais.'
};

const skillIcons = {
    'JavaScript': { icon: 'fab fa-js', color: '#F7DF1E' },
    'Html': { icon: 'fab fa-html5', color: '#E34F26' },
    'Css': { icon: 'fab fa-css3-alt', color: '#1572B6' },
    'Sass': { icon: 'fab fa-sass', color: '#CC6699' },
    'Tailwind': { icon: 'fas fa-wind', color: '#38BDF8' },
    'React.js': { icon: 'fab fa-react', color: '#61DBFB' },
    'Node.js': { icon: 'fab fa-node-js', color: '#3C873A' },
    'SQL': { icon: 'fas fa-database', color: '#707070' },
    'Mongodb': { icon: 'fas fa-leaf', color: '#4DB33D' },
    'Java': { icon: 'fab fa-java', color: '#F8981D' },
    'Python': { icon: 'fab fa-python', color: '#3776AB' },
    'Django': { icon: 'fab fa-python', color: '#092E20' },
    'Bootstrap': { icon: 'fab fa-bootstrap', color: '#563D7C' },
    'Git': { icon: 'fab fa-git-alt', color: '#F05032' },
    'Figma': { icon: 'fab fa-figma', color: '#F24E1E' },
    'Adobe Photoshop': { icon: 'fas fa-image', color: '#31A8FF' },
    'Adobe Illustrator': { icon: 'fas fa-paint-brush', color: '#FF9A00' },
    'WordPress': { icon: 'fab fa-wordpress', color: '#21759B' },
    'Adobe Premiere': { icon: 'fas fa-video', color: '#F7A600' },
    'Final Cut Pro': { icon: 'fas fa-film', color: '#9E9E9E' },
    'DaVinci Resolve': { icon: 'fas fa-adjust', color: '#5C5C5C' },
    'After Effects': { icon: 'fas fa-magic', color: '#9B5DE5' }
};

const categorySelect = document.getElementById('category');
const skillsGrid = document.getElementById('skills-grid');

function updateGrid() {
    const selectedCategory = categorySelect.value;
    skillsGrid.innerHTML = '';
    
    skills[selectedCategory].forEach(skill => {
        const div = document.createElement('div');
        div.className = 'grid-item';
        
        const iconContainer = document.createElement('div');
        iconContainer.className = 'icon-container';
        const icon = document.createElement('i');
        
        const skillData = skillIcons[skill];
        icon.className = skillData ? skillData.icon : 'fas fa-tools';
        icon.style.color = skillData ? skillData.color : '#000000';
        icon.style.fontSize = '3rem';
        
        iconContainer.appendChild(icon);
        
        const textContainer = document.createElement('div');
        textContainer.className = 'text-container';
        
        const title = document.createElement('div');
        title.className = 'skill-title';
        title.textContent = skill;
        
        const description = document.createElement('div');
        description.className = 'skill-description';
        description.textContent = skillDescriptions[skill] || 'Descrição não disponível';
        
        textContainer.appendChild(title);
        textContainer.appendChild(description);
        
        div.appendChild(iconContainer);
        div.appendChild(textContainer);
        skillsGrid.appendChild(div);
    });
}

categorySelect.addEventListener('change', updateGrid);
updateGrid();


window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#6ba5a2"; // Cor após o scroll
        navbar.style.transition = "background-color 0.3s ease";
    } else {
        navbar.style.backgroundColor = ""; // Cor original
    }
});
