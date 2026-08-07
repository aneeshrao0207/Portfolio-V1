// ==========================
// LIGHT / DARK MODE
// ==========================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const icon = themeToggle.querySelector("i");

    if(document.body.classList.contains("light")){

        localStorage.setItem("theme","light");

    }

    else{

        localStorage.setItem("theme","dark");

    }

});

// Load Theme

window.addEventListener("load",()=>{

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme==="light"){

        document.body.classList.add("light");

    }

});


// ==========================
// NAVBAR SHADOW ON SCROLL
// ==========================

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.style.boxShadow="0 15px 40px rgba(0,0,0,.35)";

        navbar.style.height="72px";

    }

    else{

        navbar.style.boxShadow="0 8px 30px rgba(0,0,0,.25)";

        navbar.style.height="78px";

    }

});

/*====================================================
            SKILL WHEEL
====================================================*/

const skillCards = document.querySelectorAll(".skill-card");

const wheelOverlay = document.querySelector(".wheel-overlay");

const wheelClose = document.querySelector(".wheel-close");

const wheelContainer = document.querySelector(".wheel-container");

const wheelTitle = document.querySelector(".wheel-center h2");

const wheelIcon = document.querySelector(".wheel-icon");

let rotation = 0;

let wheelAnimation;

/*==============================================*/

skillCards.forEach(card=>{

card.addEventListener("click",()=>{

openWheel(card);

});

});

/*==============================================*/

function openWheel(card){

wheelOverlay.classList.add("active");

document.body.style.overflow="hidden";

wheelTitle.innerHTML=card.dataset.title;

wheelIcon.innerHTML=card.dataset.icon;

wheelIcon.style.background=card.dataset.color;

wheelContainer.innerHTML="";

const skills=card.dataset.skills.split(",");

createWheel(skills);

cancelAnimationFrame(wheelAnimation);

animateWheel();

}

/*==============================================*/

function closeWheel(){

wheelOverlay.classList.remove("active");

document.body.style.overflow="auto";

cancelAnimationFrame(wheelAnimation);

}

wheelClose.onclick=closeWheel;

wheelOverlay.onclick=(e)=>{

if(e.target===wheelOverlay){

closeWheel();

}

};

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

closeWheel();

}

});

/*====================================================
            CREATE CHIPS
====================================================*/

function createWheel(skills){

const radius=310;

const total=skills.length;

skills.forEach((skill,index)=>{

const chip=document.createElement("div");

chip.className="skill-chip";

chip.innerHTML=skill;

const angle=(360/total)*index;

chip.dataset.angle=angle;

wheelContainer.appendChild(chip);

});

}

/*====================================================
            ANIMATION
====================================================*/

function animateWheel(){

rotation+=0.2;

const chips=document.querySelectorAll(".skill-chip");

const radius=320;

chips.forEach(chip=>{

const angle=parseFloat(chip.dataset.angle)+rotation;

const rad=angle*Math.PI/180;

const x=Math.cos(rad)*radius;

const y=Math.sin(rad)*radius;

chip.style.left=`calc(50% + ${x}px)`;

chip.style.top=`calc(50% + ${y}px)`;

/* keep text straight */

chip.style.transform="translate(-50%,-50%)";

});

wheelAnimation=requestAnimationFrame(animateWheel);

}



/*==================================================
            PROJECT COMMAND CENTER
==================================================*/

const projects = {

    vanrakshak:{

        title:"VanRakshak",

        category:"AI • Dashboard • Hackathon",

        image:"images/vanrakshak.png",

        description:
        "AI Powered Forest Monitoring Dashboard developed during HackMela to monitor forests, wildlife and environmental conditions using intelligent technologies.",

        tech:[
            "HTML",
            "CSS",
            "JavaScript",
            "AI",
            "IoT",
            "Dashboard UI"
        ],

        features:[
            "Real Time Dashboard",
            "AI Detection",
            "Forest Monitoring",
            "Analytics & Reports"
        ],

        github:"https://github.com/yourusername/VanRakshak",

        live:"#",

        case:"#"

    },



    campuseye:{

        title:"CampusEye",

        category:"College Management",

        image:"images/campuseye.png",

        description:
        "CampusEye is a smart campus management platform designed to simplify administration, improve communication and enhance student experience.",

        tech:[
            "HTML",
            "CSS",
            "JavaScript"
        ],

        features:[
            "Student Dashboard",
            "Attendance",
            "Notice Board",
            "Responsive UI"
        ],

        github:"#",

        live:"#",

        case:"#"

    },



    portfolio:{

        title:"Developer Portfolio",

        category:"Personal Website",

        image:"images/portfolio.png",

        description:
        "A premium portfolio designed to showcase projects, achievements, skills and experience with modern UI animations.",

        tech:[
            "HTML",
            "CSS",
            "JavaScript"
        ],

        features:[
            "Dark Mode",
            "Animations",
            "Responsive Design",
            "Interactive UI"
        ],

        github:"#",

        live:"#",

        case:"#"

    },



    calculator:{

        title:"Calculator",

        category:"Frontend Project",

        image:"images/calculator.png",

        description:
        "Responsive Calculator developed during CodeAlpha Frontend Internship featuring a modern UI and theme switcher.",

        tech:[
            "HTML",
            "CSS",
            "JavaScript"
        ],

        features:[
            "Responsive",
            "Theme Switch",
            "Keyboard Support",
            "Smooth UI"
        ],

        github:"#",

        live:"#",

        case:"#"

    }

};



/*==================================================
            ELEMENTS
==================================================*/

const items=document.querySelectorAll(".project-item");

const image=document.getElementById("projectImage");

const title=document.getElementById("projectTitle");

const category=document.getElementById("projectCategory");

const description=document.getElementById("projectDescription");

const tech=document.getElementById("projectTech");

const feature=document.getElementById("featureList");

const github=document.getElementById("githubBtn");

const live=document.getElementById("liveBtn");

const study=document.getElementById("caseBtn");

const viewer=document.querySelector(".project-viewer");



/*==================================================
            CHANGE PROJECT
==================================================*/

items.forEach(item=>{

    item.addEventListener("click",()=>{

        items.forEach(card=>card.classList.remove("active"));

        item.classList.add("active");

        const data=projects[item.dataset.project];



        viewer.style.opacity="0";

        viewer.style.transform="translateY(30px)";



        setTimeout(()=>{

            image.src=data.image;

            title.textContent=data.title;

            category.textContent=data.category;

            description.textContent=data.description;



            tech.innerHTML="";

            data.tech.forEach(skill=>{

                tech.innerHTML+=`<span>${skill}</span>`;

            });



            feature.innerHTML="";

            data.features.forEach(point=>{

                feature.innerHTML+=`<li>${point}</li>`;

            });



            github.href=data.github;

            live.href=data.live;

            study.href=data.case;



            viewer.style.opacity="1";

            viewer.style.transform="translateY(0px)";



        },250);

    });

});

/*=====================================
        PORTFOLIO APPRECIATION
======================================*/

const portfolioLike = document.getElementById("portfolioLike");
const ratingMessage = document.getElementById("ratingMessage");

if(portfolioLike){

    if(localStorage.getItem("portfolioLiked")){

        portfolioLike.classList.add("liked");

        ratingMessage.innerHTML = "❤️ Thank you for appreciating my portfolio!";

    }

    portfolioLike.onclick = () => {

        if(localStorage.getItem("portfolioLiked")){

            return;

        }

        portfolioLike.classList.add("liked");

        ratingMessage.innerHTML = "❤️ Thank you for appreciating my portfolio!";

        localStorage.setItem("portfolioLiked","true");

    };

}