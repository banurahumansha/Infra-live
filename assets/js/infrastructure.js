document.addEventListener("DOMContentLoaded", () => {

    /* ==================================================
       Practice Carousel
    ================================================== */

    const track = document.querySelector(".practice-track");
    const slides = document.querySelectorAll(".practice-slide");
    const prevBtn = document.querySelector(".practice-prev");
    const nextBtn = document.querySelector(".practice-next");
    const pagination = document.querySelector(".practice-pagination");
    const carousel = document.querySelector(".practice-window");

    if(track && slides.length && prevBtn && nextBtn && pagination){

        let current = 0;
        let autoSlide;

        /* ==========================
           Create Pagination
        ========================== */

        slides.forEach((_, index) => {

            const dot = document.createElement("span");

            if(index === 0){
                dot.classList.add("active");
            }

            dot.addEventListener("click", () => {

                current = index;

                updateCarousel();

                restartAuto();

            });

            pagination.appendChild(dot);

        });

        const dots = pagination.querySelectorAll("span");

        /* ==========================
           Update Carousel
        ========================== */

        function updateCarousel(){

            track.style.transform = `translateX(-${current * 100}%)`;

            dots.forEach(dot => dot.classList.remove("active"));

            dots[current].classList.add("active");

        }

        /* ==========================
           Next Slide
        ========================== */

        function nextSlide(){

            current++;

            if(current >= slides.length){

                current = 0;

            }

            updateCarousel();

        }

        /* ==========================
           Previous Slide
        ========================== */

        function prevSlide(){

            current--;

            if(current < 0){

                current = slides.length - 1;

            }

            updateCarousel();

        }

        /* ==========================
           Button Events
        ========================== */

        nextBtn.addEventListener("click", () => {

            nextSlide();

            restartAuto();

        });

        prevBtn.addEventListener("click", () => {

            prevSlide();

            restartAuto();

        });

        /* ==========================
           Auto Slide
        ========================== */

        function startAuto(){

            autoSlide = setInterval(nextSlide, 7000);

        }

        function restartAuto(){

            clearInterval(autoSlide);

            startAuto();

        }

        startAuto();

        /* ==========================
           Pause On Hover
        ========================== */

        if(carousel){

            carousel.addEventListener("mouseenter", () => {

                clearInterval(autoSlide);

            });

            carousel.addEventListener("mouseleave", () => {

                startAuto();

            });

        }

        /* ==========================
           Swipe Support
        ========================== */

        let startX = 0;
        let endX = 0;

        if(carousel){

            carousel.addEventListener("touchstart", e => {

                startX = e.touches[0].clientX;

            });

            carousel.addEventListener("touchmove", e => {

                endX = e.touches[0].clientX;

            });

            carousel.addEventListener("touchend", () => {

                const distance = startX - endX;

                if(distance > 60){

                    nextSlide();

                    restartAuto();

                }

                if(distance < -60){

                    prevSlide();

                    restartAuto();

                }

            });

        }

    }

    /* ==================================================
       AWS Service Card Animation
    ================================================== */

    const cards = document.querySelectorAll(".aws-service-card");

    if(cards.length){

        const cardObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                    cardObserver.unobserve(entry.target);

                }

            });

        },{

            threshold:0.25

        });

        cards.forEach(card => {

            cardObserver.observe(card);

        });

    }


});

const infraSection = document.querySelector(".infra-overview");

if (infraSection) {

    const infraObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                infraSection.classList.add("show");

                infraObserver.unobserve(infraSection);

            }

        });

    }, {

        threshold:0.2

    });

    infraObserver.observe(infraSection);

}