document.addEventListener("DOMContentLoaded", function () {

    const canvas = document.getElementById("inasNetwork");

    // Stop if this page does not have network canvas
    if (!canvas) return;


    const ctx = canvas.getContext("2d");


    function resizeCanvas() {

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

    }


    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();


    const NODE_COUNT = 55;

    const nodes = [];

    class NetworkNode {

        constructor() {

            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            this.radius = 2 + Math.random() * 3;

            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;

            this.phase = Math.random() * Math.PI * 2;

        }


        update() {

            this.x += this.vx;
            this.y += this.vy;


            if(this.x < 0 || this.x > canvas.width)
                this.vx *= -1;


            if(this.y < 0 || this.y > canvas.height)
                this.vy *= -1;

        }


        draw(time) {

            const glow = Math.sin(time + this.phase);

            const alpha = 0.45 + glow * 0.25;


            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.radius * 5,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
            `rgba(0,229,255,${alpha * 0.08})`;

            ctx.fill();



            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.radius * 2,
                0,
                Math.PI * 2
            );


            ctx.fillStyle =
            `rgba(124,77,255,${alpha * 0.20})`;

            ctx.fill();



            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.radius,
                0,
                Math.PI * 2
            );


            ctx.fillStyle="#ffffff";

            ctx.fill();

        }

    }



    for(let i=0;i<NODE_COUNT;i++){

        nodes.push(new NetworkNode());

    }


    let time = 0;


    function animate(){


        requestAnimationFrame(animate);


        time += 0.02;


        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );



        nodes.forEach(node=>{
            node.update();
        });

        
        for(let i=0;i<nodes.length;i++){

            for(let j=i+1;j<nodes.length;j++){


                const dx =
                nodes[i].x - nodes[j].x;


                const dy =
                nodes[i].y - nodes[j].y;


                const distance =
                Math.sqrt(dx*dx + dy*dy);



                if(distance < 180){


                    const alpha =
                    1-(distance/180);



                    ctx.beginPath();


                    ctx.moveTo(
                        nodes[i].x,
                        nodes[i].y
                    );


                    ctx.lineTo(
                        nodes[j].x,
                        nodes[j].y
                    );


                   ctx.strokeStyle =
                    `rgba(124,77,255,${alpha*0.25})`;


                    ctx.lineWidth=5;


                    ctx.shadowColor="#dab6e7";

                    ctx.shadowBlur=8;


                    ctx.stroke();


                    ctx.shadowBlur=0;


                }

            }

        }



        nodes.forEach(node=>{
            node.draw(time);
        });

        //         packets.forEach(packet=>{

        //     packet.draw();

        // });
    }


    animate();


});