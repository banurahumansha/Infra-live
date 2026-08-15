// home - caurosel

const wrapper = document.querySelector(".slides-wrapper");
const slides = document.querySelectorAll(".slide");

let current = 0;
const total = slides.length;
const interval = 5000; // 5 seconds

// Show first slide
showSlide(current);

// Auto slide
setInterval(() => {

    current++;

    if (current >= total) {
        current = 0;
    }

    showSlide(current);

}, interval);

function showSlide(index) {

    // Remove active class from all slides
    slides.forEach((slide) => {

        slide.classList.remove("active");

        // Reset tag animation
        const tag = slide.querySelector(".hero-tag-i");

        if (tag) {
            tag.style.animation = "none";
        }

    });

    // Move slider
wrapper.style.transform = `translateX(-${index * (100/3)}%)`;
    // Activate current slide
    const currentSlide = slides[index];
    currentSlide.classList.add("active");

    // Restart tag animation
    const tag = currentSlide.querySelector(".hero-tag-i");

    if (tag) {

        // Force browser reflow
        void tag.offsetWidth;

        tag.style.animation = "tagDrop 0.7s ease 1.5s forwards";

    }

}

console.log("Script loaded");

window.addEventListener("load", () => {
    console.log("Window loaded");

    document.querySelectorAll("*").forEach(el => {
        const rect = el.getBoundingClientRect();

        if (rect.right > window.innerWidth) {
            console.log("Overflow:", el);
        }
    });
});