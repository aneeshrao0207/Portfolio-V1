/* =========================================================
   BEYOND TECH EXPERIENCE CAROUSEL
========================================================= */

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