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