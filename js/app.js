const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    const navLinks = document.querySelectorAll('.nav-link li');


    burger.addEventListener('click', () => {
        //alternanza navbar
        nav.classList.toggle('nav-active');


        //link animati

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }


        });

        //animazione burger

        burger.classList.toggle('toggle');
    });
}
navSlide();