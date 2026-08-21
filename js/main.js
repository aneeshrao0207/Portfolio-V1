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


/*============================================================================================================
            PROJECT COMMAND CENTER
============================================================================================================*/
/* =========================================================
   PROJECT LAB DATA
========================================================= */

const projects = {

    vanrakshak: {

        number: "0 1",

        title: "VanRakshak",

        category: "AI • IOT • FOREST INTELLIGENCE",

        image: "images/vanrakshak.png",

        caption: "AI Powered Forest Monitoring",

        description:
            "An intelligent forest monitoring concept designed to detect suspicious activity and provide forest teams with a centralized monitoring interface.",

        tech: [
            ["fa-brands fa-html5", "HTML"],
            ["fa-brands fa-css3-alt", "CSS"],
            ["fa-brands fa-js", "JavaScript"],
            ["fa-solid fa-brain", "AI / ML"],
            ["fa-solid fa-microchip", "IoT"]
        ],

        highlights: [
            "Forest activity monitoring",
            "Intelligent detection",
            "Centralized dashboard",
            "Data visualization"
        ],

        about:
            "VanRakshak explores how AI, IoT and intelligent monitoring interfaces can be combined to support forest protection and environmental monitoring.",

        problem:
            "Forest areas can be difficult to monitor continuously, making suspicious activities difficult to detect at an early stage.",

        solution:
            "A centralized monitoring concept that combines intelligent detection, sensors and a visual dashboard for faster awareness and response.",

        features: [
            "Forest monitoring",
            "Intelligent detection",
            "Centralized dashboard",
            "Alert-oriented interface"
        ],

        role:
            "Product concept, UI/UX design, frontend development and system planning.",

        achievement:
            "1st Place — HACKMELA 2K26",

        github:
            "https://github.com/aneeshrao0207/VanRakshak"

    },


    campuseye: {

        number: "0 2",

        title: "CampusEye",

        category: "AI • SMART CAMPUS • IOT",

        image: "images/campuseye.png",

        caption: "Smart Campus Management",

        description:
            "A smart campus platform concept designed to improve campus management, communication and the overall student experience.",

        tech: [
            ["fa-brands fa-html5", "HTML"],
            ["fa-brands fa-css3-alt", "CSS"],
            ["fa-brands fa-js", "JavaScript"],
            ["fa-solid fa-brain", "AI / ML"],
            ["fa-solid fa-camera", "Computer Vision"],
            ["fa-solid fa-microchip", "IoT"]
        ],

        highlights: [
            "Smart campus dashboard",
            "Student-focused interface",
            "AI integration",
            "Campus monitoring"
        ],

        about:
            "CampusEye is an exploration of how AI, computer vision and IoT can be brought together to create a smarter and more connected campus environment.",

        problem:
            "Managing different campus activities and information can become fragmented across multiple systems.",

        solution:
            "A unified digital platform designed to bring important campus information and intelligent monitoring into one interface.",

        features: [
            "Smart campus dashboard",
            "Student information",
            "AI-powered concepts",
            "Monitoring interface"
        ],

        role:
            "Frontend development, interface design, product planning and system concept development.",

        achievement:
            "3rd Prize — NIT Warangal Summer Internship Programme 2026",

        github:
            "#"

    },


    portfolio: {

        number: "0 3",

        title: "Developer Portfolio",

        category: "FRONTEND • UI/UX • PERSONAL BRAND",

        image: "images/portfolio.png",

        caption: "My Digital Portfolio",

        description:
            "A product-inspired personal portfolio designed to communicate my skills, projects, achievements and journey through a modern interactive experience.",

        tech: [
            ["fa-brands fa-html5", "HTML"],
            ["fa-brands fa-css3-alt", "CSS"],
            ["fa-brands fa-js", "JavaScript"]
        ],

        highlights: [
            "Premium responsive UI",
            "Interactive sections",
            "Dark / light experience",
            "Personal branding"
        ],

        about:
            "This portfolio is designed as more than an online resume. It is an interactive representation of my journey, technical abilities, design thinking and projects.",

        problem:
            "Traditional resumes often provide limited space to communicate personality, projects and the way a developer thinks about products.",

        solution:
            "A custom-built interactive portfolio that combines visual storytelling, responsive frontend development and product-oriented design.",

        features: [
            "Interactive project showcase",
            "Responsive design",
            "Theme experience",
            "Animated interfaces"
        ],

        role:
            "Designer, frontend developer, content architect and product owner.",

        achievement:
            "Personal Product — Continuously evolving",

        github:
            "#"

    },


    calculator: {

        number: "0 4",

        title: "Calculator",

        category: "FRONTEND • JAVASCRIPT • UI",

        image: "images/calculator.png",

        caption: "Interactive Calculator",

        description:
            "A responsive calculator project built to strengthen frontend fundamentals, JavaScript logic and interactive UI development.",

        tech: [
            ["fa-brands fa-html5", "HTML"],
            ["fa-brands fa-css3-alt", "CSS"],
            ["fa-brands fa-js", "JavaScript"]
        ],

        highlights: [
            "Interactive calculations",
            "Responsive layout",
            "Clean interface",
            "JavaScript logic"
        ],

        about:
            "A focused frontend project created to practice JavaScript logic, user interaction and responsive interface development.",

        problem:
            "Simple utility applications are useful exercises for understanding state, user input and interface feedback.",

        solution:
            "A clean calculator interface that connects user actions with JavaScript-based calculation logic.",

        features: [
            "Basic calculations",
            "Interactive buttons",
            "Responsive interface",
            "JavaScript logic"
        ],

        role:
            "Frontend development and UI implementation.",

        achievement:
            "Frontend Development Project",

        github:
            "#"

    },


    pixelvault: {

        number: "0 5",

        title: "PixelVault",

        category: "FRONTEND • IMAGE GALLERY • UI",

        image: "images/pixelvault.png",

        caption: "Interactive Image Gallery",

        description:
            "A modern image gallery experience focused on visual presentation, responsive layouts and smooth user interaction.",

        tech: [
            ["fa-brands fa-html5", "HTML"],
            ["fa-brands fa-css3-alt", "CSS"],
            ["fa-brands fa-js", "JavaScript"]
        ],

        highlights: [
            "Image gallery",
            "Responsive layout",
            "Visual navigation",
            "Interactive UI"
        ],

        about:
            "PixelVault is a frontend exploration focused on building an engaging visual gallery experience.",

        problem:
            "Image-heavy interfaces need clear hierarchy and interaction patterns without overwhelming the user.",

        solution:
            "A responsive gallery interface designed around visual hierarchy, navigation and simple interactions.",

        features: [
            "Gallery layout",
            "Responsive images",
            "Interactive navigation",
            "Visual hierarchy"
        ],

        role:
            "UI design and frontend development.",

        achievement:
            "Frontend UI Project",

        github:
            "#"

    },


    musicplayer: {

        number: "0 6",

        title: "Music Player",

        category: "WEB APPLICATION • JAVASCRIPT • UI",

        image: "images/musicplayer.png",

        caption: "Interactive Music Experience",

        description:
            "A browser-based music player interface created to explore interactive controls, state management and modern web application UI.",

        tech: [
            ["fa-brands fa-html5", "HTML"],
            ["fa-brands fa-css3-alt", "CSS"],
            ["fa-brands fa-js", "JavaScript"]
        ],

        highlights: [
            "Playback interface",
            "Interactive controls",
            "Responsive UI",
            "JavaScript interactions"
        ],

        about:
            "A frontend web application exploring how music controls, visual feedback and interface state can be combined into one experience.",

        problem:
            "Interactive media applications require clear controls and immediate feedback to make the experience intuitive.",

        solution:
            "A focused music-player interface designed around interaction, hierarchy and responsive controls.",

        features: [
            "Playback controls",
            "Music interface",
            "Responsive layout",
            "Interactive state"
        ],

        role:
            "Frontend development and UI/UX implementation.",

        achievement:
            "Frontend Web Application",

        github:
            "#"

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

const projectCategory =
    document.getElementById("projectCategory");

const projectTitle =
    document.getElementById("projectTitle");

const projectDescription =
    document.getElementById("projectDescription");

const projectTech =
    document.getElementById("projectTech");

const highlightGrid =
    document.getElementById("highlightGrid");

const projectImage =
    document.getElementById("projectImage");

const visualCaption =
    document.getElementById("visualCaption");

const visualNumber =
    document.getElementById("visualNumber");

const githubBtn =
    document.getElementById("githubBtn");

const exploreBtn =
    document.getElementById("exploreBtn");


/* =========================================================
   DETAIL ELEMENTS
========================================================= */

const projectOverlay =
    document.getElementById("projectOverlay");

const detailClose =
    document.getElementById("detailClose");

const detailIndex =
    document.getElementById("detailIndex");

const detailCategory =
    document.getElementById("detailCategory");

const detailTitle =
    document.getElementById("detailTitle");

const detailIntro =
    document.getElementById("detailIntro");

const detailImage =
    document.getElementById("detailImage");

const detailAbout =
    document.getElementById("detailAbout");

const detailProblem =
    document.getElementById("detailProblem");

const detailSolution =
    document.getElementById("detailSolution");

const detailFeatures =
    document.getElementById("detailFeatures");

const detailTech =
    document.getElementById("detailTech");

const detailRole =
    document.getElementById("detailRole");

const detailAchievement =
    document.getElementById("detailAchievement");

const detailGithubBtn =
    document.getElementById("detailGithubBtn");


let currentProject = "vanrakshak";


/* =========================================================
   RENDER FEATURED PROJECT
========================================================= */

function renderProject(projectKey) {

    const data = projects[projectKey];

    if (!data) return;

    currentProject = projectKey;

    featuredProject.classList.add("project-switching");


    setTimeout(() => {

        projectIndex.textContent =
            `${data.number} / 06`;

        projectCategory.textContent =
            data.category;

        projectTitle.textContent =
            data.title;

        projectDescription.textContent =
            data.description;

        visualNumber.textContent =
            data.number;

        visualCaption.textContent =
            data.caption;


        /* IMAGE */

        projectImage.src =
            data.image;

        projectImage.alt =
            `${data.title} project`;


        /* TECH */

        projectTech.innerHTML = "";

        data.tech.forEach(item => {

            const span =
                document.createElement("span");

            span.innerHTML = `
                <i class="${item[0]}"></i>
                ${item[1]}
            `;

            projectTech.appendChild(span);

        });


        /* HIGHLIGHTS */

        highlightGrid.innerHTML = "";

        data.highlights.forEach(item => {

            const div =
                document.createElement("div");

            div.className =
                "highlight-item";

            div.innerHTML = `
                <i class="fa-solid fa-check"></i>
                <span>${item}</span>
            `;

            highlightGrid.appendChild(div);

        });


        /* GITHUB */

        githubBtn.href =
            data.github;


        /* ACTIVE TAB */

        projectTabs.forEach(tab => {

            tab.classList.toggle(
                "active",
                tab.dataset.project === projectKey
            );

        });


        featuredProject.classList.remove(
            "project-switching"
        );

        featuredProject.classList.add(
            "project-enter"
        );


        setTimeout(() => {

            featuredProject.classList.remove(
                "project-enter"
            );

        }, 600);


    }, 220);

}


/* =========================================================
   PROJECT TAB EVENTS
========================================================= */

projectTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const projectKey =
            tab.dataset.project;

        if (projectKey === currentProject)
            return;

        renderProject(projectKey);

    });

});


/* =========================================================
   OPEN PROJECT DETAILS
========================================================= */

function openProjectDetails() {

    const data =
        projects[currentProject];

    if (!data) return;


    detailIndex.textContent =
        data.number;

    detailCategory.textContent =
        data.category;

    detailTitle.textContent =
        data.title;

    detailIntro.textContent =
        data.description;

    detailImage.src =
        data.image;

    detailImage.alt =
        `${data.title} project preview`;

    detailAbout.textContent =
        data.about;

    detailProblem.textContent =
        data.problem;

    detailSolution.textContent =
        data.solution;

    detailRole.textContent =
        data.role;


    /* FEATURES */

    detailFeatures.innerHTML = "";

    data.features.forEach(feature => {

        const div =
            document.createElement("div");

        div.innerHTML = `
            <i class="fa-solid fa-arrow-right"></i>
            ${feature}
        `;

        detailFeatures.appendChild(div);

    });


    /* TECH */

    detailTech.innerHTML = "";

    data.tech.forEach(item => {

        const span =
            document.createElement("span");

        span.textContent =
            item[1];

        detailTech.appendChild(span);

    });


    /* ACHIEVEMENT */

    detailAchievement.querySelector(
        "strong"
    ).textContent =
        data.achievement;


    /* GITHUB */

    detailGithubBtn.href =
        data.github;


    /* OPEN */

    projectOverlay.classList.add("open");

    projectOverlay.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   EXPLORE BUTTON
========================================================= */

exploreBtn.addEventListener(
    "click",
    openProjectDetails
);


/* =========================================================
   CLOSE PROJECT
========================================================= */

function closeProjectDetails() {

    projectOverlay.classList.remove(
        "open"
    );

    projectOverlay.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


detailClose.addEventListener(
    "click",
    closeProjectDetails
);


/* =========================================================
   BACKDROP CLOSE
========================================================= */

document
    .querySelector(".project-overlay-backdrop")
    .addEventListener(
        "click",
        closeProjectDetails
    );


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            projectOverlay.classList.contains("open")
        ) {

            closeProjectDetails();

        }

    }
);


/* =========================================================
   INITIAL PROJECT
========================================================= */

renderProject("vanrakshak");


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



/* =========================================================
                    CONTACT FORM
========================================================= */

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();


        const name =
            document.getElementById("contactName").value.trim();

        const email =
            document.getElementById("contactEmail").value.trim();

        const subject =
            document.getElementById("contactSubject").value;

        const message =
            document.getElementById("contactMessage").value.trim();


        if(!name || !email || !subject || !message){

            return;

        }


        const recipient = "yourmail@gmail.com";


        const emailSubject =
            `${subject} — Portfolio Contact`;


        const emailBody =
`Hi Aneesh,

My name is ${name}.

Email: ${email}

I'm reaching out regarding: ${subject}

Message:
${message}

Best regards,
${name}`;


        const mailtoURL =
            `mailto:${recipient}` +
            `?subject=${encodeURIComponent(emailSubject)}` +
            `&body=${encodeURIComponent(emailBody)}`;


        window.location.href = mailtoURL;

    });

}


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