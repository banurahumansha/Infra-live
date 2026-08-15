const cards = document.querySelectorAll(".domain-card");

cards.forEach(card => {

    const header = card.querySelector(".domain-header");

    header.addEventListener("click", () => {

        if(window.innerWidth <= 768) return;

        cards.forEach(item => {

            if(item !== card){
                item.classList.remove("active");
            }

        });

        card.classList.toggle("active");

    });

});