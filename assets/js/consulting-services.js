const swiper = new Swiper(".consultingSwiper", {

    loop:true,

    speed:800,

    spaceBetween:30,

    grabCursor:true,

    centeredSlides:false,

    autoplay:{
        delay:6000,
        disableOnInteraction:false
    },

    pagination:{
        el:".swiper-pagination",
        clickable:true
    },

    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },

    keyboard:{
        enabled:true
    }

});