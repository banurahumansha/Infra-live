
// Capablities

const data = {

    infrastructure: {

        image: "assets/images/icon/ent.png",

        title: "Enterprise Infrastructure Services",

        description: "Engineering the resilient physical foundations that power enterprise velocity. From custom data center design and turnkey facility build-outs to next-generation network architectures, high-density structured cabling, and hybrid hyper-converged infrastructure (HCI), we build the baseline stability your applications run on.",

        capabilities: [
            "Custom Data Center Design",
            "Turnkey Facility Build-outs",
            "Network Architecture",
            "High-Density Structured Cabling",
            "Hybrid Hyper-Converged Infrastructure (HCI)"
        ]

    },

    cloud: {

        image: "assets/images/icon/cloud.png",

        title: "Multi-Cloud Services",

        description: "We don’t just resell cloud licenses. We own your cloud engineering outcomes. From initial migration strategies to end-to-end infrastructure lifecycle orchestration, we build and run your cloud environments. Backed by proactive 24×7 Site Reliability Engineering (SRE) teams, we ensure your deployments remain highly available, secure, and commercially optimized.",

        capabilities: [
            "Cloud Migration",
            "Hybrid Cloud",
            "AWS",
            "Microsoft Azure",
            "Google Cloud",
            "24×7 Site Reliability Engineering",
            "Infrastructure Lifecycle Management",
            "Cloud Cost Optimization"
        ]

    },

    elv: {

        image: "assets/images/icon/elv.png",

        title: "Integrated ELV",

        description: "Advanced ELV engineering for smart buildings, corporate campuses, and industrial infrastructure. We bridge the gap between structural engineering and digital automation. Our teams deliver enterprise-grade, high-density unified ELV cabling deployments, continuous public address platforms, and intelligent automated fire alarm detection matrices designed to safeguard large-scale facilities.",

        capabilities: [
            "Structured ELV Cabling",
            "Public Address Systems",
            "Fire Alarm Systems",
            "Smart Building Infrastructure",
            "Industrial Automation",
            "Corporate Campus Solutions"
        ]

    },

    managed: {

        image: "assets/images/icon/managed.jpg",

        title: "Consulting & Managed Services",

        description: "Shifting your operations from reactive ticketing to intelligent, predictive systems management. We keep your business permanently online. Our managed services engine covers full-stack infrastructure health through continuous monitoring, optimized infrastructure management, and resilient backup strategies.",

        capabilities: [
            "24×7 NOC Monitoring",
            "Virtual Desktop Infrastructure (VDI)",
            "Storage Administration",
            "Backup & Disaster Recovery",
            "Infrastructure Health Monitoring",
            "Predictive Maintenance"
        ]

    },

    security: {

        image: "assets/images/icon/security.jpg",

        title: "Cybersecurity & Threat Intelligence",

        description: "Defensive security frameworks built to harden your perimeter and outpace evolving threats. We replace reactive dashboards with a process-first security architecture. Our cybersecurity division provides continuous managed protection, proactive assessments, and rapid incident response.",

        capabilities: [
            "24×7 Managed SOC",
            "SIEM Integration",
            "Vulnerability Assessment & Penetration Testing (VAPT)",
            "Digital Forensics",
            "Threat Intelligence",
            "Incident Response"
        ]

    },

    resource: {

        image: "assets/images/icon/resource.png",

        title: "Resource Augmentation",

        description: "Strategic capacity scaling through specialized technology talent. We eliminate workforce friction by deploying pre-vetted contract professionals, permanent recruitment solutions, and dedicated engineering teams that accelerate enterprise delivery.",

        capabilities: [
            "Contract Staffing",
            "Permanent Recruitment",
            "Dedicated Engineering Teams",
            "Technology Specialists",
            "Project-Based Resources",
            "Rapid Team Scaling"
        ]

    }

};

const details = document.getElementById("details-content");
const cards = document.querySelectorAll(".capability");

function loadContent(key, card){

    const item = data[key];

    const html = `
        <img src="${item.image}" class="details-illustration" alt="${item.title}">

        <h3>${item.title}</h3>

        <p class="details-description">${item.description}</p>

        <h4>Key Capabilities</h4>

        <ul>
            ${item.capabilities.map(x => `<li>${x}</li>`).join("")}
        </ul>
    `;
    
    if(window.innerWidth <= 768){

    card.querySelector(".mobile-details").innerHTML = html;

}else{

    details.innerHTML = html;

}
}

// -------------------------
// Default content
// -------------------------

let activeKey = "infrastructure";

cards[0].classList.add("active");

if (window.innerWidth > 768) {

    loadContent("infrastructure", cards[0]);

} else {

    cards.forEach(card => {

        loadContent(card.dataset.target, card);

    });

}


// -------------------------
// Click Events
// -------------------------
cards.forEach(card => {

    const key = card.dataset.target;

   
    // Desktop click
    card.addEventListener("click", () => {

        if(window.innerWidth <= 768) return;


        activeKey = key;

        cards.forEach(c => c.classList.remove("active"));

        card.classList.add("active");

        loadContent(key, card);

    });

});


// =========================
// OUR APPROACH ANIMATION
// =========================

let approachInitialized = false;


function initApproach(){

    if(approachInitialized) return;

    const items = document.querySelectorAll(".reveal-item");
    const glow = document.querySelector(".approach-glow");
    const section = document.querySelector(".approach-section");

    approachInitialized = true;

    const observer = new IntersectionObserver(
    (entries)=>{



        if(entries[0].isIntersecting){



            items.forEach((item,index)=>{


                setTimeout(()=>{


                    item.classList.add("active");


                    if(glow){

                        glow.style.left =
                        (10 + index * 25) + "%";

                    }


                }, index * 2000);


            });


            observer.disconnect();


        }


    },
    {
        threshold:0
    });


    observer.observe(section);

}



// Normal load
if(document.readyState === "loading"){

    document.addEventListener(
        "DOMContentLoaded",
        initApproach
    );

}
else{

    initApproach();

}


// Fold / browser restore
window.addEventListener(
    "pageshow",
    initApproach
);