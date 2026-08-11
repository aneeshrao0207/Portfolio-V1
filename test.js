/* =========================================================
                CERTIFICATE DATA
========================================================= */

const certificates = [

    {
        title: "Meta Front-End Developer",
        issuer: "Meta",
        category: "development",
        year: "2026",
        tags: [
            "Frontend",
            "JavaScript",
            "React"
        ],
        icon: "fa-brands fa-meta",
        link: "#"
    },

    {
        title: "JavaScript Development",
        issuer: "Infosys Springboard",
        category: "development",
        year: "2026",
        tags: [
            "JavaScript",
            "Web Development"
        ],
        icon: "fa-brands fa-js",
        link: "#"
    },

    {
        title: "HTML & CSS Web Development",
        issuer: "Online Certification",
        category: "development",
        year: "2026",
        tags: [
            "HTML",
            "CSS",
            "Responsive Design"
        ],
        icon: "fa-solid fa-code",
        link: "#"
    },

    {
        title: "Artificial Intelligence Fundamentals",
        issuer: "Online Certification",
        category: "ai",
        year: "2026",
        tags: [
            "AI",
            "Machine Learning"
        ],
        icon: "fa-solid fa-brain",
        link: "#"
    },

    {
        title: "UI / UX Design Fundamentals",
        issuer: "Online Certification",
        category: "design",
        year: "2026",
        tags: [
            "Figma",
            "UI Design",
            "UX"
        ],
        icon: "fa-brands fa-figma",
        link: "#"
    },

    {
        title: "Git & GitHub",
        issuer: "Online Certification",
        category: "other",
        year: "2026",
        tags: [
            "Git",
            "GitHub",
            "Version Control"
        ],
        icon: "fa-brands fa-github",
        link: "#"
    }

];


/* =========================================================
                ELEMENTS
========================================================= */

const certificateList =
    document.getElementById("certificateList");

const certificateEmpty =
    document.getElementById("certificateEmpty");

const certificateCount =
    document.getElementById("certificateCount");

const certificateFilters =
    document.querySelectorAll(".certificate-filter");


/* =========================================================
                RENDER CERTIFICATES
========================================================= */

function renderCertificates(filter = "all"){

    certificateList.innerHTML = "";

    const filteredCertificates =
        filter === "all"

        ? certificates

        : certificates.filter(
            certificate =>
            certificate.category === filter
        );


    /* EMPTY */

    if(filteredCertificates.length === 0){

        certificateEmpty.classList.add("show");

        certificateCount.textContent = "0";

        return;

    }


    certificateEmpty.classList.remove("show");


    /* COUNT */

    certificateCount.textContent =
        filteredCertificates.length;


    /* CREATE */

    filteredCertificates.forEach(
        (certificate,index)=>{

        const item =
            document.createElement("article");

        item.className =
            "certificate-item";

        item.style.animationDelay =
            `${index * 0.07}s`;


        item.innerHTML = `

            <div class="certificate-provider">

                <i class="${certificate.icon}"></i>

            </div>


            <div class="certificate-main">

                <div class="certificate-topline">

                    <h3 class="certificate-title">

                        ${certificate.title}

                    </h3>

                    <span class="certificate-status">

                        <i class="fa-solid fa-check"></i>

                        Verified

                    </span>

                </div>


                <p class="certificate-issuer">

                    Issued by ${certificate.issuer}

                </p>


                <div class="certificate-meta">

                    ${certificate.tags.map(
                        tag => `
                            <span class="certificate-tag">
                                ${tag}
                            </span>
                        `
                    ).join("")}

                    <span class="certificate-year">

                        ${certificate.year}

                    </span>

                </div>

            </div>


            <a
                href="${certificate.link}"
                target="_blank"
                class="certificate-action"
            >

                View Credential

                <i class="fa-solid fa-arrow-up-right-from-square"></i>

            </a>

        `;


        certificateList.appendChild(item);

    });

}


/* =========================================================
                FILTER SYSTEM
========================================================= */

certificateFilters.forEach(filterButton => {

    filterButton.addEventListener(
        "click",
        () => {

            certificateFilters.forEach(
                button =>
                button.classList.remove("active")
            );


            filterButton.classList.add("active");


            const filter =
                filterButton.dataset.filter;


            renderCertificates(filter);

        }
    );

});


/* =========================================================
                INITIAL LOAD
========================================================= */

renderCertificates();