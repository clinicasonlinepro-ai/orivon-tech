/* ================================
   ORIVON TECH - SCRIPT PREMIUM
================================ */

/* HEADER DINÂMICO */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


/* SCROLL SUAVE PARA LINKS INTERNOS */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


/* ================================
   CHATBOT
================================ */

const chatbot = document.getElementById("chatbot");
const openChat = document.getElementById("open-chat");
const closeChat = document.getElementById("close-chat");
const resposta = document.getElementById("chat-response");

const respostas = {
  1: "Criamos seu site profissional completo, configuramos domínio e garantimos ajustes estratégicos contínuos.",
  2: "O investimento varia conforme estrutura e objetivo. Entre em contato para receber uma proposta personalizada.",
  3: "O prazo médio de entrega é de 7 a 15 dias, dependendo da complexidade do projeto.",
  4: "Sim. Também oferecemos chatbot inteligente para automatizar atendimento e gerar mais oportunidades."
};

if (openChat && chatbot) {
  openChat.addEventListener("click", () => {
    chatbot.classList.add("show");
  });
}

if (closeChat && chatbot) {
  closeChat.addEventListener("click", () => {
    chatbot.classList.remove("show");
  });
}

function responder(opcao) {
  if (resposta && respostas[opcao]) {
    resposta.innerText = respostas[opcao];
  }
}


/* ================================
   ANIMAÇÃO SUAVE AO APARECER
================================ */

const elementos = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.15
});

elementos.forEach(el => observer.observe(el));


/* ================================
   BOTÃO WHATSAPP (EFEITO SUAVE)
================================ */

const whatsapp = document.querySelector(".whatsapp-float");

if (whatsapp) {
  setInterval(() => {
    whatsapp.classList.toggle("pulse");
  }, 4000);
}