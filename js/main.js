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

// ==========================================
// SKILL MODAL
// ==========================================

const cards = document.querySelectorAll(".skill-card");

const overlay = document.querySelector(".skill-modal-overlay");

const modal = document.querySelector(".skill-modal");

const closeBtn = document.querySelector(".close-modal");

const modalTitle = document.getElementById("modalTitle");

const modalIcon = document.getElementById("modalIcon");

const modalDescription = document.getElementById("modalDescription");

const modalSkills = document.getElementById("modalSkills");



// ==========================================
// OPEN MODAL
// ==========================================

cards.forEach(card=>{

    card.querySelector(".explore-btn").addEventListener("click",()=>{

        const title=card.dataset.title;

        const icon=card.dataset.icon;

        const description=card.dataset.description;

        const skills=card.dataset.skills.split(",");



        modalTitle.textContent=title;

        modalIcon.textContent=icon;

        modalDescription.textContent=description;



        modalSkills.innerHTML="";



        skills.forEach((skill,index)=>{

            const chip=document.createElement("span");

            chip.textContent=skill;

            chip.style.animationDelay=`${index*0.08}s`;

            modalSkills.appendChild(chip);

        });



        overlay.classList.add("active");

        document.body.classList.add("modal-open");

    });

});



// ==========================================
// CLOSE
// ==========================================

function closeModal(){

    overlay.classList.remove("active");

    document.body.classList.remove("modal-open");

}



closeBtn.addEventListener("click",closeModal);



// ==========================================
// CLICK OUTSIDE
// ==========================================

overlay.addEventListener("click",(e)=>{

    if(e.target===overlay){

        closeModal();

    }

});



// ==========================================
// ESC KEY
// ==========================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeModal();

    }

});



// ==========================================
// SMALL CARD HOVER EFFECT
// ==========================================

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.setProperty("--x",`${x}px`);

        card.style.setProperty("--y",`${y}px`);

    });

});


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

/*==================================
        PORTFOLIO LIKE
===================================*/

const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

let count = localStorage.getItem("portfolioLikes");
let liked = localStorage.getItem("portfolioLiked");

if(count===null){

    count=0;

}

likeCount.innerText=count;

if(liked==="true"){

    likeBtn.classList.add("liked");

}

likeBtn.onclick=function(){

    if(localStorage.getItem("portfolioLiked")==="true"){

        return;

    }

    count++;

    likeCount.innerText=count;

    localStorage.setItem("portfolioLikes",count);

    localStorage.setItem("portfolioLiked","true");

    likeBtn.classList.add("liked");

}