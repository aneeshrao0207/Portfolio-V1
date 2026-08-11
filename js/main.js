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

/* =========================================================
                    SKILL WHEEL
========================================================= */

const skillCards = document.querySelectorAll(".skill-card");

const wheelOverlay = document.querySelector(".wheel-overlay");

const wheelModal = document.querySelector(".wheel-modal");

const wheelClose = document.querySelector(".wheel-close");

const wheelContainer = document.querySelector(".wheel-container");

const wheelTitle = document.querySelector(".wheel-center h2");

const wheelIcon = document.querySelector(".wheel-icon");

let wheelAnimation;

let rotation = 0;


/* =========================================================
                    OPEN WHEEL
========================================================= */

skillCards.forEach(card => {

    card.addEventListener("click", () => {

        openWheel(card);

    });

});


function openWheel(card){

    wheelOverlay.classList.add("active");

    document.body.style.overflow = "hidden";


    /* title */

    wheelTitle.textContent = card.dataset.title;


    /* icon */

    wheelIcon.innerHTML = `
        <i class="${card.dataset.icon}"></i>
    `;


    /* icon color */

    wheelIcon.style.background = card.dataset.color;


    /* reset */

    rotation = 0;


    /* remove previous chips */

    wheelContainer.innerHTML = "";


    /* create new wheel */

    const skills = card.dataset.skills
        .split(",")
        .map(skill => skill.trim())
        .filter(Boolean);


    createWheel(skills);


    cancelAnimationFrame(wheelAnimation);

    animateWheel();

}


/* =========================================================
                    CREATE CHIPS
========================================================= */

function createWheel(skills){

    const total = skills.length;


    skills.forEach((skill,index) => {

        const chip = document.createElement("div");

        chip.className = "skill-chip";

        chip.textContent = skill;


        const angle = (360 / total) * index;


        chip.dataset.angle = angle;


        wheelContainer.appendChild(chip);

    });

}


/* =========================================================
                    ANIMATE WHEEL
========================================================= */

function animateWheel(){

    rotation += 0.15;


    const chips = document.querySelectorAll(".skill-chip");


    const modalSize = wheelModal.offsetWidth;


    /*
        Radius automatically adjusts
        according to modal size.
    */

    const radius = modalSize * 0.325;


    chips.forEach(chip => {

        const baseAngle = parseFloat(chip.dataset.angle);

        const angle = baseAngle + rotation;

        const radians = angle * Math.PI / 180;


        const x = Math.cos(radians) * radius;

        const y = Math.sin(radians) * radius;


        chip.style.left = `calc(50% + ${x}px)`;

        chip.style.top = `calc(50% + ${y}px)`;


        /*
            Keeps the text straight
            while the wheel rotates.
        */

        chip.style.transform =
            "translate(-50%, -50%)";

    });


    wheelAnimation =
        requestAnimationFrame(animateWheel);

}


/* =========================================================
                    CLOSE WHEEL
========================================================= */

function closeWheel(){

    wheelOverlay.classList.remove("active");

    document.body.style.overflow = "";

    cancelAnimationFrame(wheelAnimation);

}


/* =========================================================
                    CLOSE BUTTON
========================================================= */

wheelClose.addEventListener("click", closeWheel);


/* =========================================================
                    CLICK OUTSIDE
========================================================= */

wheelOverlay.addEventListener("click", event => {

    if(event.target === wheelOverlay){

        closeWheel();

    }

});


/* =========================================================
                    ESCAPE KEY
========================================================= */

document.addEventListener("keydown", event => {

    if(event.key === "Escape"){

        closeWheel();

    }

});


/*==================================================
            PROJECT COMMAND CENTER
==================================================*/
/* =========================================================
   PROJECT SHOWCASE
========================================================= */


/* =========================================================
   PROJECT DATA
========================================================= */

const projectData = {

    vanrakshak: {

        index: "01 / 06",

        number: "01",

        title: "VanRakshak",

        category: "AI • DASHBOARD • HACKATHON",

        image: "images/vanrakshak.png",

        caption: "AI Powered Forest Monitoring",

        description:
            "AI-powered forest monitoring dashboard developed during HackMela to monitor forests, wildlife and environmental conditions through intelligent technology.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "AI",
            "IoT",
            "Dashboard UI"
        ],

        highlights: [
            "Real-time monitoring",
            "AI detection",
            "Analytics dashboard",
            "Forest monitoring"
        ],

        github:
            "https://github.com/aneeshrao0207/VanRakshak",

        live: "#"

    },


    campuseye: {

        index: "02 / 06",

        number: "02",

        title: "CampusEye",

        category: "WEB APPLICATION • CAMPUS",

        image: "images/campuseye.png",

        caption: "Smart Campus Management",

        description:
            "A smart campus platform designed to improve the digital experience of students and simplify campus-related interactions through a clean and responsive interface.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive UI"
        ],

        highlights: [
            "Student-focused interface",
            "Responsive design",
            "Campus information",
            "Clean dashboard UI"
        ],

        github:
            "https://github.com/aneeshrao0207/CampusEye",

        live: "#"

    },


    portfolio: {

        index: "03 / 06",

        number: "03",

        title: "Developer Portfolio",

        category: "PERSONAL BRAND • WEB",

        image: "images/portfolio.png",

        caption: "Personal Developer Portfolio",

        description:
            "A premium personal portfolio designed to showcase my projects, skills, achievements, education and professional journey through an interactive digital experience.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design"
        ],

        highlights: [
            "Interactive UI",
            "Dark / Light mode",
            "Responsive design",
            "Smooth animations"
        ],

        github: "#",

        live: "#"

    },


    calculator: {

        index: "04 / 06",

        number: "04",

        title: "Calculator",

        category: "FRONTEND • JAVASCRIPT",

        image: "images/calculator.png",

        caption: "Interactive Web Calculator",

        description:
            "A responsive calculator built as a frontend project with a clean interface, interactive controls and a focus on usability across different screen sizes.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        highlights: [
            "Responsive interface",
            "Interactive calculations",
            "Clean UI",
            "Keyboard-friendly design"
        ],

        github: "#",

        live: "#"

    },


    pixelvault: {

        index: "05 / 06",

        number: "05",

        title: "PixelVault",

        category: "WEB • IMAGE GALLERY",

        image: "images/pixelvault.png",

        caption: "Interactive Image Gallery",

        description:
            "A modern image gallery project focused on presenting visual content through a clean, responsive and engaging browsing experience.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design"
        ],

        highlights: [
            "Responsive gallery",
            "Modern card layout",
            "Interactive browsing",
            "Visual-first experience"
        ],

        github: "#",

        live: "#"

    },


    musicplayer: {

        index: "06 / 06",

        number: "06",

        title: "Music Player",

        category: "WEB APPLICATION • JAVASCRIPT",

        image: "images/music-player.png",

        caption: "Interactive Music Experience",

        description:
            "A browser-based music player designed with a modern interface and interactive playback controls to create a smooth digital music experience.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        highlights: [
            "Music controls",
            "Interactive interface",
            "Responsive design",
            "Modern UI"
        ],

        github: "#",

        live: "#"

    }

};


/* =========================================================
   ELEMENTS
========================================================= */

const projectTabs =
    document.querySelectorAll(".project-tab");

const featuredProject =
    document.getElementById("featuredProject");

const projectIndex =
    document.getElementById("projectIndex");

const projectTitle =
    document.getElementById("projectTitle");

const projectCategory =
    document.getElementById("projectCategory");

const projectDescription =
    document.getElementById("projectDescription");

const projectImage =
    document.getElementById("projectImage");

const projectTech =
    document.getElementById("projectTech");

const highlightGrid =
    document.getElementById("highlightGrid");

const githubBtn =
    document.getElementById("githubBtn");

const liveBtn =
    document.getElementById("liveBtn");

const visualCaption =
    document.getElementById("visualCaption");

const visualNumber =
    document.querySelector(".visual-number");


/* =========================================================
   LOAD PROJECT
========================================================= */

function loadProject(projectKey){

    const project = projectData[projectKey];

    if(!project) return;


    /* -------------------------
       ACTIVE TAB
    ------------------------- */

    projectTabs.forEach(tab => {

        tab.classList.remove("active");

        if(tab.dataset.project === projectKey){

            tab.classList.add("active");

        }

    });


    /* -------------------------
       EXIT ANIMATION
    ------------------------- */

    featuredProject.classList.add("project-changing");


    setTimeout(() => {


        /* -------------------------
           BASIC INFORMATION
        ------------------------- */

        projectIndex.textContent =
            project.index;

        projectTitle.textContent =
            project.title;

        projectCategory.textContent =
            project.category;

        projectDescription.textContent =
            project.description;


        /* -------------------------
           IMAGE
        ------------------------- */

        projectImage.src =
            project.image;

        projectImage.alt =
            project.title;


        /* -------------------------
           VISUAL
        ------------------------- */

        visualCaption.textContent =
            project.caption;

        visualNumber.textContent =
            project.number;


        /* -------------------------
           TECH STACK
        ------------------------- */

        projectTech.innerHTML = "";

        project.tech.forEach(skill => {

            const chip =
                document.createElement("span");

            chip.textContent = skill;

            projectTech.appendChild(chip);

        });


        /* -------------------------
           HIGHLIGHTS
        ------------------------- */

        highlightGrid.innerHTML = "";

        project.highlights.forEach(item => {

            const highlight =
                document.createElement("div");

            highlight.className =
                "highlight-item";

            highlight.innerHTML = `

                <i class="fa-solid fa-check"></i>

                <span>${item}</span>

            `;

            highlightGrid.appendChild(highlight);

        });


        /* -------------------------
           LINKS
        ------------------------- */

        githubBtn.href =
            project.github;

        liveBtn.href =
            project.live;


        /* -------------------------
           REMOVE ANIMATION
        ------------------------- */

        featuredProject.classList.remove(
            "project-changing"
        );


        /* -------------------------
           SCROLL RESET
        ------------------------- */

        window.requestAnimationFrame(() => {

            featuredProject.scrollIntoView({

                behavior:"smooth",

                block:"nearest"

            });

        });


    }, 250);

}


/* =========================================================
   TAB CLICK
========================================================= */

projectTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const projectKey =
            tab.dataset.project;

        loadProject(projectKey);

    });

});


/* =========================================================
   INITIAL PROJECT
========================================================= */

loadProject("vanrakshak");

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