// Activate reveal on scroll
window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("revealOnScroll")
        } else {
            reveals[i].classList.remove("revealOnScroll");
        }
    }
}

// Scale in
window.addEventListener("scroll", scaleIn);

function scaleIn() {
    const scales = document.querySelectorAll(".scale");
    for (let i = 0; i < scales.length; i++) {
        let windowHeight = window.innerHeight;
        let scaleTop = scales[i].getBoundingClientRect().top;
        let scalePoint = 100;

        if (scaleTop < windowHeight - scalePoint) {
            scales[i].classList.add("scaleOnScroll")
        } else {
            scales[i].classList.remove("scaleOnScroll");
        }
    }
}


const hamBurger = document.querySelector('.hambuger')

hamBurger.addEventListener('click', function () {
    this.classList.toggle('active')


})


const MenuItems = document.querySelector('.MenuItems')

MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "700px";
    }
    else {
        MenuItems.style.maxHeight = "0px";
    }


    window.addEventListener("scroll", function () {
        let nav = document.querySelector("nav");
        nav.classList.toggle("sticky", window.scrollY > 0);
    })
}