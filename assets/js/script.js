// * MOBILE NAVBAR
class MobileNavbar {
  constructor(mobileMenu,navList,navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = 'active';

    this.handleClick =  this.handleClick.bind(this);
  }

  handleClick() {
      this.navList.classList.toggle(this.activeClass)
  }
  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick)
  }
  init() {
    if(this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}
const mobileNavbar = new MobileNavbar(
  '.mobile-menu',
  '.nav-list',
  '.nav-list li',
);
mobileNavbar.init();
// * MOBILE NAVBAR

// ! REVEAL MODE
window.sr = ScrollReveal({ reset: true})
sr.reveal('.reveal', {duration: 2000})
// ! REVEAL MODE

// ? CHANGE WORD
document.addEventListener("DOMContentLoaded", function() {
    const wordContainer = document.getElementById("word-container");
    const wordsList = [
        "Olá",          // Português
        "Hello",        // Inglês
        "Bonjour",      // Francês
        "Hallo",        // Alemão
        "Ciao",         // Italiano
        "Hola",         // Espanhol
        "Привет",       // Russo
        "你好",         // Mandarim (Chinês)
        "こんにちは",   // Japonês
        "여보세요",     // Coreano
        "مرحبا",       // Árabe
        "שלום",        // Hebraico
        "Γεια σας",     // Grego
        "Merhaba",      // Turco
        "Hej",          // Sueco
        "Hei",          // Norueguês
        "Dobrý den",    // Tcheco
        "Szia",         // Húngaro
        "Halo",         // Indonésio
        "سلام",          // Persa
        "Aloha",        // Havaiano
        "Saluton",      // Esperanto  
    ]
    let currentWordIndex = 0;
  
    // Função para criar elementos de palavra
    function createWordElement(word) {
      const span = document.createElement("span");
      span.textContent = word;
      span.classList.add("word");
      return span;
    }
  
    // Adicionar palavras à container
    wordsList.forEach((word, index) => {
      const wordElement = createWordElement(word);
      if (index === 0) {
        wordElement.classList.add("active");
      }
      wordContainer.appendChild(wordElement);
    });
  
    setInterval(() => {
      const words = document.querySelectorAll(".word");
      const currentWord = words[currentWordIndex];
      const nextWord = words[(currentWordIndex + 1) % words.length];
  
      currentWord.classList.remove("active");
      nextWord.classList.add("active");
  
      currentWordIndex = (currentWordIndex + 1) % words.length;
    }, 2000);
  });
// ? CHANGE WORD

// * ATIVATED NAVLINKS MOBILE
const list = document.querySelectorAll('.list')
function activeLink(){
    list.forEach((item) => 
    item.classList.remove('active'))
    this.classList.add('active')
}
list.forEach((item) => 
item.addEventListener('click', activeLink))
// * ATIVATED NAVLINKS MOBILE

// ? PROJETO AREA ITENS
const seleciona = (elemento) => document.querySelector(elemento)
const selecionaTodos = elemento => document.querySelectorAll(elemento)

// ! FUNÇÃO MUDAR PALAVRA POR ICONE
const icons = {
    'html': 'html5',
    'css': 'css3',
    'js': 'javascript',
    'python': 'python'
}
const SwitchToIcon = (textArray) => {
    let text = textArray.join(' ');
    for (let word in icons) {
        if(icons.hasOwnProperty(word)) {
            let regex = new RegExp("\\b" + word + "\\b", "gi");
            text = text.replace(regex, `<ion-icon name="logo-${icons[word]}"></ion-icon>`);
        }
    }
    return text;
}
// ! FUNÇÃO MUDAR PALAVRA POR ICONE

const preencherDadosProjetos = (projectItem, item, index) => {
    projectItem.setAttribute('data-key', index)
    projectItem.querySelector('.project-item--name').innerHTML = item.name  
    projectItem.querySelector('.project-item--types').innerHTML = SwitchToIcon(item.types)
    projectItem.querySelector('.project-item--buttons .deploy').href = item.deploy
    projectItem.querySelector('.project-item--buttons .github').href = item.github
}

projectJson.map((item, index) => {
  let projectItem = document.querySelector('.models  .project-item').cloneNode(true)
  seleciona('.project-area').append(projectItem)
  preencherDadosProjetos(projectItem, item, index)

})


// ? PROJETO AREA ITENS