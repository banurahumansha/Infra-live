if (typeof AOS !== "undefined") {
   AOS.init({
    duration: 1500,      // slower = more visible
    once: false,         // repeats when scrolling
    mirror: true,        // animate when scrolling up too
    offset: 50,          // trigger earlier
    easing: 'ease-in-out',
});
}


const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.dataset.target;
            let current = 0;

            const step = Math.ceil(target / 50);

            counter.textContent = "0+";

            const timer = setInterval(() => {

                current += step;

                if (current >= target) {

    if(counter.classList.contains("no-plus")){
        counter.textContent = target;
    }else{
        counter.textContent = target + "+";
    }

    clearInterval(timer);

}else{

    if(counter.classList.contains("no-plus")){
        counter.textContent = current;
    }else{
        counter.textContent = current + "+";
    }

}
            }, 30);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => observer.observe(counter));

