document.addEventListener("DOMContentLoaded", function(){


const canvas = document.getElementById("scrollNetwork");

if(!canvas) return;


const ctx = canvas.getContext("2d");



function resize(){

    const section =
    document.querySelector(".contact-main-section");


    canvas.width = window.innerWidth;

    canvas.height = section.offsetHeight;

}


resize();

window.addEventListener("resize", resize);



let scrollProgress = 0;



window.addEventListener("scroll",()=>{


    const section =
    document.querySelector(".contact-main-section");


    const rect =
    section.getBoundingClientRect();



    const sectionHeight =
    section.offsetHeight;



    const viewport =
    window.innerHeight;



    let progress =
    (-rect.top) /
    (sectionHeight - viewport);



    progress =
    Math.min(
        Math.max(progress,0),
        1
    );


    scrollProgress = progress;


    draw();


});






function draw(){


ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
);



const x =
// canvas.width * 0.12;

canvas.width * 0.42;


const startY = 0;


const endY =
canvas.height - 300;




/*==============================
Completed glowing line
==============================*/


const arrowY =
startY +
(
(endY-startY)
*
scrollProgress
);



ctx.beginPath();


ctx.moveTo(
    x,
    startY
);


ctx.lineTo(
    x,
    arrowY
);



ctx.strokeStyle =
"rgba(0,229,255,0.8)";


ctx.lineWidth = 3;


ctx.shadowColor =
"#00e5ff";


ctx.shadowBlur = 15;


ctx.stroke();


ctx.shadowBlur = 0;






/*==============================
Connection dots
==============================*/


const section =
document.querySelector(".contact-main-section");


const sectionTop =
section.getBoundingClientRect().top;



const elements = [

    document.querySelector(".contact-map-wrapper"),

    ...document.querySelectorAll(".contact-detail-card"),

    document.querySelector(".contact-whatsapp-box")

];



const points = elements.map(el=>{


    const rect =
    el.getBoundingClientRect();


    return (
        rect.top -
        sectionTop +
        rect.height / 2
    );


});



points.forEach(y=>{


    ctx.beginPath();


    ctx.arc(
        x,
        y,
        7,
        0,
        Math.PI*2
    );



    ctx.fillStyle =
    "#00e5ff";



    ctx.shadowColor =
    "#00e5ff";


    ctx.shadowBlur = 18;


    ctx.fill();



});





/*==============================
Moving arrow
==============================*/


drawArrow(
    x,
    arrowY
);



}





function drawArrow(x,y){


ctx.save();


ctx.translate(
    x,
    y
);



ctx.beginPath();


ctx.moveTo(
    0,
    12
);


ctx.lineTo(
    -8,
    -8
);


ctx.lineTo(
    8,
    -8
);



ctx.closePath();



ctx.fillStyle =
"#00e5ff";
    


ctx.shadowColor =
"#00e5ff";


ctx.shadowBlur = 20;



ctx.fill();



ctx.restore();


}





draw();


});