const navbar = document.getElementById("navbar");
const navBtn = document.getElementById("navBtn");


let bol = false;
const offset = 90;

window.addEventListener("scroll", () => {
    if(scrollY > offset && bol === false) {
        navbar.classList.add('bg-light');
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('navbar-light');

        navbar.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.3)";
        bol=true;
    } else if( scrollY <= offset && bol === true) {
        navbar.classList.remove("bg-light");
        navbar.classList.remove("navbar-light");
        navbar.classList.add("navbar-dark");

        navbar.style.boxShadow = "none";

        bol = false;
    }
})
