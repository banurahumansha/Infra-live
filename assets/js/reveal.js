document.addEventListener("DOMContentLoaded", () => {

    const revealItems = document.querySelectorAll(".reveal");

    if (!revealItems.length) return;

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    revealItems.forEach(item => observer.observe(item));

});