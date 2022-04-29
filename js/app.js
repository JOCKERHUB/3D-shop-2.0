const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-link");
  const navLinks = document.querySelectorAll(".nav-link li");

  burger.addEventListener("click", () => {
    //alternanza navbar
    nav.classList.toggle("nav-active");

    //link animati

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    //animazione burger

    burger.classList.toggle("toggle");
  });
};
navSlide();

$(".back-to-top").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".main-content").offset().top - 10,
    },
    1700
  );
});

$(window).scroll(function () {
  if (
    $(window).scrollTop() - $(window).innerHeight() >
    $(".main-content").height()
  ) {
    $(".back-to-top").removeClass("nascosto");
  } else {
    $(".back-to-top").addClass("nascosto");
  }
});
