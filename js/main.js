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
                PROJECT DETAILS DATA
========================================================= */

const projectDetails = {

    vanrakshak: {

        number: "01",

        title: "VanRakshak",

        category: "AI • IoT • Dashboard • Hackathon",

        image: "images/vanrakshak.png",

        intro:
        "An AI-powered forest monitoring platform designed to transform traditional forest surveillance into a smarter, data-driven experience.",

        problem:
        "Forest monitoring often depends heavily on manual observation, making it difficult to continuously monitor large areas, identify threats quickly and organize environmental information effectively.",

        solution:
        "VanRakshak brings monitoring information into a centralized digital dashboard, combining intelligent detection concepts, environmental information and visual analytics into one experience.",

        achievement:
        "🏆 1st Place — HACKMELA 2K26",

        features: [

            "Real-time monitoring dashboard",

            "AI-powered detection concept",

            "Forest and wildlife monitoring",

            "Environmental analytics",

            "Visual data representation",

            "Responsive dashboard interface"

        ],

        tech: [

            "HTML5",

            "CSS3",

            "JavaScript",

            "AI",

            "IoT",

            "Dashboard UI"

        ],

        github:
        "https://github.com/aneeshrao0207/VanRakshak",

        live:
        "#"

    },


    campuseye: {

        number: "02",

        title: "CampusEye",

        category: "WEB APPLICATION • CAMPUS MANAGEMENT",

        image: "images/campuseye.png",

        intro:
        "A smart campus management concept focused on improving how students interact with information, services and everyday college activities.",

        problem:
        "Students often need to access different types of campus information from disconnected sources, creating unnecessary friction and making communication less efficient.",

        solution:
        "CampusEye brings important campus-related information into a centralized and easy-to-use interface designed around accessibility, simplicity and student experience.",

        achievement:
        "🚀 Project Development",

        features: [

            "Student dashboard",

            "Campus information",

            "Responsive interface",

            "Simple navigation",

            "Information management",

            "User-focused design"

        ],

        tech: [

            "HTML5",

            "CSS3",

            "JavaScript",

            "Responsive Design"

        ],

        github:
        "https://github.com/aneeshrao0207/CampusEye",

        live:
        "#"

    },


    portfolio: {

        number: "03",

        title: "Developer Portfolio",

        category: "PERSONAL PRODUCT • UI/UX",

        image: "images/portfolio.png",

        intro:
        "A personal digital platform designed to present my skills, projects, achievements and development journey through a premium product-style experience.",

        problem:
        "A traditional resume alone cannot effectively communicate how I think, design and build digital products.",

        solution:
        "I designed an interactive portfolio that combines personal storytelling, project showcases, achievements, skills and responsive UI into one cohesive digital experience.",

        achievement:
        "✨ Personal Product",

        features: [

            "Premium visual design",

            "Interactive project showcase",

            "Dark and light mode",

            "Responsive layouts",

            "Animated interactions",

            "Personal storytelling"

        ],

        tech: [

            "HTML5",

            "CSS3",

            "JavaScript",

            "Font Awesome",

            "Responsive Design"

        ],

        github:
        "https://github.com/aneeshrao0207",

        live:
        "#"

    },


    calculator: {

        number: "04",

        title: "Smart Calculator",

        category: "FRONTEND PROJECT • CODEALPHA",

        image: "images/calculator.png",

        intro:
        "A responsive calculator application created to strengthen frontend development fundamentals while focusing on clean interaction design.",

        problem:
        "Basic calculator interfaces often provide functionality but overlook visual hierarchy, responsiveness and interaction quality.",

        solution:
        "I created a clean calculator experience with responsive layouts, interactive controls and a simple interface that works comfortably across screen sizes.",

        achievement:
        "💻 Frontend Development Project",

        features: [

            "Arithmetic operations",

            "Responsive interface",

            "Interactive controls",

            "Clean visual hierarchy",

            "Keyboard interaction",

            "Smooth user experience"

        ],

        tech: [

            "HTML5",

            "CSS3",

            "JavaScript"

        ],

        github:
        "#",

        live:
        "#"

    },


    pixelvault: {

        number: "05",

        title: "PixelVault",

        category: "FRONTEND • IMAGE GALLERY",

        image: "images/pixelvault.png",

        intro:
        "A visual image gallery project focused on creating a clean, responsive and engaging way to browse digital imagery.",

        problem:
        "Image-heavy interfaces can quickly become cluttered without proper spacing, hierarchy and responsive layout decisions.",

        solution:
        "PixelVault focuses on visual organization, responsive presentation and smooth interactions to create a more enjoyable browsing experience.",

        achievement:
        "🎨 UI Development Project",

        features: [

            "Responsive image gallery",

            "Visual grid system",

            "Clean image presentation",

            "Interactive interface",

            "Responsive layout",

            "Modern visual hierarchy"

        ],

        tech: [

            "HTML5",

            "CSS3",

            "JavaScript",

            "Responsive Design"

        ],

        github:
        "#",

        live:
        "#"

    },


    musicplayer: {

        number: "06",

        title: "Music Player",

        category: "FRONTEND • MEDIA EXPERIENCE",

        image: "images/music-player.png",

        intro:
        "A browser-based music player designed around simple controls, clear visual hierarchy and an intuitive listening experience.",

        problem:
        "Media interfaces need to make controls immediately understandable while keeping the overall experience visually engaging.",

        solution:
        "The Music Player combines a focused interface with familiar playback controls and responsive design principles.",

        achievement:
        "🎵 Frontend Project",

        features: [

            "Music playback controls",

            "Responsive interface",

            "Interactive player",

            "Clean visual design",

            "Simple navigation",

            "Media-focused experience"

        ],

        tech: [

            "HTML5",

            "CSS3",

            "JavaScript"

        ],

        github:
        "#",

        live:
        "#"

    }

};



/* =========================================================
                    ELEMENTS
========================================================= */

const projectCards =
document.querySelectorAll(".project-card");

const projectOverlay =
document.getElementById("projectDetailOverlay");

const projectClose =
document.getElementById("projectDetailClose");

const detailImage =
document.getElementById("detailImage");

const detailNumber =
document.getElementById("detailNumber");

const detailCategory =
document.getElementById("detailCategory");

const detailTitle =
document.getElementById("detailTitle");

const detailIntro =
document.getElementById("detailIntro");

const detailProblem =
document.getElementById("detailProblem");

const detailSolution =
document.getElementById("detailSolution");

const detailAchievement =
document.getElementById("detailAchievement");

const detailFeatures =
document.getElementById("detailFeatures");

const detailTech =
document.getElementById("detailTech");

const detailGithub =
document.getElementById("detailGithub");

const detailLive =
document.getElementById("detailLive");



/* =========================================================
                    OPEN PROJECT
========================================================= */

function openProject(projectID){

    const project =
    projectDetails[projectID];

    if(!project) return;


    /* IMAGE */

    detailImage.src =
    project.image;

    detailImage.alt =
    project.title;


    /* BASIC INFORMATION */

    detailNumber.textContent =
    project.number;

    detailCategory.textContent =
    project.category;

    detailTitle.textContent =
    project.title;

    detailIntro.textContent =
    project.intro;

    detailProblem.textContent =
    project.problem;

    detailSolution.textContent =
    project.solution;

    detailAchievement.textContent =
    project.achievement;


    /* =====================================================
                        FEATURES
    ====================================================== */

    detailFeatures.innerHTML = "";

    project.features.forEach(feature => {

        const featureElement =
        document.createElement("div");

        featureElement.className =
        "detail-feature";

        featureElement.innerHTML = `

            <i class="fa-solid fa-check"></i>

            <span>
                ${feature}
            </span>

        `;

        detailFeatures.appendChild(
            featureElement
        );

    });


    /* =====================================================
                        TECHNOLOGIES
    ====================================================== */

    detailTech.innerHTML = "";

    project.tech.forEach(technology => {

        const techElement =
        document.createElement("span");

        techElement.textContent =
        technology;

        detailTech.appendChild(
            techElement
        );

    });


    /* =====================================================
                        LINKS
    ====================================================== */

    detailGithub.href =
    project.github;

    detailLive.href =
    project.live;


    /* =====================================================
                        OPEN MODAL
    ====================================================== */

    projectOverlay.classList.add(
        "active"
    );

    document.body.style.overflow =
    "hidden";


    /* Scroll modal to top */

    const modal =
    document.querySelector(
        ".project-detail-modal"
    );

    if(modal){

        modal.scrollTop = 0;

    }

}



/* =========================================================
                    CARD CLICK
========================================================= */

projectCards.forEach(card => {

    card.addEventListener(
        "click",
        function(event){

            /*
                Prevent accidental double triggering
                when clicking inside button.
            */

            const projectID =
            this.dataset.project;

            openProject(
                projectID
            );

        }
    );

});



/* =========================================================
                    CLOSE PROJECT
========================================================= */

function closeProject(){

    projectOverlay.classList.remove(
        "active"
    );

    document.body.style.overflow =
    "";

}



projectClose.addEventListener(
    "click",
    closeProject
);



/* =========================================================
                    CLICK OUTSIDE
========================================================= */

projectOverlay.addEventListener(
    "click",
    function(event){

        if(
            event.target ===
            projectOverlay
        ){

            closeProject();

        }

    }
);



/* =========================================================
                    ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function(event){

        if(
            event.key === "Escape" &&
            projectOverlay.classList.contains(
                "active"
            )
        ){

            closeProject();

        }

    }
);

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