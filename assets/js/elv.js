document.addEventListener("DOMContentLoaded", function () {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.2
    });

    document.querySelectorAll(".reveal-left, .reveal-right, .reveal-up").forEach(el => {
        observer.observe(el);
    });

});

// image carousel

const accessSlides = document.querySelectorAll(".access-slide");
const accessDots = document.querySelectorAll(".access-dot");

let accessCurrentSlide = 0;

function showAccessSlide(index) {

    accessSlides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });

    accessDots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });

}

function nextAccessSlide() {

    accessCurrentSlide =
        (accessCurrentSlide + 1) % accessSlides.length;

    showAccessSlide(accessCurrentSlide);

}


/* AUTO PLAY */

setInterval(nextAccessSlide, 4000);


/* DOT CLICK */

accessDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        accessCurrentSlide = index;

        showAccessSlide(accessCurrentSlide);

    });

});