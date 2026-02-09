// Scroll reveal
function reveal(){
    const reveals = document.querySelectorAll('.reveal');
    for(let i=0; i<reveals.length; i++){
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
        navbar.style.backgroundColor = '#12141f';
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

// Form submit
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Mensagem enviada! Entraremos em contato em breve.');
    e.target.reset();
});