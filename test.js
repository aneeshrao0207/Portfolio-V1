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