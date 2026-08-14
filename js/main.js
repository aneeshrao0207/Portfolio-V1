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


/* =================================================================================================================
   BEYOND TECH EXPERIENCE CAROUSEL
==================================================================================================================== */

const experiences = [

    {
        title: "National Cadet Corps",

        shortTitle: "NCC",

        category: "DISCIPLINE • CAMPS • TEAMWORK",

        label: "NCC",

        description:
            "Completed NCC training and participated in camps that strengthened discipline, teamwork, responsibility and leadership.",

        tags: [
            "Discipline",
            "NCC Camps",
            "Teamwork"
        ],

        image: "images/ncc.jpg"
    },


    {
        title: "National Service Scheme",

        shortTitle: "NSS",

        category: "COMMUNITY • SERVICE • RESPONSIBILITY",

        label: "NSS",

        description:
            "Completed NSS activities and contributed to community-oriented initiatives, volunteering and social service.",

        tags: [
            "Community Service",
            "Volunteering",
            "Responsibility"
        ],

        image: "images/nss.jpg"
    },


    {
        title: "Hackathon Team Leadership",

        shortTitle: "Leadership",

        category: "HACKATHONS • PROJECTS • EXECUTION",

        label: "TEAM LEADERSHIP",

        description:
            "Led teams during hackathons and project competitions by coordinating ideas, development, presentations and execution.",

        tags: [
            "Team Leadership",
            "Hackathons",
            "Project Execution"
        ],

        image: "images/leadership.jpg"
    },


    {
        title: "Event Volunteering",

        shortTitle: "Volunteering",

        category: "EVENTS • COORDINATION • TEAMWORK",

        label: "VOLUNTEERING",

        description:
            "Volunteered for multiple events and supported coordination, execution and teamwork behind successful activities.",

        tags: [
            "Event Support",
            "Coordination",
            "Teamwork"
        ],

        image: "images/volunteering.jpg"
    },


    {
        title: "Project Leadership",

        shortTitle: "Projects",

        category: "BUILDING • COLLABORATION • DELIVERY",

        label: "PROJECT LEADERSHIP",

        description:
            "Worked with teams to turn ideas into working projects while coordinating responsibilities, development and presentations.",

        tags: [
            "Collaboration",
            "Development",
            "Presentation"
        ],

        image: "images/project-team.jpg"
    },


    {
        title: "NextStep",

        shortTitle: "NextStep",

        category: "INITIATIVE • COMMUNITY • MENTORSHIP",

        label: "STUDENT INITIATIVE",

        description:
            "Building a student-led initiative focused on helping juniors discover opportunities, connect with peers and gain direction.",

        tags: [
            "Initiative",
            "Community",
            "Mentorship"
        ],

        image: "images/nextstep.jpg"
    }

];


/* =========================================================
   ELEMENTS
========================================================= */

const mainImage =
    document.getElementById("mainExperienceImage");

const shadowOne =
    document.getElementById("shadowImageOne");

const shadowTwo =
    document.getElementById("shadowImageTwo");

const shadowThree =
    document.getElementById("shadowImageThree");

const prevImage =
    document.getElementById("prevImage");

const nextImage =
    document.getElementById("nextImage");

const currentNumber =
    document.getElementById("currentNumber");

const totalNumber =
    document.getElementById("totalNumber");

const imageLabel =
    document.getElementById("imageLabel");

const experienceCategory =
    document.getElementById("experienceCategory");

const experienceTitle =
    document.getElementById("experienceTitle");

const experienceDescription =
    document.getElementById("experienceDescription");

const experienceTags =
    document.getElementById("experienceTags");

const prevTitle =
    document.getElementById("prevTitle");

const nextTitle =
    document.getElementById("nextTitle");

const experienceCenter =
    document.querySelector(".experience-center");

const dotsContainer =
    document.getElementById("experienceDots");


/* =========================================================
   STATE
========================================================= */

let currentExperience = 0;

let isAnimating = false;


/* =========================================================
   TOTAL
========================================================= */

totalNumber.textContent =
    String(experiences.length).padStart(2, "0");


/* =========================================================
   CREATE DOTS
========================================================= */

experiences.forEach((experience, index) => {

    const dot =
        document.createElement("button");

    dot.className =
        "experience-dot";

    dot.setAttribute(
        "aria-label",
        `Go to ${experience.shortTitle}`
    );

    dot.addEventListener(
        "click",
        () => {

            goToExperience(index);

        }
    );

    dotsContainer.appendChild(dot);

});


/* =========================================================
   UPDATE DOTS
========================================================= */

function updateDots(){

    const dots =
        document.querySelectorAll(
            ".experience-dot"
        );

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentExperience
        );

    });

}


/* =========================================================
   GET INDEX
========================================================= */

function getIndex(offset){

    return (
        currentExperience +
        offset +
        experiences.length
    ) % experiences.length;

}


/* =========================================================
   RENDER
========================================================= */

function renderExperience(){

    const current =
        experiences[currentExperience];

    const previous =
        experiences[getIndex(-1)];

    const next =
        experiences[getIndex(1)];

    /* MAIN */

    mainImage.src =
        current.image;

    mainImage.alt =
        current.title;

    imageLabel.textContent =
        current.label;

    currentNumber.textContent =
        String(currentExperience + 1)
            .padStart(2, "0");

    experienceCategory.textContent =
        current.category;

    experienceTitle.textContent =
        current.title;

    experienceDescription.textContent =
        current.description;


    /* TAGS */

    experienceTags.innerHTML = "";

    current.tags.forEach(tag => {

        const span =
            document.createElement("span");

        span.textContent =
            tag;

        experienceTags.appendChild(span);

    });


    /* PREVIOUS */

    prevImage.src =
        previous.image;

    prevImage.alt =
        previous.title;

    prevTitle.textContent =
        previous.shortTitle;


    /* NEXT */

    nextImage.src =
        next.image;

    nextImage.alt =
        next.title;

    nextTitle.textContent =
        next.shortTitle;


    /* SHADOWS */

    shadowOne.src =
        previous.image;

    shadowTwo.src =
        next.image;

    shadowThree.src =
        experiences[getIndex(2)].image;


    updateDots();

}


/* =========================================================
   CHANGE EXPERIENCE
========================================================= */

function goToExperience(index){

    if(isAnimating)
        return;

    if(index === currentExperience)
        return;

    isAnimating = true;

    experienceCenter.classList.remove(
        "slide-in"
    );

    experienceCenter.classList.add(
        "slide-out"
    );


    setTimeout(() => {

        currentExperience =
            (
                index +
                experiences.length
            ) % experiences.length;

        renderExperience();


        experienceCenter.classList.remove(
            "slide-out"
        );

        experienceCenter.classList.add(
            "slide-in"
        );


        setTimeout(() => {

            experienceCenter.classList.remove(
                "slide-in"
            );

            isAnimating = false;

        },550);

    },300);

}


/* =========================================================
   NEXT
========================================================= */

function nextExperience(){

    goToExperience(
        getIndex(1)
    );

}


/* =========================================================
   PREVIOUS
========================================================= */

function previousExperience(){

    goToExperience(
        getIndex(-1)
    );

}


/* =========================================================
   BUTTONS
========================================================= */

document
    .getElementById("nextExperience")
    .addEventListener(
        "click",
        nextExperience
    );


document
    .getElementById("experienceNext")
    .addEventListener(
        "click",
        nextExperience
    );


document
    .getElementById("prevExperience")
    .addEventListener(
        "click",
        previousExperience
    );


document
    .getElementById("experiencePrev")
    .addEventListener(
        "click",
        previousExperience
    );


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if(event.key === "ArrowRight"){

            nextExperience();

        }

        if(event.key === "ArrowLeft"){

            previousExperience();

        }

    }
);


/* =========================================================
   TOUCH / SWIPE
========================================================= */

let touchStartX = 0;

let touchEndX = 0;


experienceCenter.addEventListener(
    "touchstart",
    event => {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    { passive:true }
);


experienceCenter.addEventListener(
    "touchend",
    event => {

        touchEndX =
            event.changedTouches[0].screenX;

        handleSwipe();

    },
    { passive:true }
);


function handleSwipe(){

    const difference =
        touchStartX - touchEndX;


    if(Math.abs(difference) < 50)
        return;


    if(difference > 0){

        nextExperience();

    }else{

        previousExperience();

    }

}


/* =========================================================
   INITIALIZE
========================================================= */

renderExperience();

/*====================================================================================================================
        PORTFOLIO APPRECIATION
======================================================================================================================*/

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