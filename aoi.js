// ==========================================
// SKILL MODAL
// ==========================================

const cards = document.querySelectorAll(".skill-card");

const overlay = document.querySelector(".skill-modal-overlay");

const modal = document.querySelector(".skill-modal");

const closeBtn = document.querySelector(".close-modal");

const modalTitle = document.getElementById("modalTitle");

const modalIcon = document.getElementById("modalIcon");

const modalDescription = document.getElementById("modalDescription");

const modalSkills = document.getElementById("modalSkills");



// ==========================================
// OPEN MODAL
// ==========================================

cards.forEach(card=>{

    card.querySelector(".explore-btn").addEventListener("click",()=>{

        const title=card.dataset.title;

        const icon=card.dataset.icon;

        const description=card.dataset.description;

        const skills=card.dataset.skills.split(",");



        modalTitle.textContent=title;

        modalIcon.textContent=icon;

        modalDescription.textContent=description;



        modalSkills.innerHTML="";



        skills.forEach((skill,index)=>{

            const chip=document.createElement("span");

            chip.textContent=skill;

            chip.style.animationDelay=`${index*0.08}s`;

            modalSkills.appendChild(chip);

        });



        overlay.classList.add("active");

        document.body.classList.add("modal-open");

    });

});



// ==========================================
// CLOSE
// ==========================================

function closeModal(){

    overlay.classList.remove("active");

    document.body.classList.remove("modal-open");

}



closeBtn.addEventListener("click",closeModal);



// ==========================================
// CLICK OUTSIDE
// ==========================================

overlay.addEventListener("click",(e)=>{

    if(e.target===overlay){

        closeModal();

    }

});



// ==========================================
// ESC KEY
// ==========================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeModal();

    }

});



// ==========================================
// SMALL CARD HOVER EFFECT
// ==========================================

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.setProperty("--x",`${x}px`);

        card.style.setProperty("--y",`${y}px`);

    });

});