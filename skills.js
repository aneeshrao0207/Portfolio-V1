/*====================================================
                SKILL WHEEL SYSTEM
====================================================*/


/*====================================================
                ELEMENTS
====================================================*/

const skillCards =
    document.querySelectorAll(".skill-card");

const wheelOverlay =
    document.querySelector(".wheel-overlay");

const wheelClose =
    document.querySelector(".wheel-close");

const wheelContainer =
    document.querySelector(".wheel-container");

const wheelTitle =
    document.querySelector(".wheel-center h2");

const wheelIcon =
    document.querySelector(".wheel-icon");


/*====================================================
                VARIABLES
====================================================*/

let rotation = 0;

let wheelAnimation = null;


/*
    IMPORTANT

    This radius is exactly 320px.

    CSS ring = 640px diameter.

    Therefore:

    320px radius × 2 = 640px ring

    This makes the ring pass directly
    through the CENTER of every bubble.
*/

const wheelRadius = 320;


/*====================================================
                LOGO DATABASE
====================================================*/

/*
    CHANGE THESE PATHS TO YOUR ACTUAL
    LOGO FILE LOCATIONS.

    Example:

    images/skills/html.png

*/

const skillLogos = {

    "HTML5":
        "images/html.png",

    "CSS3":
        "images/css.png",

    "JavaScript":
        "images/javascript.png",

    "React":
        "images/react.png",

    "Tailwind CSS":
        "images/tcss.png",

    "Responsive Design":
        "images/rwd.png",

    "Figma":
        "images/skills/figma.png",

    "Wireframing":
        "images/skills/wireframe.png",

    "Prototype":
        "images/skills/prototype.png",

    "Auto Layout":
        "images/skills/autolayout.png",

    "Design Systems":
        "images/skills/design-system.png",

    "User Research":
        "images/skills/user-research.png",

    "VS Code":
        "images/skills/vscode.png",

    "Git":
        "images/skills/git.png",

    "GitHub":
        "images/skills/github.png",

    "Vercel":
        "images/skills/vercel.png",

    "Canva":
        "images/skills/canva.png"

};


/*====================================================
                CARD CLICK
====================================================*/

skillCards.forEach(card => {

    card.addEventListener("click", () => {

        openWheel(card);

    });

});


/*====================================================
                OPEN WHEEL
====================================================*/

function openWheel(card){

    /* show overlay */

    wheelOverlay.classList.add("active");

    document.body.style.overflow = "hidden";


    /* reset rotation */

    rotation = 0;


    /* title */

    wheelTitle.textContent =
        card.dataset.title;


    /* center icon */

    wheelIcon.textContent =
        card.dataset.icon;


    /* center color */

    wheelIcon.style.background =
        `linear-gradient(
            135deg,
            ${card.dataset.color},
            ${card.dataset.color}aa
        )`;


    /* remove previous chips */

    wheelContainer.innerHTML = "";


    /* get skills */

    const skills =
        card.dataset.skills
        .split(",")
        .map(skill => skill.trim());


    /* create bubbles */

    createWheel(skills);


    /* start animation */

    cancelAnimationFrame(wheelAnimation);

    animateWheel();

}


/*====================================================
                CREATE WHEEL
====================================================*/

function createWheel(skills){

    const total = skills.length;

    skills.forEach((skill,index)=>{

        const chip = document.createElement("div");

        chip.className = "skill-chip";

        /*
        ==========================================
        LOGO PATHS
        ==========================================
        */

        const logoMap = {

            "HTML5": "images/html.png",

            "CSS3": "images/css.png",

            "JavaScript": "images/javascript.png",

            "React": "images/react.png",

            "Tailwind CSS": "images/tcss.png",

            "Responsive Design": "images/rwd.png"

        };


        /*
        ==========================================
        CREATE LOGO
        ==========================================
        */

        if(logoMap[skill]){

            const img = document.createElement("img");

            img.src = logoMap[skill];

            img.alt = skill;

            img.title = skill;

            chip.appendChild(img);

            chip.classList.add("logo-chip");

        }

        else{

            chip.innerHTML = `<span>${skill}</span>`;

        }


        /*
        ==========================================
        POSITION
        ==========================================
        */

        const angle = (360 / total) * index;

        chip.dataset.angle = angle;

        wheelContainer.appendChild(chip);

    });

}

/*====================================================
                ROTATION ANIMATION
====================================================*/

function animateWheel(){

    /*
        Slow rotation.

        0.2 = very smooth.

        One full rotation takes
        roughly 30 seconds.
    */

    rotation += 0.2;


    const chips =
        document.querySelectorAll(".skill-chip");


    chips.forEach(chip => {

        const baseAngle =
            parseFloat(
                chip.dataset.angle
            );


        const angle =
            baseAngle + rotation;


        const radians =
            angle * Math.PI / 180;


        const x =
            Math.cos(radians)
            * wheelRadius;


        const y =
            Math.sin(radians)
            * wheelRadius;


        /*
            Position chip around center.
        */

        chip.style.left =
            `calc(50% + ${x}px)`;


        chip.style.top =
            `calc(50% + ${y}px)`;


        /*
            Keep every logo perfectly upright.

            Important:

            Do NOT use scale here.

            CSS handles hover scale.
        */

        chip.style.transform =
            "translate(-50%, -50%)";

    });


    wheelAnimation =
        requestAnimationFrame(
            animateWheel
        );

}


/*====================================================
                CLOSE WHEEL
====================================================*/

function closeWheel(){

    wheelOverlay.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";


    cancelAnimationFrame(
        wheelAnimation
    );

}


/*====================================================
                CLOSE BUTTON
====================================================*/

wheelClose.addEventListener(
    "click",
    closeWheel
);


/*====================================================
                CLICK OUTSIDE
====================================================*/

wheelOverlay.addEventListener(
    "click",
    event => {

        if(
            event.target === wheelOverlay
        ){

            closeWheel();

        }

    }
);


/*====================================================
                ESC KEY
====================================================*/

document.addEventListener(
    "keydown",
    event => {

        if(
            event.key === "Escape" &&
            wheelOverlay.classList.contains(
                "active"
            )
        ){

            closeWheel();

        }

    }
);