const hamburguer = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");
const navButtons = document.querySelector(".nav__buttons");
const navLogo = document.querySelector(".nav__logo");
const navLinksAll = document.querySelectorAll(".nav__links a");
const navButtonsAll = document.querySelectorAll(".nav__buttons button");




hamburguer.onclick = function(){
    navLinks.classList.toggle("show");
    navButtons.classList.toggle("show");
    hamburguer.classList.toggle("active");
    navLogo.classList.toggle("active");
}

navLogo.onclick = function(){
    navLinks.classList.remove("show");
    navButtons.classList.remove("show");
    hamburguer.classList.remove("active");
    navLogo.classList.remove("active");
}

for(let i = 0; i < navLinksAll.length; i++){
    navLinksAll[i].onclick = function(){
        navLinks.classList.remove("show");
        navButtons.classList.remove("show");
        hamburguer.classList.remove("active");
        navLogo.classList.remove("active");
     }
}

for(let i = 0; i < navButtonsAll.length; i++){
    navButtonsAll[i].onclick = function(){
        navLinks.classList.remove("show");
        navButtons.classList.remove("show");
        hamburguer.classList.remove("active");
        navLogo.classList.remove("active");
    }
}
