// HAMBURGUER
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// COUNTERS ANIMADOS
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText.replace(/,/g,'');
    const increment = target / 50; // mais rápido
    if(c < target){
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = target.toLocaleString();
    }
  }
  updateCounter();
});
