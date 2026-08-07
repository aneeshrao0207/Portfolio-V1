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
