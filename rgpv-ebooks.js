// E-Book metadata for RGPV courses
const ebooksData = [
    { id: 1, code: "EBOOK-EM-101", title: "Engineering Mathematics I", course: "btech", branch: "cse", semester: 1, year: 2024, tags: ["math", "calculus", "fundamentals"], fileUrl: "https://drive.google.com/uc?export=download&id=1dsHGza6-Q5jy6DqSqBpFITKSAuryGLVf" },
    { id: 2, code: "EBOOK-CS-101", title: "Programming in C (Balagurusamy)", course: "btech", branch: "cse", semester: 1, year: 2023, tags: ["coding", "c language", "beginner"], fileUrl: "https://drive.google.com/uc?export=download&id=1JkdLmbHJEaFgjfrDGQATEDIeahrfytVV" },
    { id: 3, code: "EBOOK-DLD-102", title: "Digital Logic Design", course: "btech", branch: "ece", semester: 1, year: 2024, tags: ["logic", "circuits", "gates"], fileUrl: "https://drive.google.com/uc?export=download&id=1vIY5aeWwxGK-z2rrFiTzVvFKUIdOKCIP" },
    { id: 4, code: "EBOOK-DS-201", title: "Data Structures Made Easy", course: "btech", branch: "cse", semester: 2, year: 2023, tags: ["algorithms", "time complexity", "practice"], fileUrl: "https://drive.google.com/uc?export=download&id=1Qo3mb-iMW4tM0mr_fy3wC0CzFjAT2UVW" },
    { id: 5, code: "EBOOK-OS-401", title: "Operating Systems Concepts", course: "btech", branch: "cse", semester: 4, year: 2022, tags: ["processes", "scheduling", "linux"], fileUrl: "https://drive.google.com/uc?export=download&id=1RqNn9wKJvmzg61yRaRg0Jty8DDNaBBlV" },
    { id: 6, code: "EBOOK-TD-202", title: "Thermodynamics Essentials", course: "btech", branch: "me", semester: 2, year: 2023, tags: ["machines", "heat", "cycles"], fileUrl: "https://drive.google.com/uc?export=download&id=1dsHGza6-Q5jy6DqSqBpFITKSAuryGLVf" },
    { id: 7, code: "EBOOK-SURV-101", title: "Surveying Basics", course: "btech", branch: "ce", semester: 1, year: 2023, tags: ["civil", "maps", "instrumentation"], fileUrl: "https://drive.google.com/uc?export=download&id=1JkdLmbHJEaFgjfrDGQATEDIeahrfytVV" },
    { id: 8, code: "EBOOK-CT-103", title: "Circuit Theory Workbook", course: "btech", branch: "ece", semester: 1, year: 2023, tags: ["problems", "practice", "numericals"], fileUrl: "https://drive.google.com/uc?export=download&id=1vIY5aeWwxGK-z2rrFiTzVvFKUIdOKCIP" },
    { id: 9, code: "EBOOK-MKT-201", title: "Marketing Management", course: "mba", branch: "management", semester: 2, year: 2023, tags: ["mba", "marketing", "case studies"], fileUrl: "https://drive.google.com/uc?export=download&id=1Qo3mb-iMW4tM0mr_fy3wC0CzFjAT2UVW" },
    { id: 10, code: "EBOOK-DB-202", title: "Database Systems", course: "mca", branch: "cse", semester: 2, year: 2024, tags: ["sql", "normalization", "queries"], fileUrl: "https://drive.google.com/uc?export=download&id=1RqNn9wKJvmzg61yRaRg0Jty8DDNaBBlV" },
    { id: 11, code: "EBOOK-DIP-DS-201", title: "Diploma DS Quick Notes", course: "diploma", branch: "cse", semester: 2, year: 2024, tags: ["diploma", "notes", "quick"], fileUrl: "https://drive.google.com/uc?export=download&id=1dsHGza6-Q5jy6DqSqBpFITKSAuryGLVf" },
    { id: 12, code: "EBOOK-PHARMA-301", title: "Pharmacology Essentials", course: "bpharmacy", branch: "pharmacy", semester: 3, year: 2023, tags: ["medicine", "pharma", "formulations"], fileUrl: "https://drive.google.com/uc?export=download&id=1JkdLmbHJEaFgjfrDGQATEDIeahrfytVV" }
];

const branchNames = {
    cse: "Computer Science",
    ece: "Electronics & Communication",
    me: "Mechanical Engineering",
    ce: "Civil Engineering",
    ee: "Electrical Engineering",
    it: "Information Technology",
    ai: "Artificial Intelligence",
    management: "Management",
    pharmacy: "Pharmacy"
};

const courseNames = {
    btech: "B Tech",
    bpharmacy: "B Pharmacy",
    dpharmacy: "D Pharmacy",
    diploma: "Diploma",
    mca: "MCA",
    mtech: "M Tech",
    barch: "B Arch",
    mba: "MBA"
};

document.addEventListener("DOMContentLoaded", () => {
    const courseSelect = document.getElementById("course");
    const branchSelect = document.getElementById("branch");
    const semesterSelect = document.getElementById("semester");
    const resetBtn = document.getElementById("reset-btn");
    const listContainer = document.getElementById("ebooks-container");
    const noEbooks = document.getElementById("no-ebooks");
    const visibleCount = document.getElementById("ebook-count");
    const totalCount = document.getElementById("ebook-total");
    const statTotal = document.getElementById("stat-total");
    const statCourses = document.getElementById("stat-courses");
    const statBranches = document.getElementById("stat-branches");
    const statSemesters = document.getElementById("stat-semesters");
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    const uniqueCourses = new Set(ebooksData.map(item => item.course));
    const uniqueBranches = new Set(ebooksData.map(item => item.branch));
    const semesters = ebooksData.map(item => item.semester);

    totalCount.textContent = ebooksData.length;
    statTotal.textContent = ebooksData.length;
    statCourses.textContent = uniqueCourses.size;
    statBranches.textContent = uniqueBranches.size;
    statSemesters.textContent = semesters.length ? `${Math.min(...semesters)}-${Math.max(...semesters)}` : "-";

    const renderEbooks = (data) => {
        listContainer.innerHTML = "";
        visibleCount.textContent = data.length;

        if (!data.length) {
            noEbooks.style.display = "block";
            return;
        }
        noEbooks.style.display = "none";

        data.forEach(book => {
            const tags = (book.tags || []).map(tag => `<span>${tag}</span>`).join("");
            const meta = `
                <div class="paper-meta">
                    <span class="pill">${courseNames[book.course] || book.course}</span>
                    <span class="pill">${branchNames[book.branch] || book.branch}</span>
                    <span class="pill">Sem ${book.semester}</span>
                    <span class="pill">${book.year}</span>
                </div>`;

            const card = document.createElement("div");
            card.className = "paper-item";
            card.innerHTML = `
                <div class="paper-info">
                    <div class="paper-code">${book.code}</div>
                    <div class="paper-name">${book.title}</div>
                    ${meta}
                    <div class="ebook-tags">${tags}</div>
                </div>
                <div class="paper-actions">
                    <a class="btn-download" href="${book.fileUrl}" download>⬇️ Download</a>
                    <a class="btn-view" href="${book.fileUrl}" target="_blank" rel="noopener">👁️ View</a>
                </div>
            `;
            listContainer.appendChild(card);
        });
    };

    const filterEbooks = () => {
        const courseVal = courseSelect.value;
        const branchVal = branchSelect.value;
        const semesterVal = semesterSelect.value;

        const filtered = ebooksData.filter(book => {
            if (courseVal && book.course !== courseVal) return false;
            if (branchVal && book.branch !== branchVal) return false;
            if (semesterVal && book.semester !== Number(semesterVal)) return false;
            return true;
        });

        renderEbooks(filtered);
    };

    const resetFilters = () => {
        courseSelect.value = "";
        branchSelect.value = "";
        semesterSelect.value = "";
        renderEbooks(ebooksData);
    };

    courseSelect.addEventListener("change", filterEbooks);
    branchSelect.addEventListener("change", filterEbooks);
    semesterSelect.addEventListener("change", filterEbooks);
    resetBtn.addEventListener("click", resetFilters);

    if (themeToggle && themeIcon) {
        const applyTheme = (mode) => {
            const isDark = mode === "dark";
            document.body.classList.toggle("dark-mode", isDark);
            themeIcon.textContent = isDark ? "☀️" : "🌙";
            localStorage.setItem("ebookTheme", mode);
        };

        applyTheme(localStorage.getItem("ebookTheme") || "dark");

        themeToggle.addEventListener("click", () => {
            const nextMode = document.body.classList.contains("dark-mode") ? "light" : "dark";
            applyTheme(nextMode);
        });
    }

    renderEbooks(ebooksData);
});
