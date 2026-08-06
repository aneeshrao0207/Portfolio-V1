/*=========================================================
                    SKILL ORBIT
=========================================================*/

const cards = document.querySelectorAll(".skill-card");

const overlay = document.querySelector(".orbit-overlay");

const centerCard = document.querySelector(".orbit-center");

const centerIcon = document.querySelector(".center-icon");

const centerTitle = document.querySelector(".orbit-center h2");

const outerRing = document.querySelector(".outer-orbit");

const middleRing = document.querySelector(".middle-orbit");

const innerRing = document.querySelector(".inner-orbit");

const closeBtn = document.querySelector(".orbit-close");

/*=========================================================
                OPEN
=========================================================*/

cards.forEach(card=>{

card.addEventListener("click",()=>{

overlay.classList.add("active");

document.body.style.overflow="hidden";

/* Clear Previous */

outerRing.innerHTML="";

middleRing.innerHTML="";

innerRing.innerHTML="";

/* Update Center */

centerTitle.innerHTML=card.dataset.title;

centerIcon.innerHTML=card.dataset.icon;

centerIcon.style.background=card.dataset.color;

centerCard.style.boxShadow=
`0 30px 80px ${card.dataset.color}40`;

/* Skills */

const skills=card.dataset.skills.split(",");

/* Divide */

const outer=[];

const middle=[];

const inner=[];

skills.forEach((skill,index)=>{

if(index<3){

outer.push(skill);

}

else if(index<6){

middle.push(skill);

}

else{

inner.push(skill);

}

});

/* Build Rings */

createRing(outerRing,outer,380,card.dataset.color);

createRing(middleRing,middle,280,card.dataset.color);

createRing(innerRing,inner,180,card.dataset.color);

});

});
/*=========================================================
            CREATE RING
=========================================================*/

function createRing(container,array,radius,color){

const total=array.length;

array.forEach((skill,index)=>{

const chip=document.createElement("div");

chip.className="orbit-chip";

chip.innerHTML=

`
<span class="chip-dot"></span>

${skill}
`;

const angle=(360/total)*index;

chip.dataset.angle=angle;

chip.dataset.radius=radius;

chip.dataset.rotation=0;

chip.style.borderColor=color;

chip.style.color=color;

container.appendChild(chip);

});

}
/*=========================================================
                CLOSE
=========================================================*/

closeBtn.onclick=()=>{

overlay.classList.remove("active");

document.body.style.overflow="auto";

};

overlay.onclick=(e)=>{

if(e.target===overlay){

overlay.classList.remove("active");

document.body.style.overflow="auto";

}

};

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

overlay.classList.remove("active");

document.body.style.overflow="auto";

}

});

/*=========================================================
                ORBIT ANIMATION
=========================================================*/

let outerAngle = 0;
let middleAngle = 0;
let innerAngle = 0;

let paused = false;

function animateOrbit(){

    if(!overlay.classList.contains("active")){

        requestAnimationFrame(animateOrbit);
        return;

    }

    if(!paused){

        outerAngle += 0.15;
        middleAngle -= 0.28;
        innerAngle += 0.45;

    }

    rotateRing(
        outerRing,
        outerAngle
    );

    rotateRing(
        middleRing,
        middleAngle
    );

    rotateRing(
        innerRing,
        innerAngle
    );

    requestAnimationFrame(animateOrbit);

}

requestAnimationFrame(animateOrbit);

/*=========================================================
                ROTATE
=========================================================*/

function rotateRing(ring,offset){

    const chips = ring.querySelectorAll(".orbit-chip");

    chips.forEach(chip=>{

        const baseAngle = Number(chip.dataset.angle);

        const radius = Number(chip.dataset.radius);

        const angle = baseAngle + offset;

        const x =
            Math.cos(angle*Math.PI/180)
            * radius;

        const y =
            Math.sin(angle*Math.PI/180)
            * radius;

        chip.style.transform =

        `
        translate(
            ${x}px,
            ${y}px
        )

        translate(-50%,-50%)

        rotate(${-angle}deg)
        `;

    });

}

/*=========================================================
                PAUSE
=========================================================*/

overlay.addEventListener("mouseenter",()=>{

    paused=true;

});

overlay.addEventListener("mouseleave",()=>{

    paused=false;

});

