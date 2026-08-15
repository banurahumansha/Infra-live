/* =========================================================
   COMMON CAROUSEL
   Reusable across multiple pages
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const carousels = document.querySelectorAll(".common-carousel");

    carousels.forEach((carousel) => {

        const track =
            carousel.querySelector(".common-carousel-track");

        const slides =
            Array.from(
                carousel.querySelectorAll(".common-carousel-slide")
            );

        const previousButton =
            carousel.querySelector(".common-carousel-prev");

        const nextButton =
            carousel.querySelector(".common-carousel-next");

        const section =
            carousel.closest(".common-carousel-section");

        const pagination =
            section?.querySelector(
                ".common-carousel-pagination"
            );


        /* -----------------------------------------
           SAFETY CHECK
           ----------------------------------------- */

        if (!track || slides.length === 0) {
            return;
        }


        let currentIndex = 0;

        let autoSlideTimer = null;

        const slideCount = slides.length;

        const autoSlideDelay = 5000;


        /* =========================================
           PAGINATION
           ========================================= */

        const dots = [];

        if (pagination) {

            slides.forEach((_, index) => {

                const dot =
                    document.createElement("button");

                dot.type = "button";

                dot.className =
                    "common-carousel-dot";

                dot.setAttribute(
                    "aria-label",
                    `Go to slide ${index + 1}`
                );

                dot.addEventListener(
                    "click",
                    () => {

                        goToSlide(index);

                        restartAutoSlide();

                    }
                );

                pagination.appendChild(dot);

                dots.push(dot);

            });

        }


        /* =========================================
           UPDATE
           ========================================= */

        function updateCarousel() {

            track.style.transform =
                `translateX(-${currentIndex * 100}%)`;


            slides.forEach((slide, index) => {

                slide.classList.toggle(
                    "active",
                    index === currentIndex
                );

            });


            dots.forEach((dot, index) => {

                dot.classList.toggle(
                    "active",
                    index === currentIndex
                );

            });

        }


        /* =========================================
           GO TO SLIDE
           ========================================= */

        function goToSlide(index) {

            currentIndex =
                (index + slideCount) % slideCount;

            updateCarousel();

        }


        /* =========================================
           NEXT
           ========================================= */

        function nextSlide() {

            goToSlide(currentIndex + 1);

        }


        /* =========================================
           PREVIOUS
           ========================================= */

        function previousSlide() {

            goToSlide(currentIndex - 1);

        }


        /* =========================================
           BUTTONS
           ========================================= */

        nextButton?.addEventListener(
            "click",
            () => {

                nextSlide();

                restartAutoSlide();

            }
        );


        previousButton?.addEventListener(
            "click",
            () => {

                previousSlide();

                restartAutoSlide();

            }
        );


        /* =========================================
           AUTO SLIDE
           ========================================= */

        function startAutoSlide() {

            stopAutoSlide();

            if (slideCount <= 1) {
                return;
            }

            autoSlideTimer =
                setInterval(
                    nextSlide,
                    autoSlideDelay
                );

        }


        function stopAutoSlide() {

            if (autoSlideTimer) {

                clearInterval(autoSlideTimer);

                autoSlideTimer = null;

            }

        }


        function restartAutoSlide() {

            stopAutoSlide();

            startAutoSlide();

        }


        /* =========================================
           PAUSE WHILE HOVERING
           ========================================= */

        carousel.addEventListener(
            "mouseenter",
            stopAutoSlide
        );

        carousel.addEventListener(
            "mouseleave",
            startAutoSlide
        );


        /* =========================================
           INITIALIZE
           ========================================= */

        updateCarousel();

        startAutoSlide();

    });

});