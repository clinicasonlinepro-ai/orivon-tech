// --- Menu Hambúrguer ---
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // mostra/esconde menu mobile
});

// Fecha menu ao clicar em link (mobile)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

// --- Scroll Reveal para Cards ---
const revealElements = document.querySelectorAll('.servico-card, .resultado-card, .processo-card');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < windowHeight - 50){ // quando estiver visível
            el.classList.add('active'); // adiciona classe que CSS trata
        }
    });
}

// Inicializa quando rola ou carrega
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// --- Animação de destaque WhatsApp ---
const whatsappBtn = document.querySelector('.whatsapp-btn');

const pulseWhatsApp = () => {
    whatsappBtn.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.1)' },
        { transform: 'scale(1)' }
    ], {
        duration: 2000,
        iterations: Infinity
    });
}

pulseWhatsApp();