/*==================================================
            PROJECT COMMAND CENTER
==================================================*/

const projects = {

    vanrakshak:{

        title:"VanRakshak",

        category:"AI • Dashboard • Hackathon",

        image:"images/vanrakshak.png",

        description:
        "AI Powered Forest Monitoring Dashboard developed during HackMela to monitor forests, wildlife and environmental conditions using intelligent technologies.",

        tech:[
            "HTML",
            "CSS",
            "JavaScript",
            "AI",
            "IoT",
            "Dashboard UI"
        ],

        features:[
            "Real Time Dashboard",
            "AI Detection",
            "Forest Monitoring",
            "Analytics & Reports"
        ],

        github:"https://github.com/yourusername/VanRakshak",

        live:"#",

        case:"#"

    },



    campuseye:{

        title:"CampusEye",

        category:"College Management",

        image:"images/campuseye.png",

        description:
        "CampusEye is a smart campus management platform designed to simplify administration, improve communication and enhance student experience.",

        tech:[
            "HTML",
            "CSS",
            "JavaScript"
        ],

        features:[
            "Student Dashboard",
            "Attendance",
            "Notice Board",
            "Responsive UI"
        ],

        github:"#",

        live:"#",

        case:"#"

    },



    portfolio:{

        title:"Developer Portfolio",

        category:"Personal Website",

        image:"images/portfolio.png",

        description:
        "A premium portfolio designed to showcase projects, achievements, skills and experience with modern UI animations.",

        tech:[
            "HTML",
            "CSS",
            "JavaScript"
        ],

        features:[
            "Dark Mode",
            "Animations",
            "Responsive Design",
            "Interactive UI"
        ],

        github:"#",

        live:"#",

        case:"#"

    },



    calculator:{

        title:"Calculator",

        category:"Frontend Project",

        image:"images/calculator.png",

        description:
        "Responsive Calculator developed during CodeAlpha Frontend Internship featuring a modern UI and theme switcher.",

        tech:[
            "HTML",
            "CSS",
            "JavaScript"
        ],

        features:[
            "Responsive",
            "Theme Switch",
            "Keyboard Support",
            "Smooth UI"
        ],

        github:"#",

        live:"#",

        case:"#"

    }

};



/*==================================================
            ELEMENTS
==================================================*/

const items=document.querySelectorAll(".project-item");

const image=document.getElementById("projectImage");

const title=document.getElementById("projectTitle");

const category=document.getElementById("projectCategory");

const description=document.getElementById("projectDescription");

const tech=document.getElementById("projectTech");

const feature=document.getElementById("featureList");

const github=document.getElementById("githubBtn");

const live=document.getElementById("liveBtn");

const study=document.getElementById("caseBtn");

const viewer=document.querySelector(".project-viewer");



/*==================================================
            CHANGE PROJECT
==================================================*/

items.forEach(item=>{

    item.addEventListener("click",()=>{

        items.forEach(card=>card.classList.remove("active"));

        item.classList.add("active");

        const data=projects[item.dataset.project];



        viewer.style.opacity="0";

        viewer.style.transform="translateY(30px)";



        setTimeout(()=>{

            image.src=data.image;

            title.textContent=data.title;

            category.textContent=data.category;

            description.textContent=data.description;



            tech.innerHTML="";

            data.tech.forEach(skill=>{

                tech.innerHTML+=`<span>${skill}</span>`;

            });



            feature.innerHTML="";

            data.features.forEach(point=>{

                feature.innerHTML+=`<li>${point}</li>`;

            });



            github.href=data.github;

            live.href=data.live;

            study.href=data.case;



            viewer.style.opacity="1";

            viewer.style.transform="translateY(0px)";



        },250);

    });

});