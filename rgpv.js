// RGPV Papers Data
const rgpvPapersData = [
    // B Tech - CSE

    //semester 1 and 2 common papers for all branches
    { id: 0, code: "BT-101", name: "Engineering Chemistry", course: "btech", branch: "cse", semester: 1, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1JkdLmbHJEaFgjfrDGQATEDIeahrfytVV" },
    { id: 0, code: "BT-102", name: "Mathematics I", course: "btech", branch: "cse", semester: 1, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1dsHGza6-Q5jy6DqSqBpFITKSAuryGLVf" },
    { id: 0, code: "BT-103", name: "English For Communication", course: "btech", branch: "cse", semester: 1, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1vIY5aeWwxGK-z2rrFiTzVvFKUIdOKCIP" },
    { id: 0, code: "BT-104", name: "Basic Electrical and Electronics Engineering", course: "btech", branch: "cse", semester: 1, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1RqNn9wKJvmzg61yRaRg0Jty8DDNaBBlV" },
    { id: 0, code: "BT-105", name: "Engineering Graphics", course: "btech", branch: "cse", semester: 1, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1Qo3mb-iMW4tM0mr_fy3wC0CzFjAT2UVW" },
    { id: 0, code: "BT-201", name: "Engineering Physics", course: "btech", branch: "cse", semester: 2, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1EwIlgpw7RxZ6Dr2VeGkXTnKuCtIIQANN" },
    { id: 0, code: "BT-202", name: "Mathematics II", course: "btech", branch: "cse", semester: 2, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1Gj_A_XXJW7joFXHU65tHmJieQ5iMI7lK" },
    { id: 0, code: "BT-203", name: "Basic Mechanical Engineering", course: "btech", branch: "cse", semester: 2, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1mwMIs8iKUnaq2dQ47Y_PFWsx7JKRoEZ8" },
    { id: 0, code: "BT-204", name: "Basic Civil Engineering", course: "btech", branch: "cse", semester: 2, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1XeTB9kNtZ-MrjWypSPTjCZsz22rvDltJ" },
    { id: 0, code: "BT-205", name: "Basic Computer Engineering", course: "btech", branch: "cse", semester: 2, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1DL62X5__MLv-KF5ddNhFNWRORcyKfo3P" },
    { id: 1, code: "CS-101", name: "Programming in C", course: "btech", branch: "cse", semester: 1, year: 2023, fileUrl: "/pdfs/btech/cse/CS-101-2023.pdf" },
    { id: 2, code: "CS-102", name: "Digital Logic Design", course: "btech", branch: "cse", semester: 1, year: 2023, fileUrl: "/pdfs/btech/cse/CS-102-2023.pdf" },
    { id: 3, code: "CS-201", name: "Data Structures", course: "btech", branch: "cse", semester: 2, year: 2023, fileUrl: "/pdfs/btech/cse/CS-201-2023.pdf" },
    { id: 4, code: "CS-202", name: "Database Management", course: "btech", branch: "cse", semester: 2, year: 2022, fileUrl: "/pdfs/btech/cse/CS-202-2022.pdf" },
    { id: 5, code: "CS-301", name: "Web Technologies", course: "btech", branch: "cse", semester: 3, year: 2023, fileUrl: "/pdfs/btech/cse/CS-301-2023.pdf" },
    { id: 6, code: "CS-302", name: "Computer Networks", course: "btech", branch: "cse", semester: 3, year: 2023, fileUrl: "/pdfs/btech/cse/CS-302-2023.pdf" },
    { id: 7, code: "CS-401", name: "Operating Systems", course: "btech", branch: "cse", semester: 4, year: 2023, fileUrl: "/pdfs/btech/cse/CS-401-2023.pdf" },
    { id: 8, code: "CS-402", name: "Software Engineering", course: "btech", branch: "cse", semester: 4, year: 2022, fileUrl: "/pdfs/btech/cse/CS-402-2022.pdf" },

    // B Tech - ECE
    { id: 0, code: "BT-101", name: "Engineering Chemistry", course: "btech", branch: "ece", semester: 1, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1JkdLmbHJEaFgjfrDGQATEDIeahrfytVV" },
    { id: 0, code: "BT-102", name: "Mathematics I", course: "btech", branch: "ece", semester: 1, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1dsHGza6-Q5jy6DqSqBpFITKSAuryGLVf" },
    { id: 0, code: "BT-103", name: "English For Communication", course: "btech", branch: "ece", semester: 1, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1vIY5aeWwxGK-z2rrFiTzVvFKUIdOKCIP" },
    { id: 0, code: "BT-104", name: "Basic Electrical and Electronics Engineering", course: "btech", branch: "ece", semester: 1, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1RqNn9wKJvmzg61yRaRg0Jty8DDNaBBlV" },
    { id: 0, code: "BT-105", name: "Engineering Graphics", course: "btech", branch: "ece", semester: 1, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1Qo3mb-iMW4tM0mr_fy3wC0CzFjAT2UVW" },
    { id: 0, code: "BT-201", name: "Engineering Physics", course: "btech", branch: "ece", semester: 2, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1EwIlgpw7RxZ6Dr2VeGkXTnKuCtIIQANN" },
    { id: 0, code: "BT-202", name: "Mathematics II", course: "btech", branch: "ece", semester: 2, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1Gj_A_XXJW7joFXHU65tHmJieQ5iMI7lK" },
    { id: 0, code: "BT-203", name: "Basic Mechanical Engineering", course: "btech", branch: "ece", semester: 2, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1mwMIs8iKUnaq2dQ47Y_PFWsx7JKRoEZ8" },
    { id: 0, code: "BT-204", name: "Basic Civil Engineering", course: "btech", branch: "ece", semester: 2, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1XeTB9kNtZ-MrjWypSPTjCZsz22rvDltJ" },
    { id: 0, code: "BT-205", name: "Basic Computer Engineering", course: "btech", branch: "ece", semester: 2, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1DL62X5__MLv-KF5ddNhFNWRORcyKfo3P" },
    { id: 11, code: "EC-101", name: "Circuit Theory", course: "btech", branch: "ece", semester: 1, year: 2023, fileUrl: "/pdfs/btech/ece/EC-101-2023.pdf" },
    { id: 12, code: "EC-102", name: "Signals & Systems", course: "btech", branch: "ece", semester: 1, year: 2023, fileUrl: "/pdfs/btech/ece/EC-102-2023.pdf" },
    { id: 13, code: "EC-201", name: "Analog Electronics", course: "btech", branch: "ece", semester: 2, year: 2023, fileUrl: "/pdfs/btech/ece/EC-201-2023.pdf" },

    // B Tech - ME
    { id: 0, code: "BT-101", name: "Engineering Chemistry", course: "btech", branch: "me", semester: 1, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1JkdLmbHJEaFgjfrDGQATEDIeahrfytVV" },
    { id: 0, code: "BT-102", name: "Mathematics I", course: "btech", branch: "me", semester: 1, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1dsHGza6-Q5jy6DqSqBpFITKSAuryGLVf" },
    { id: 0, code: "BT-103", name: "English For Communication", course: "btech", branch: "me", semester: 1, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1vIY5aeWwxGK-z2rrFiTzVvFKUIdOKCIP" },
    { id: 0, code: "BT-104", name: "Basic Electrical and Electronics Engineering", course: "btech", branch: "me", semester: 1, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1RqNn9wKJvmzg61yRaRg0Jty8DDNaBBlV" },
    { id: 0, code: "BT-105", name: "Engineering Graphics", course: "btech", branch: "me", semester: 1, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1Qo3mb-iMW4tM0mr_fy3wC0CzFjAT2UVW" },
    { id: 0, code: "BT-201", name: "Engineering Physics", course: "btech", branch: "me", semester: 2, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1EwIlgpw7RxZ6Dr2VeGkXTnKuCtIIQANN" },
    { id: 0, code: "BT-202", name: "Mathematics II", course: "btech", branch: "me", semester: 2, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1Gj_A_XXJW7joFXHU65tHmJieQ5iMI7lK" },
    { id: 0, code: "BT-203", name: "Basic Mechanical Engineering", course: "btech", branch: "me", semester: 2, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1mwMIs8iKUnaq2dQ47Y_PFWsx7JKRoEZ8" },
    { id: 0, code: "BT-204", name: "Basic Civil Engineering", course: "btech", branch: "me", semester: 2, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1XeTB9kNtZ-MrjWypSPTjCZsz22rvDltJ" },
    { id: 0, code: "BT-205", name: "Basic Computer Engineering", course: "btech", branch: "me", semester: 2, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1DL62X5__MLv-KF5ddNhFNWRORcyKfo3P" },
    { id: 19, code: "ME-101", name: "Engineering Mechanics", course: "btech", branch: "me", semester: 1, year: 2023, fileUrl: "/pdfs/btech/me/ME-101-2023.pdf" },
    { id: 20, code: "ME-102", name: "Engineering Drawing", course: "btech", branch: "me", semester: 1, year: 2023, fileUrl: "/pdfs/btech/me/ME-102-2023.pdf" },
    { id: 21, code: "ME-201", name: "Thermodynamics", course: "btech", branch: "me", semester: 2, year: 2023, fileUrl: "/pdfs/btech/me/ME-201-2023.pdf" },

    // B Tech - CE
    { id: 0, code: "BT-101", name: "Engineering Chemistry", course: "btech", branch: "ce", semester: 1, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1JkdLmbHJEaFgjfrDGQATEDIeahrfytVV" },
    { id: 0, code: "BT-102", name: "Mathematics I", course: "btech", branch: "ce", semester: 1, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1dsHGza6-Q5jy6DqSqBpFITKSAuryGLVf" },
    { id: 0, code: "BT-103", name: "English For Communication", course: "btech", branch: "ce", semester: 1, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1vIY5aeWwxGK-z2rrFiTzVvFKUIdOKCIP" },
    { id: 0, code: "BT-104", name: "Basic Electrical and Electronics Engineering", course: "btech", branch: "ce", semester: 1, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1RqNn9wKJvmzg61yRaRg0Jty8DDNaBBlV" },
    { id: 0, code: "BT-105", name: "Engineering Graphics", course: "btech", branch: "ce", semester: 1, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1Qo3mb-iMW4tM0mr_fy3wC0CzFjAT2UVW" },
    { id: 0, code: "BT-201", name: "Engineering Physics", course: "btech", branch: "ce", semester: 2, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1EwIlgpw7RxZ6Dr2VeGkXTnKuCtIIQANN" },
    { id: 0, code: "BT-202", name: "Mathematics II", course: "btech", branch: "ce", semester: 2, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1Gj_A_XXJW7joFXHU65tHmJieQ5iMI7lK" },
    { id: 0, code: "BT-203", name: "Basic Mechanical Engineering", course: "btech", branch: "ce", semester: 2, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1mwMIs8iKUnaq2dQ47Y_PFWsx7JKRoEZ8" },
    { id: 0, code: "BT-204", name: "Basic Civil Engineering", course: "btech", branch: "ce", semester: 2, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1XeTB9kNtZ-MrjWypSPTjCZsz22rvDltJ" },
    { id: 0, code: "BT-205", name: "Basic Computer Engineering", course: "btech", branch: "ce", semester: 2, year: 2025, fileUrl: "https://drive.google.com/uc?export=download&id=1DL62X5__MLv-KF5ddNhFNWRORcyKfo3P" },
    { id: 25, code: "CE-101", name: "Surveying", course: "btech", branch: "ce", semester: 1, year: 2023, fileUrl: "/pdfs/btech/ce/CE-101-2023.pdf" },
    { id: 26, code: "CE-102", name: "Engineering Geology", course: "btech", branch: "ce", semester: 1, year: 2023, fileUrl: "/pdfs/btech/ce/CE-102-2023.pdf" },

    // Diploma - CSE
    { id: 31, code: "DCS-101", name: "C Programming", course: "diploma", branch: "cse", semester: 1, year: 2023, fileUrl: "/pdfs/diploma/cse/DCS-101-2023.pdf" },
    { id: 32, code: "DCS-201", name: "Data Structures", course: "diploma", branch: "cse", semester: 2, year: 2023, fileUrl: "/pdfs/diploma/cse/DCS-201-2023.pdf" },

    // MCA
    { id: 41, code: "MCA-101", name: "Computer Fundamentals", course: "mca", branch: "cse", semester: 1, year: 2023, fileUrl: "/pdfs/mca/MCA-101-2023.pdf" },
    { id: 42, code: "MCA-201", name: "Database Systems", course: "mca", branch: "cse", semester: 2, year: 2023, fileUrl: "/pdfs/mca/MCA-201-2023.pdf" },

    // MBA
    { id: 51, code: "MBA-101", name: "Management Principles", course: "mba", branch: "management", semester: 1, year: 2023, fileUrl: "/pdfs/mba/MBA-101-2023.pdf" },
    { id: 52, code: "MBA-201", name: "Marketing Management", course: "mba", branch: "management", semester: 2, year: 2023, fileUrl: "/pdfs/mba/MBA-201-2023.pdf" },
];

// Branch Names Mapping
const branchNames = {
    cse: "Computer Science",
    ece: "Electronics & Communication",
    me: "Mechanical Engineering",
    ce: "Civil Engineering",
    ee: "Electrical Engineering",
    it: "Information Technology",
    ai: "Artificial Intelligence",
    management: "Management"
};

// Course Names Mapping
const courseNames = {
    btech: "B Tech",
    bpharmacy: "B Pharmacy",
    diploma: "Diploma",
    dpharmacy: "D Pharmacy",
    mca: "MCA",
    mtech: "M Tech",
    barch: "B Arch",
    march: "M Arch",
    mam: "MAM",
    mba: "MBA",
    phd: "PHD"
};

// DOM Elements
const courseSelect = document.getElementById("course");
const branchSelect = document.getElementById("branch");
const semesterSelect = document.getElementById("semester");
const resetBtn = document.getElementById("reset-btn");
const papersContainer = document.getElementById("papers-container");
const noPapers = document.getElementById("no-papers");
const paperCount = document.getElementById("paper-count");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

document.addEventListener("DOMContentLoaded", function() {
    renderPapers(rgpvPapersData);
    courseSelect.addEventListener("change", filterPapers);
    branchSelect.addEventListener("change", filterPapers);
    semesterSelect.addEventListener("change", filterPapers);
    resetBtn.addEventListener("click", resetFilters);
    
    // Dark mode toggle
    themeToggle.addEventListener("click", toggleDarkMode);
    
    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeIcon.textContent = "☀️";
    }
});

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        themeIcon.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeIcon.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
}

// Filter Papers
function filterPapers() {
    const course = courseSelect.value;
    const branch = branchSelect.value;
    const semester = semesterSelect.value;

    let filtered = rgpvPapersData.filter(paper => {
        if (course && paper.course !== course) return false;
        if (branch && paper.branch !== branch) return false;
        if (semester && paper.semester !== parseInt(semester)) return false;
        return true;
    });

    renderPapers(filtered);
}

// Reset Filters
function resetFilters() {
    courseSelect.value = "";
    branchSelect.value = "";
    semesterSelect.value = "";
    renderPapers(rgpvPapersData);
}

// Render Papers to Container
function renderPapers(papers) {
    papersContainer.innerHTML = "";
    paperCount.textContent = papers.length;

    if (papers.length === 0) {
        noPapers.style.display = "block";
        return;
    }

    noPapers.style.display = "none";

    papers.forEach(paper => {
        const paperHTML = `
            <div class="paper-item">
                <div class="paper-info">
                    <div class="paper-code">${paper.code}</div>
                    <div class="paper-name">${paper.name}</div>
                    <div class="paper-meta">
                        <span>🎓 ${courseNames[paper.course] || paper.course}</span>
                        <span>📚 ${branchNames[paper.branch] || paper.branch}</span>
                        <span>📖 Sem ${paper.semester}</span>
                        <span>📅 ${paper.year}</span>
                    </div>
                </div>
                <div class="paper-actions">
                    <a href="${paper.fileUrl}" class="btn-download" download>⬇️ Download</a>
                </div>
            </div>
        `;
        papersContainer.innerHTML += paperHTML;
    });
}