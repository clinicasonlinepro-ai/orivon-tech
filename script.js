// Scroll reveal
function reveal(){
    const reveals = document.querySelectorAll('.reveal');
    for(let i=0;i<reveals.length;i++){
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add('active');
        }
    }
}
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Navbar scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50){
        navbar.style.backgroundColor = '#0A1F44';
        navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.5)';
    } else {
        navbar.style.backgroundColor = 'var(--bg-light)';
        navbar.style.boxShadow = 'none';
    }
});

// CTA smooth scroll
document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('contato').scrollIntoView({behavior:'smooth'});
    });
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Form envio com Formspree
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    
    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            status.innerText = "Mensagem enviada com sucesso! Entraremos em contato.";
            form.reset();
        } else {
            status.innerText = "Erro ao enviar. Tente novamente mais tarde.";
        }
    } catch (error) {
        status.innerText = "Erro ao enviar. Tente novamente mais tarde.";
    }
});