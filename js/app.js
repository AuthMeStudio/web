//animaciones para los elementos
window.sr = ScrollReveal();
sr.reveal('.navbar',{
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('.header-content-left',{
    duration: 2000,
    origin: 'top',
    distance: '300px'
});
sr.reveal('.header-content-right',{
    duration: 2000,
    origin: 'rigth',
    distance: '300px'
});
sr.reveal('.header-btn',{
    duration: 3000,
    origin: 'bottom',
    distance: '100px'
});
sr.reveal('.headline');
//animacion para navegar entres section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
