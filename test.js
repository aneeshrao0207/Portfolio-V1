/* =========================================================
   PROJECT SHOWCASE — COMPLETE JAVASCRIPT
   ========================================================= */


/* =========================================================
   PROJECT DATA
   ========================================================= */

const projects = {

    vanrakshak: {

        number: "0 1",

        title: "VanRakshak",

        category: "AI • DASHBOARD • HACKATHON",

        image: "images/vanrakshak.png",

        caption: "AI Powered Forest Monitoring",

        description:
            "An AI and IoT based forest monitoring concept designed to help detect illegal tree cutting and suspicious activity through intelligent sensing, monitoring and real-time alerts.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "AI / ML",
            "IoT",
            "Dashboard UI"
        ],

        highlights: [
            "Real-time forest monitoring",
            "AI-based activity detection",
            "Intelligent alert system",
            "Analytics dashboard"
        ],

        github:
            "https://github.com/aneeshrao0207/VanRakshak",

        live: "#"

    },


    campuseye: {

        number: "0 2",

        title: "CampusEye",

        category: "AI • SMART CAMPUS • IOT",

        image: "images/campuseye.png",

        caption: "Smart Campus Management",

        description:
            "A smart campus platform designed to bring student services, campus information and intelligent monitoring into a unified digital experience.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "AI / ML",
            "Computer Vision",
            "IoT"
        ],

        highlights: [
            "Smart campus dashboard",
            "Student-focused interface",
            "AI-powered monitoring",
            "Responsive web experience"
        ],

        github: "#",

        live: "#"

    },


    portfolio: {

        number: "0 3",

        title: "Developer Portfolio",

        category: "FRONTEND • UI/UX • PERSONAL BRAND",

        image: "images/portfolio.png",

        caption: "My Digital Identity",

        description:
            "A product-inspired personal portfolio designed to present my projects, achievements, skills and experience through a clean and interactive digital experience.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "UI / UX",
            "Responsive Design"
        ],

        highlights: [
            "Interactive project showcase",
            "Responsive design",
            "Modern animations",
            "Personal branding system"
        ],

        github: "#",

        live: "#"

    },


    calculator: {

        number: "0 4",

        title: "Calculator",

        category: "FRONTEND • JAVASCRIPT • CODEALPHA",

        image: "images/calculator.png",

        caption: "Interactive Calculator",

        description:
            "A responsive calculator application developed as part of my frontend development journey, focusing on clean interface design, usability and JavaScript functionality.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive UI"
        ],

        highlights: [
            "Responsive interface",
            "Interactive calculations",
            "Keyboard support",
            "Clean user experience"
        ],

        github: "#",

        live: "#"

    },


    pixelvault: {

        number: "0 5",

        title: "PixelVault",

        category: "WEB • IMAGE GALLERY • UI",

        image: "images/pixelvault.png",

        caption: "Visual Image Gallery",

        description:
            "A visually focused image gallery project created to explore responsive layouts, image presentation and modern frontend interaction patterns.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design"
        ],

        highlights: [
            "Responsive gallery",
            "Modern image layout",
            "Interactive interface",
            "Visual-first experience"
        ],

        github: "#",

        live: "#"

    },


    musicplayer: {

        number: "0 6",

        title: "Music Player",

        category: "WEB APPLICATION • JAVASCRIPT",

        image: "images/musicplayer.png",

        caption: "Interactive Music Experience",

        description:
            "A browser-based music player interface built to explore interactive controls, media handling and modern application-style frontend design.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "Web Audio"
        ],

        highlights: [
            "Interactive music controls",
            "Play and pause functionality",
            "Responsive interface",
            "Application-style UI"
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

const githubBtn =
    document.getElementById("githubBtn");

const liveBtn =
    document.getElementById("liveBtn");

const featuredVisual =
    document.querySelector(".featured-visual");


/* =========================================================
   CURRENT PROJECT
   ========================================================= */

let currentProject = "vanrakshak";

let isChanging = false;


/* =========================================================
   UPDATE TECH STACK
   ========================================================= */

function updateTechStack(techList) {

    if (!projectTech) return;

    projectTech.innerHTML = "";

    techList.forEach((technology, index) => {

        const span =
            document.createElement("span");

        span.textContent = technology;

        span.style.opacity = "0";

        span.style.transform = "translateY(12px)";

        projectTech.appendChild(span);


        setTimeout(() => {

            span.style.transition =
                "opacity .45s ease, transform .45s cubic-bezier(.22,1,.36,1)";

            span.style.opacity = "1";

            span.style.transform =
                "translateY(0)";

        }, 80 + (index * 70));

    });

}


/* =========================================================
   UPDATE HIGHLIGHTS
   ========================================================= */

function updateHighlights(highlights) {

    if (!highlightGrid) return;

    highlightGrid.innerHTML = "";

    highlights.forEach((highlight, index) => {

        const item =
            document.createElement("div");

        item.className = "highlight-item";

        item.innerHTML = `
            <i class="fa-solid fa-check"></i>
            <span>${highlight}</span>
        `;

        item.style.opacity = "0";

        item.style.transform =
            "translateY(15px)";

        highlightGrid.appendChild(item);


        setTimeout(() => {

            item.style.transition =
                "opacity .45s ease, transform .45s cubic-bezier(.22,1,.36,1)";

            item.style.opacity = "1";

            item.style.transform =
                "translateY(0)";

        }, 120 + (index * 90));

    });

}


/* =========================================================
   UPDATE PROJECT
   ========================================================= */

function updateProject(projectKey, animate = true) {

    const data = projects[projectKey];

    if (!data) return;

    if (isChanging) return;

    isChanging = true;


    /* -----------------------------------------
       REMOVE ACTIVE STATE
       ----------------------------------------- */

    projectTabs.forEach(tab => {

        tab.classList.toggle(
            "active",
            tab.dataset.project === projectKey
        );

    });


    /* -----------------------------------------
       EXIT ANIMATION
       ----------------------------------------- */

    if (animate && featuredProject) {

        featuredProject.classList.add(
            "project-changing"
        );

    }


    const delay = animate ? 280 : 0;


    setTimeout(() => {

        /* -----------------------------------------
           BASIC CONTENT
           ----------------------------------------- */

        if (projectIndex) {

            projectIndex.textContent =
                `${data.number} / 06`;

        }


        if (projectCategory) {

            projectCategory.textContent =
                data.category;

        }


        if (projectTitle) {

            projectTitle.textContent =
                data.title;

        }


        if (projectDescription) {

            projectDescription.textContent =
                data.description;

        }


        if (projectImage) {

            projectImage.src =
                data.image;

            projectImage.alt =
                data.title;

        }


        if (visualCaption) {

            visualCaption.textContent =
                data.caption;

        }


        /* -----------------------------------------
           TECH
           ----------------------------------------- */

        updateTechStack(data.tech);


        /* -----------------------------------------
           HIGHLIGHTS
           ----------------------------------------- */

        updateHighlights(data.highlights);


        /* -----------------------------------------
           GITHUB
           ----------------------------------------- */

        if (githubBtn) {

            githubBtn.href =
                data.github;

            githubBtn.target =
                "_blank";

            githubBtn.rel =
                "noopener noreferrer";

        }


        /* -----------------------------------------
           LIVE DEMO
           ----------------------------------------- */

        if (liveBtn) {

            if (
                !data.live ||
                data.live === "#"
            ) {

                liveBtn.href = "#";

                liveBtn.removeAttribute(
                    "target"
                );

                liveBtn.classList.add(
                    "disabled"
                );

                liveBtn.innerHTML = `
                    Live Demo
                    <i class="fa-solid fa-lock"></i>
                `;

            } else {

                liveBtn.href =
                    data.live;

                liveBtn.target =
                    "_blank";

                liveBtn.rel =
                    "noopener noreferrer";

                liveBtn.classList.remove(
                    "disabled"
                );

                liveBtn.innerHTML = `
                    Live Demo
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                `;

            }

        }


        /* -----------------------------------------
           UPDATE CURRENT PROJECT
           ----------------------------------------- */

        currentProject =
            projectKey;


        /* -----------------------------------------
           REMOVE EXIT ANIMATION
           ----------------------------------------- */

        if (featuredProject) {

            featuredProject.classList.remove(
                "project-changing"
            );

        }


        /* -----------------------------------------
           RESET VISUAL TILT
           ----------------------------------------- */

        if (featuredVisual) {

            featuredVisual.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg)";

        }


        isChanging = false;

    }, delay);

}


/* =========================================================
   PROJECT TAB CLICK
   ========================================================= */

projectTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const projectKey =
            tab.dataset.project;

        if (
            !projectKey ||
            projectKey === currentProject
        ) {
            return;
        }

        updateProject(
            projectKey,
            true
        );

    });

});


/* =========================================================
   MOUSE FOLLOW 3D EFFECT
   ========================================================= */

if (
    featuredProject &&
    featuredVisual
) {

    featuredProject.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                featuredProject.getBoundingClientRect();


            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const percentX =
                x / rect.width;

            const percentY =
                y / rect.height;


            const rotateY =
                (percentX - 0.5) * 5;

            const rotateX =
                (percentY - 0.5) * -5;


            /* -----------------------------------------
               VISUAL TILT
               ----------------------------------------- */

            featuredVisual.style.transform =
                `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                `;


            /* -----------------------------------------
               CURSOR GLOW POSITION
               ----------------------------------------- */

            featuredProject.style.setProperty(
                "--mouse-x",
                `${x}px`
            );

            featuredProject.style.setProperty(
                "--mouse-y",
                `${y}px`
            );

        }
    );


    featuredProject.addEventListener(
        "mouseleave",
        () => {

            featuredVisual.style.transform =
                `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                `;

        }
    );

}


/* =========================================================
   TAB HOVER MICRO INTERACTION
   ========================================================= */

projectTabs.forEach(tab => {

    tab.addEventListener(
        "mouseenter",
        () => {

            const icon =
                tab.querySelector(
                    ".fa-arrow-up-right"
                );

            if (icon) {

                icon.style.transform =
                    "translate(3px,-3px)";

            }

        }
    );


    tab.addEventListener(
        "mouseleave",
        () => {

            const icon =
                tab.querySelector(
                    ".fa-arrow-up-right"
                );

            if (icon) {

                icon.style.transform =
                    "translate(0,0)";

            }

        }
    );

});


/* =========================================================
   BUTTON RIPPLE EFFECT
   ========================================================= */

document
    .querySelectorAll(".project-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            function(event) {

                if (
                    this.classList.contains(
                        "disabled"
                    )
                ) {

                    event.preventDefault();

                    return;

                }


                const ripple =
                    document.createElement("span");

                ripple.className =
                    "project-ripple";


                const rect =
                    this.getBoundingClientRect();


                ripple.style.left =
                    `${event.clientX - rect.left}px`;

                ripple.style.top =
                    `${event.clientY - rect.top}px`;


                this.appendChild(ripple);


                setTimeout(() => {

                    ripple.remove();

                }, 700);

            }
        );

    });


/* =========================================================
   IMAGE ERROR FALLBACK
   ========================================================= */

if (projectImage) {

    projectImage.addEventListener(
        "error",
        () => {

            projectImage.style.opacity =
                "0.35";

        }
    );

}


/* =========================================================
   KEYBOARD NAVIGATION
   ========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key !== "ArrowRight" &&
            event.key !== "ArrowLeft"
        ) {
            return;
        }


        const projectKeys =
            Object.keys(projects);

        const currentIndex =
            projectKeys.indexOf(
                currentProject
            );


        let nextIndex;


        if (
            event.key === "ArrowRight"
        ) {

            nextIndex =
                (currentIndex + 1)
                % projectKeys.length;

        } else {

            nextIndex =
                (
                    currentIndex -
                    1 +
                    projectKeys.length
                )
                % projectKeys.length;

        }


        updateProject(
            projectKeys[nextIndex],
            true
        );

    }
);


/* =========================================================
   INITIAL LOAD
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateProject(
            "vanrakshak",
            false
        );

    }
);


/* =========================================================
   ALSO INITIALIZE IF DOM IS ALREADY LOADED
   ========================================================= */

if (
    document.readyState !== "loading"
) {

    updateProject(
        "vanrakshak",
        false
    );

}