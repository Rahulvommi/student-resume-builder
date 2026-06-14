const formSteps =
    document.querySelectorAll(".form-step");

const sidebarSteps =
    document.querySelectorAll(".step");

const nextBtn =
    document.getElementById("nextBtn");

const prevBtn =
    document.getElementById("prevBtn");

const progressFill =
    document.getElementById("progressFill");

const progressPercent =
    document.getElementById("progressPercent");

const stepText =
    document.getElementById("stepText");

let currentStep = 0;

function updateProgress(){

    const percent =
        ((currentStep + 1) / formSteps.length) * 100;

    progressFill.style.width =
        percent + "%";

    progressPercent.innerText =
        Math.round(percent) + "%";

    stepText.innerText =
        `Step ${currentStep + 1} of ${formSteps.length}`;

}

function showStep(index){

    formSteps.forEach(step => {

        step.classList.remove("active");

    });

    sidebarSteps.forEach(step => {

        step.classList.remove("active");

    });

    formSteps[index]
        .classList.add("active");

    for(let i = 0; i <= index; i++){

        sidebarSteps[i]
            .classList.add("active");

    }

    prevBtn.style.display =
        index === 0 ? "none" : "block";

    nextBtn.style.display =
        index === formSteps.length - 1
        ? "none"
        : "block";

    updateProgress();

}

nextBtn.addEventListener("click", () => {

    if(currentStep < formSteps.length - 1){

        currentStep++;

        showStep(currentStep);

    }

});

prevBtn.addEventListener("click", () => {

    if(currentStep > 0){

        currentStep--;

        showStep(currentStep);

    }

});

showStep(currentStep);

const inputs =
    document.querySelectorAll(
        "input, textarea"
    );

inputs.forEach(input => {

    input.addEventListener(
        "input",
        updatePreview
    );

});

let skills = [];

const skillInput =
    document.getElementById("skillInput");

const skillsContainer =
    document.getElementById("skillsContainer");

skillInput.addEventListener(
    "keydown",
    (e) => {

        if(e.key === "Enter"){

            e.preventDefault();

            const value =
                skillInput.value.trim();

            if(value !== ""){

                skills.push(value);

                renderSkillTags();

                renderSkills();

                skillInput.value = "";

            }

        }

    }
);

function renderSkillTags(){

    skillsContainer.innerHTML = "";

    skills.forEach((skill, index) => {

        skillsContainer.innerHTML += `

            <div class="skill-tag">

                ${skill}

                <span
                    class="remove-skill"
                    onclick="removeSkill(${index})"
                >
                    ×
                </span>

            </div>

        `;

    });

}

function removeSkill(index){

    skills.splice(index, 1);

    renderSkillTags();

    renderSkills();

}

function updatePreview(){

    document.getElementById(
        "previewName"
    ).innerText =
        document.getElementById(
            "fullName"
        ).value || "YOUR NAME";

    document.getElementById(
        "previewEmail"
    ).innerText =
        document.getElementById(
            "email"
        ).value;

    document.getElementById(
        "previewPhone"
    ).innerText =
        document.getElementById(
            "phone"
        ).value;

    document.getElementById(
        "previewLinkedin"
    ).innerText =
        document.getElementById(
            "linkedin"
        ).value;

    document.getElementById(
        "previewGithub"
    ).innerText =
        document.getElementById(
            "github"
        ).value;

    document.getElementById(
        "previewSummary"
    ).innerText =
        document.getElementById(
            "summary"
        ).value;

    renderEducation();
    renderExperience();
    renderProjects();
    renderAchievements();

}

function renderSkills(){

    const previewSkills =
        document.getElementById(
            "previewSkills"
        );

    previewSkills.innerHTML = "";

    skills.forEach(skill => {

        previewSkills.innerHTML += `

            <div class="skill-preview">

                • ${skill}

            </div>

        `;

    });

}

function renderEducation(){

    const previewEducation =
        document.getElementById(
            "previewEducation"
        );

    previewEducation.innerHTML = "";

    document.querySelectorAll(
        ".education-card"
    ).forEach(card => {

        const college =
            card.querySelector(
                ".college-name"
            ).value;

        const degree =
            card.querySelector(
                ".degree"
            ).value;

        const cgpa =
            card.querySelector(
                ".cgpa"
            ).value;

        const year =
            card.querySelector(
                ".graduation-year"
            ).value;

        previewEducation.innerHTML += `

            <div class="education-item">

                <div class="education-top">

                    <span>${college}</span>

                    <span>${year}</span>

                </div>

                <div class="education-details">

                    ${degree}

                    <br>

                    CGPA: ${cgpa}

                </div>

            </div>

        `;

    });

}
function renderExperience(){

    const previewExperience =
        document.getElementById(
            "previewExperience"
        );

    if(!previewExperience) return;

    previewExperience.innerHTML = "";

    document.querySelectorAll(
        ".experience-card"
    ).forEach(card => {

        const role =
            card.querySelector(
                ".experience-role"
            )?.value || "";

        const company =
            card.querySelector(
                ".experience-company"
            )?.value || "";

        const duration =
            card.querySelector(
                ".experience-duration"
            )?.value || "";

        previewExperience.innerHTML += `

            <div class="education-item">

                <div class="education-top">

                    <span>${role}</span>

                    <span>${duration}</span>

                </div>

                <div class="education-details">

                    ${company}

                </div>

            </div>

        `;

    });

}

function renderProjects(){

    const previewProjects =
        document.getElementById(
            "previewProjects"
        );

    previewProjects.innerHTML = "";

    document.querySelectorAll(
        ".project-card"
    ).forEach(card => {

        const title =
            card.querySelector(
                ".project-name"
            ).value;

        const tech =
            card.querySelector(
                ".project-tech"
            ).value;

        const desc =
            card.querySelector(
                ".project-description"
            ).value;

        previewProjects.innerHTML += `

            <div class="project-item">

                <div class="project-title">

                    <span>${title}</span>

                    <span class="project-tech">

                        ${tech}

                    </span>

                </div>

                <ul>

                    <li>${desc}</li>

                </ul>

            </div>

        `;

    });

}

function renderAchievements(){

    const previewAchievements =
        document.getElementById(
            "previewAchievements"
        );

    previewAchievements.innerHTML = "";

    document.querySelectorAll(
        ".achievement-input"
    ).forEach(item => {

        previewAchievements.innerHTML += `

            <div class="achievement-item">

                • ${item.value}

            </div>

        `;

    });

}

document.getElementById(
    "addEducation"
).addEventListener("click", () => {

    const container =
        document.getElementById(
            "educationContainer"
        );

    container.innerHTML += `

        <div class="form-card education-card">

            <div class="input-grid">

                <div class="input-group">
                    <label>College Name</label>
                    <input type="text" class="college-name">
                </div>

                <div class="input-group">
                    <label>Degree</label>
                    <input type="text" class="degree">
                </div>

                <div class="input-group">
                    <label>CGPA / Percentage</label>
                    <input type="text" class="cgpa">
                </div>

                <div class="input-group">
                    <label>Graduation Year</label>
                    <input type="text" class="graduation-year">
                </div>

            </div>

            <button class="remove-btn remove-education">
                Remove
            </button>

        </div>

    `;

});

document.getElementById(
    "addProject"
).addEventListener("click", () => {

    const container =
        document.getElementById(
            "projectsContainer"
        );

    container.innerHTML += `

        <div class="form-card project-card">

            <div class="input-grid">

                <div class="input-group">
                    <label>Project Name</label>
                    <input type="text" class="project-name">
                </div>

                <div class="input-group">
                    <label>Tech Stack</label>
                    <input type="text" class="project-tech">
                </div>

                <div class="input-group">
                    <label>GitHub Link</label>
                    <input type="text" class="project-github">
                </div>

                <div class="input-group">
                    <label>Live Link</label>
                    <input type="text" class="project-live">
                </div>

            </div>

            <div class="input-group">

                <label>Description</label>

                <textarea
                    rows="5"
                    class="project-description"
                ></textarea>

            </div>

            <button class="remove-btn remove-project">
                Remove
            </button>

        </div>

    `;

});

document.getElementById(
    "addAchievement"
).addEventListener("click", () => {

    const container =
        document.getElementById(
            "achievementContainer"
        );

    container.innerHTML += `

        <div class="form-card achievement-card">

            <div class="input-group">

                <label>Achievement</label>

                <input
                    type="text"
                    class="achievement-input"
                >

            </div>

            <button class="remove-btn remove-achievement">
                Remove
            </button>

        </div>

    `;

});

document.addEventListener(
    "click",
    (e) => {

        if(
            e.target.classList.contains(
                "remove-education"
            )
        ){

            e.target.parentElement.remove();

            renderEducation();

        }

        if(
            e.target.classList.contains(
                "remove-project"
            )
        ){

            e.target.parentElement.remove();

            renderProjects();

        }
        function renderExperience(){

            const previewExperience =
                document.getElementById(
                    "previewExperience"
                );
        
            if(!previewExperience) return;
        
            previewExperience.innerHTML = "";
        
            document.querySelectorAll(
                ".experience-card"
            ).forEach(card => {
        
                const role =
                    card.querySelector(
                        ".experience-role"
                    ).value;
        
                const company =
                    card.querySelector(
                        ".experience-company"
                    ).value;
        
                const duration =
                    card.querySelector(
                        ".experience-duration"
                    ).value;
        
                previewExperience.innerHTML += `
        
                    <div class="education-item">
        
                        <div class="education-top">
        
                            <span>${role}</span>
        
                            <span>${duration}</span>
        
                        </div>
        
                        <div class="education-details">
        
                            ${company}
        
                        </div>
        
                    </div>
        
                `;
        
            });
        
        }

        if(
            e.target.classList.contains(
                "remove-achievement"
            )
        ){

            e.target.parentElement.remove();

            renderAchievements();

        }

    }
);

updatePreview();
document.addEventListener("input", (e) => {

    if(
        e.target.classList.contains("experience-role") ||
        e.target.classList.contains("experience-company") ||
        e.target.classList.contains("experience-duration")
    ){

        renderExperience();
        function renderExperience(){

    const previewExperience =
        document.getElementById("previewExperience");

    previewExperience.innerHTML = "";

    document.querySelectorAll(".experience-card")
    .forEach(card => {

        console.log(card);

        const role =
            card.querySelector(".experience-role")?.value;

        const company =
            card.querySelector(".experience-company")?.value;

        const duration =
            card.querySelector(".experience-duration")?.value;

        console.log(role, company, duration);

        previewExperience.innerHTML += `

            <div class="education-item">

                <div class="education-top">

                    <span>${role}</span>

                    <span>${duration}</span>

                </div>

                <div class="education-details">

                    ${company}

                </div>

            </div>

        `;

    });

}

    }

});
document.getElementById("downloadBtn")
.addEventListener("click", () => {

    const element =
        document.getElementById(
            "resumePreview"
        );

    const options = {

        margin: 0.5,

        filename:
            "Student_Resume.pdf",

        image: {
            type: "jpeg",
            quality: 1
        },

        html2canvas: {
            scale: 2
        },

        jsPDF: {
            unit: "in",
            format: "a4",
            orientation: "portrait"
        }

    };

    html2pdf()
        .set(options)
        .from(element)
        .save();

});