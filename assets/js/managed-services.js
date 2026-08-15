document.addEventListener("DOMContentLoaded", () => {
// Reveal section animation

    const revealSections = document.querySelectorAll(".ms-reveal");

    if (!revealSections.length) return;


    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("ms-visible");

                    // Reveal only once
                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealSections.forEach(section => {
        revealObserver.observe(section);
    });

// Intro animation
    const introImage = document.querySelector(".ms-intro-image");
    const introContent = document.querySelector(".ms-intro-content");

    if (!introImage || !introContent) return;

    const introObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    introImage.classList.add("ms-show");

                    setTimeout(() => {
                        introContent.classList.add("ms-show");
                    }, 150);

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.2
        }
    );

    introObserver.observe(introImage);
// card reaveal 

    const advantageSection =
        document.querySelector(".ms-advantage");

    if (!advantageSection) return;

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    advantageSection.classList.add("visible");

                    observer.unobserve(advantageSection);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    observer.observe(advantageSection);

});