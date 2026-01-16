// ===== DARK MODE TOGGLE =====
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme on page load
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        themeIcon.textContent = '🌙';
    }
    
    // Handle theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const isDarkMode = document.body.classList.toggle('dark-mode');
            
            // Update icon
            themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
            
            // Save preference
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        });
    }
});

// ===== TOGGLE BUTTON FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    const navbarContainer = document.querySelector('.navbar-container');
    
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            toggleBtn.classList.toggle('active');
            navbarContainer.classList.toggle('active');
            
            // Update aria-expanded for accessibility
            const isExpanded = toggleBtn.classList.contains('active');
            toggleBtn.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close menu when a link is clicked
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                toggleBtn.classList.remove('active');
                navbarContainer.classList.remove('active');
                toggleBtn.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNavbar = navbarContainer.contains(event.target);
            const isClickOnToggle = toggleBtn.contains(event.target);
            
            if (!isClickInsideNavbar && !isClickOnToggle && toggleBtn.classList.contains('active')) {
                toggleBtn.classList.remove('active');
                navbarContainer.classList.remove('active');
                toggleBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }
});

// Fade-in Animation on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section, .card, .job-item').forEach(el => {
    observer.observe(el);
});

// Filter Buttons (use unified client-side filtering and update URL)
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const filterValue = btn.getAttribute('data-filter') || 'all';

        // set active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // apply filter using unified function (course maps to data-course/data-category)
        filterCards({ course: filterValue });

        // update URL (so shareable)
        try {
            const url = new URL(window.location.href);
            if (filterValue === 'all') url.searchParams.delete('filter'); else url.searchParams.set('filter', filterValue);
            window.history.replaceState({}, '', url.toString());
        } catch {}
    });
});

// Apply filter from URL parameter (e.g., ?filter=uploads)
try {
    const urlParams = new URLSearchParams(window.location.search);
    const initialFilter = urlParams.get('filter');
    if (initialFilter) {
        const targetBtn = document.querySelector(`.filter-btn[data-filter="${initialFilter}"]`);
        if (targetBtn) {
            targetBtn.click();
        }
    }
} catch {}

// Modal for Login/Register
const loginBtn = document.getElementById('login-btn');
const modal = document.createElement('div');
modal.id = 'login-modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Login / Register</h2>
        <form id="login-form">
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Password" required>
            <button type="submit" class="btn">Login</button>
        </form>
        <form id="register-form" style="margin-top: 20px;">
            <input type="text" placeholder="Name" required>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Password" required>
            <button type="submit" class="btn">Register</button>
        </form>
    </div>
`;
document.body.appendChild(modal);

if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });
}

const closeBtn = modal.querySelector('.close');
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Simple Automatic Slideshow for Jobs (W3Schools style)
let slideIndex = 0;
let slideTimeout;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides.length > 0) {
        slides[slideIndex-1].style.display = "block";
        if (dots.length > 0) {
            dots[slideIndex-1].className += " active";
        }
    }

    slideTimeout = setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

function plusSlides(n) {
    clearTimeout(slideTimeout);
    slideIndex += n - 1;
    if (slideIndex < 0) slideIndex = document.getElementsByClassName("mySlides").length - 1;
    showSlides();
}

function currentSlide(n) {
    clearTimeout(slideTimeout);
    slideIndex = n - 1;
    showSlides();
}

// Start slideshow after DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showSlides);
} else {
    showSlides();
}

// Search Functionality
// Automatically detect the API base URL (works for both local and production)
const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:5000/api'
    : '/api'; // Use relative path for production (Vercel)
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('global-search-input') || document.getElementById('search-input');
const resultsSection = document.getElementById('search-results');
const resultsGrid = document.getElementById('results-grid');
const resultsSummary = document.getElementById('results-summary');

async function fetchCategory(endpoint, query) {
    const url = `${API_BASE}/${endpoint}?search=${encodeURIComponent(query)}&limit=6`;
    try {
        const res = await fetch(url);
        const json = await res.json();
        if (json && json.success) {
            return json.data || [];
        }
        return [];
    } catch (e) {
        console.error('Search fetch error', endpoint, e);
        return [];
    }
}

function renderResultCard(item, type) {
    const card = document.createElement('div');
    card.className = 'card';
    const title = item.title || item.company || 'Untitled';
    const desc = item.description || item.subject || item.examName || '';
    let icon = '🔎';
    if (type === 'notes') icon = '📖';
    if (type === 'jobs') icon = '💼';
    if (type === 'pyq') icon = '📝';
    if (type === 'placement') icon = '🎯';

    const link = (() => {
        switch (type) {
            case 'jobs': return item.applyUrl || '#';
            default: return item.fileUrl || '#';
        }
    })();

    card.innerHTML = `
        <div class="card-icon">${icon}</div>
        <h3>${title}</h3>
        <p>${desc}</p>
        <a href="${link}" target="_blank" rel="noopener" class="btn">Open</a>
    `;
    return card;
}

async function unifiedSearch(query) {
    // Show loading state
    resultsSection.style.display = 'block';
    resultsGrid.innerHTML = '';
    resultsSummary.textContent = 'Searching…';

    // Parallel fetch from all categories
    const [notes, jobs, pyq, placement] = await Promise.all([
        fetchCategory('notes', query),
        fetchCategory('jobs', query),
        fetchCategory('pyq', query),
        fetchCategory('placement', query)
    ]);

    const total = notes.length + jobs.length + pyq.length + placement.length;
    resultsSummary.textContent = total ? `Found ${total} result(s)` : 'No results found';

    // Render top results (up to 24 cards)
    const render = (items, type) => items.forEach(item => resultsGrid.appendChild(renderResultCard(item, type)));
    render(notes, 'notes');
    render(jobs, 'jobs');
    render(pyq, 'pyq');
    render(placement, 'placement');
}

if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
        const q = searchInput.value.trim();
        if (!q) {
            resultsSection.style.display = 'none';
            return;
        }
        unifiedSearch(q);
    });
}

/* Client-side card filtering (homepage demo) */
function filterCards({ query = '', course = 'all', branch = 'all' } = {}) {
    const grids = document.querySelectorAll('.card-grid');
    if (!grids.length) return;
    const text = (query || '').toLowerCase();

    grids.forEach(grid => {
        const items = grid.querySelectorAll('.card');
        items.forEach(card => {
            const title = (card.querySelector('h3') || { textContent: '' }).textContent.toLowerCase();
            const desc = (card.querySelector('p') || { textContent: '' }).textContent.toLowerCase();

            // For demo: also read data attributes if present
            // support legacy data-category as course fallback
            const cardCourse = (card.getAttribute('data-course') || card.getAttribute('data-category') || 'all').toLowerCase();
            const cardBranch = (card.getAttribute('data-branch') || 'all').toLowerCase();

            let visible = true;

            if (text) {
                visible = title.indexOf(text) !== -1 || desc.indexOf(text) !== -1;
            }

            if (course && course !== 'all') {
                visible = visible && (cardCourse === course.toLowerCase());
            }
            if (branch && branch !== 'all') {
                visible = visible && (cardBranch === branch.toLowerCase());
            }

            card.classList.toggle('hidden', !visible);
        });
    });
}

// Wire hero-search form to client-side filtering on homepage
document.addEventListener('DOMContentLoaded', () => {
    const heroForm = document.querySelector('.hero-search');
    const courseSelect = document.getElementById('filter-course');
    const branchSelect = document.getElementById('filter-branch');
    const clearBtn = document.getElementById('clear-filters');

    if (heroForm) {
        heroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const q = (heroForm.querySelector('input[name="q"]') || heroForm.querySelector('#search-input')).value.trim();
            filterCards({ query: q, course: courseSelect ? courseSelect.value : 'all', branch: branchSelect ? branchSelect.value : 'all' });
        });
    }

    if (courseSelect) {
        courseSelect.addEventListener('change', () => {
            filterCards({ query: (heroForm ? (heroForm.querySelector('input[name="q"]') || heroForm.querySelector('#search-input')).value.trim() : ''), course: courseSelect.value, branch: branchSelect ? branchSelect.value : 'all' });
        });
    }
    if (branchSelect) {
        branchSelect.addEventListener('change', () => {
            filterCards({ query: (heroForm ? (heroForm.querySelector('input[name="q"]') || heroForm.querySelector('#search-input')).value.trim() : ''), course: courseSelect ? courseSelect.value : 'all', branch: branchSelect.value });
        });
    }
    if (clearBtn) {
        clearBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (courseSelect) courseSelect.value = 'all';
            if (branchSelect) branchSelect.value = 'all';
            if (heroForm) {
                const input = heroForm.querySelector('input[name="q"]') || heroForm.querySelector('#search-input');
                if (input) input.value = '';
            }
            filterCards({});
        });
    }

    // If we're on the notes page, read URL params and apply filters on load
    try {
        const url = new URL(window.location.href);
        const params = Object.fromEntries(url.searchParams.entries());
        const q = params.q || params.search || '';
        const course = params.course || params.filter || 'all';
        const branch = params.branch || 'all';

        // Set UI values if present
        if (heroForm && q) {
            const input = heroForm.querySelector('input[name="q"]') || heroForm.querySelector('#search-input');
            if (input) input.value = q;
        }
        if (courseSelect) courseSelect.value = course;
        if (branchSelect) branchSelect.value = branch;

        // Apply initial filter - if any param present
        if (q || course !== 'all' || branch !== 'all') {
            filterCards({ query: q, course, branch });
        }

        // Wire filter buttons to update URL when changed (so state persists/shareable)
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.addEventListener('click', () => {
                try {
                    const newUrl = new URL(window.location.href);
                    const fv = b.getAttribute('data-filter') || 'all';
                    if (fv === 'all') newUrl.searchParams.delete('filter'); else newUrl.searchParams.set('filter', fv);
                    window.history.replaceState({}, '', newUrl.toString());
                } catch {}
            });
        });
    } catch {}
});

// Upload Notes Form (frontend helper)
const uploadToggleBtn = document.getElementById('upload-toggle-btn');
const uploadPanel = document.getElementById('upload-panel');
const uploadCloseBtn = document.getElementById('upload-close-btn');
const uploadForm = document.getElementById('upload-form');
const uploadStatus = document.getElementById('upload-status');
const uploadSubmitBtn = document.getElementById('upload-submit-btn');

function setUploadVisible(show) {
    if (!uploadPanel) return;
    uploadPanel.classList.toggle('show', show);
    if (uploadToggleBtn) {
        uploadToggleBtn.textContent = show ? 'Hide Upload Form' : 'Upload Notes (For Students)';
    }
}

if (uploadToggleBtn && uploadPanel) {
    uploadToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const shouldShow = !uploadPanel.classList.contains('show');
        setUploadVisible(shouldShow);
    });
}

if (uploadCloseBtn) {
    uploadCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setUploadVisible(false);
    });
}

if (uploadForm) {
    uploadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!uploadSubmitBtn) return;
        // Basic client-side validation
        const titleVal = (uploadForm.querySelector('[name="title"]') || { value: '' }).value.trim();
        const subjectVal = (uploadForm.querySelector('[name="subject"]') || { value: '' }).value.trim();
        const gradeLevelVal = (uploadForm.querySelector('[name="gradeLevel"]') || { value: '' }).value.trim();
        const intendedForVal = (uploadForm.querySelector('[name="intendedFor"]') || { value: '' }).value.trim();
        const contributorNameVal = (uploadForm.querySelector('[name="contributorName"]') || { value: '' }).value.trim();
        const fileInput = uploadForm.querySelector('input[name="file"]');
        const missing = [];
        if (!titleVal) missing.push('Title');
        if (!subjectVal) missing.push('Subject');
        if (!gradeLevelVal) missing.push('Grade/Semester');
        if (!intendedForVal) missing.push('Intended For');
        if (!contributorNameVal) missing.push('Contributor Name');
        if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
            missing.push('File');
        }
        if (missing.length) {
            uploadStatus.textContent = `Please fill: ${missing.join(', ')}`;
            uploadStatus.className = 'upload-status error';
            return;
        }

        const formData = new FormData(uploadForm);
        uploadSubmitBtn.textContent = 'Uploading...';
        uploadSubmitBtn.disabled = true;
        uploadStatus.textContent = '';
        uploadStatus.className = 'upload-status';

        try {
            const res = await fetch(`${API_BASE}/submissions/upload-note`, {
                method: 'POST',
                body: formData
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || !data.success) {
                const msg = (data && data.message) ? data.message : 'Upload failed. Please try again.';
                uploadStatus.textContent = msg;
                uploadStatus.className = 'upload-status error';
            } else {
                uploadStatus.textContent = 'Uploaded for admin review. Thank you!';
                uploadStatus.className = 'upload-status success';
                uploadForm.reset();
                // Close the panel after a short delay to make it clear
                setTimeout(() => {
                    setUploadVisible(false);
                    // Optionally scroll to top of notes section
                    const notesSection = document.querySelector('.notes-section');
                    if (notesSection) {
                        notesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 1200);
                // Add a small preview card in student uploads area if present
                try {
                    const uploadsList = document.querySelector('#student-uploads');
                    if (uploadsList && data && data.submission) {
                        const item = document.createElement('div');
                        item.className = 'upload-card';
                        item.innerHTML = `<strong>${data.submission.title}</strong> — ${data.submission.subject} <span style="opacity:.7">(${data.submission.mimeType})</span>`;
                        uploadsList.prepend(item);
                    }
                } catch {}
            }
        } catch (err) {
            uploadStatus.textContent = 'Network error. Please try again.';
            uploadStatus.className = 'upload-status error';
        } finally {
            uploadSubmitBtn.textContent = 'Submit for Review';
            uploadSubmitBtn.disabled = false;
        }
    });
}

// Upload Notes Form for Notes Page
const uploadToggleBtnNotes = document.getElementById('upload-toggle-btn-notes');
const uploadPanelNotes = document.getElementById('upload-panel-notes');
const uploadCloseBtnNotes = document.getElementById('upload-close-btn-notes');
const uploadFormNotes = document.getElementById('upload-form-notes');
const uploadStatusNotes = document.getElementById('upload-status-notes');
const uploadSubmitBtnNotes = document.getElementById('upload-submit-btn-notes');

function setUploadVisibleNotes(show) {
    if (!uploadPanelNotes) return;
    uploadPanelNotes.classList.toggle('show', show);
    if (uploadToggleBtnNotes) {
        uploadToggleBtnNotes.textContent = show ? 'Hide Upload Form' : 'Upload Notes Now';
    }
}

if (uploadToggleBtnNotes && uploadPanelNotes) {
    uploadToggleBtnNotes.addEventListener('click', (e) => {
        e.preventDefault();
        const shouldShow = !uploadPanelNotes.classList.contains('show');
        setUploadVisibleNotes(shouldShow);
    });
}

if (uploadCloseBtnNotes) {
    uploadCloseBtnNotes.addEventListener('click', (e) => {
        e.preventDefault();
        setUploadVisibleNotes(false);
    });
}

if (uploadFormNotes) {
    uploadFormNotes.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!uploadSubmitBtnNotes) return;
        // Client-side validation for Notes page
        const titleVal = (uploadFormNotes.querySelector('[name="title"]') || { value: '' }).value.trim();
        const subjectVal = (uploadFormNotes.querySelector('[name="subject"]') || { value: '' }).value.trim();
        const gradeLevelVal = (uploadFormNotes.querySelector('[name="gradeLevel"]') || { value: '' }).value.trim();
        const intendedForVal = (uploadFormNotes.querySelector('[name="intendedFor"]') || { value: '' }).value.trim();
        const contributorNameVal = (uploadFormNotes.querySelector('[name="contributorName"]') || { value: '' }).value.trim();
        const fileInput = uploadFormNotes.querySelector('input[name="file"]');
        const missing = [];
        if (!titleVal) missing.push('Title');
        if (!subjectVal) missing.push('Subject');
        if (!gradeLevelVal) missing.push('Grade/Semester');
        if (!intendedForVal) missing.push('Intended For');
        if (!contributorNameVal) missing.push('Contributor Name');
        if (!fileInput || !fileInput.files || fileInput.files.length === 0) missing.push('File');
        if (missing.length) {
            uploadStatusNotes.textContent = `Please fill: ${missing.join(', ')}`;
            uploadStatusNotes.className = 'upload-status error';
            return;
        }

        const formData = new FormData(uploadFormNotes);
        uploadSubmitBtnNotes.textContent = 'Uploading...';
        uploadSubmitBtnNotes.disabled = true;
        uploadStatusNotes.textContent = '';
        uploadStatusNotes.className = 'upload-status';

        try {
            const res = await fetch(`${API_BASE}/submissions/upload-note`, {
                method: 'POST',
                body: formData
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || !data.success) {
                const msg = (data && data.message) ? data.message : 'Upload failed. Please try again.';
                uploadStatusNotes.textContent = msg;
                uploadStatusNotes.className = 'upload-status error';
            } else {
                uploadStatusNotes.textContent = 'Uploaded for admin review. Thank you!';
                uploadStatusNotes.className = 'upload-status success';
                uploadFormNotes.reset();
                // Close the panel after a short delay
                setTimeout(() => {
                    setUploadVisibleNotes(false);
                    const cta = document.querySelector('.cta-section');
                    if (cta) {
                        cta.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 1200);
                try {
                    const uploadsList = document.querySelector('#student-uploads');
                    if (uploadsList && data && data.submission) {
                        const item = document.createElement('div');
                        item.className = 'upload-card';
                        item.innerHTML = `<strong>${data.submission.title}</strong> — ${data.submission.subject} <span style="opacity:.7">(${data.submission.mimeType})</span>`;
                        uploadsList.prepend(item);
                    }
                } catch {}
            }
        } catch (err) {
            uploadStatusNotes.textContent = 'Network error. Please try again.';
            uploadStatusNotes.className = 'upload-status error';
        } finally {
            uploadSubmitBtnNotes.textContent = 'Submit for Review';
            uploadSubmitBtnNotes.disabled = false;
        }
    });
}

// Newsletter Form with Success Animation
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    const btn = this.querySelector('button');
    btn.textContent = 'Subscribing...';
    btn.disabled = true;
    setTimeout(() => {
        alert(`Subscribed with: ${email}! Check your email for updates.`);
        btn.textContent = 'Get Free Alerts';
        btn.disabled = false;
        this.reset();
    }, 2000); // Simulate delay
});

// Loading Effects for Buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.type === 'submit') {
            this.textContent = 'Loading...';
            this.disabled = true;
            setTimeout(() => {
                this.textContent = this.textContent.replace('Loading...', 'Done!');
                setTimeout(() => {
                    this.disabled = false;
                    this.textContent = this.textContent.replace('Done!', 'Submit');
                }, 1000);
            }, 2000);
        }
    });
});

// Mobile Hamburger Menu
const navbarContainer = document.querySelector('.navbar-container');
const hamburger = document.createElement('div');
hamburger.className = 'hamburger';
hamburger.innerHTML = '☰';
hamburger.style.display = 'none';
hamburger.style.cursor = 'pointer';
hamburger.style.color = 'var(--text)';
hamburger.style.fontSize = '24px';
navbarContainer.appendChild(hamburger);

hamburger.addEventListener('click', () => {
    navbarContainer.classList.toggle('active');
});

window.addEventListener('resize', () => {
    try {
        const nav = document.querySelector('.nav-menu');
        if (window.innerWidth <= 1200) {
            hamburger.style.display = 'block';
            if (nav) nav.style.display = 'none';
        } else {
            hamburger.style.display = 'none';
            if (nav) nav.style.display = 'flex';
            navbarContainer.classList.remove('active');
        }
    } catch (e) {}
});

// run once on load to initialize nav state
(function(){
    const ev = new Event('resize'); window.dispatchEvent(ev);
})();

// Tooltips on Hover
document.querySelectorAll('.card, .job-item').forEach(el => {
    el.addEventListener('mouseenter', function() {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = 'Click to explore!';
        tooltip.style.position = 'absolute';
        tooltip.style.background = '#333';
        tooltip.style.color = 'white';
        tooltip.style.padding = '5px 10px';
        tooltip.style.borderRadius = '5px';
        tooltip.style.zIndex = '1000';
        document.body.appendChild(tooltip);
        tooltip.style.left = `${this.getBoundingClientRect().left}px`;
        tooltip.style.top = `${this.getBoundingClientRect().top - 30}px`;
        setTimeout(() => tooltip.remove(), 2000);
    });
});

// Dynamic Content Loading (Example for Trending Cards)
function loadTrending() {
    // Simulate fetching data (replace with API call)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        // Add dynamic content if needed
    });
}
window.onload = loadTrending;

/* ------------------ Sticky search + Autocomplete ------------------ */
(() => {
    // switch autocomplete to the global header search input and suggestions
    const input = document.getElementById('global-search-input') || document.getElementById('search-input');
    const suggestionsEl = document.getElementById('global-search-suggestions') || document.getElementById('search-suggestions');

    function buildSuggestions() {
        const items = new Set();
        document.querySelectorAll('.card h3, .upload-card__title, .upload-card__meta, .nav-menu a').forEach(el => {
            const txt = el.textContent.trim();
            if (txt) items.add(txt);
        });
        return Array.from(items).slice(0, 400);
    }

    const SUGGESTIONS = buildSuggestions();

    function escapeHtml(s) { return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

    function showSuggestions(listEl, inputEl) {
        if (!listEl || !inputEl) return;
        const q = (inputEl.value || '').toLowerCase().trim();
        if (!q) { listEl.classList.remove('show'); listEl.innerHTML = ''; return; }
        const matches = SUGGESTIONS.filter(s => s.toLowerCase().includes(q)).slice(0,10);
        if (!matches.length) { listEl.classList.remove('show'); listEl.innerHTML = ''; return; }
        listEl.innerHTML = matches.map(m => `<a href="#" data-val="${escapeHtml(m)}">${m}</a>`).join('');
        listEl.classList.add('show');
        Array.from(listEl.querySelectorAll('a')).forEach(a => {
            a.addEventListener('click', (ev) => {
                ev.preventDefault();
                const v = a.getAttribute('data-val');
                inputEl.value = v;
                const searchBtn = document.getElementById('search-btn');
                if (searchBtn) searchBtn.click();
            });
        });
    }

    if (input && suggestionsEl) {
        input.addEventListener('input', () => showSuggestions(suggestionsEl, input));
        document.addEventListener('click', (e) => { if (!suggestionsEl.contains(e.target) && e.target !== input) suggestionsEl.classList.remove('show'); });
    }
})();

/* ------------------ Preview modal for PDFs and links (PDF.js render first 2 pages) ------------------ */
(() => {
    const modal = document.getElementById('preview-modal');
    const previewContainer = document.getElementById('pdf-preview');
    const closeBtn = document.getElementById('preview-close');

    async function renderPdfPages(url, pagesToRender = 2) {
        if (!window['pdfjsLib'] || !pdfjsLib.getDocument) {
            // fallback: open in new tab
            window.open(url, '_blank');
            return;
        }
        previewContainer.innerHTML = '';
        try {
            // configure worker (CDN)
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
            const loadingTask = pdfjsLib.getDocument(url);
            const pdf = await loadingTask.promise;
            const renderCount = Math.min(pagesToRender, pdf.numPages);
            for (let p = 1; p <= renderCount; p++) {
                const page = await pdf.getPage(p);
                const viewport = page.getViewport({ scale: 1.2 });
                const canvas = document.createElement('canvas');
                canvas.width = Math.floor(viewport.width);
                canvas.height = Math.floor(viewport.height);
                canvas.style.marginBottom = '12px';
                const ctx = canvas.getContext('2d');
                await page.render({ canvasContext: ctx, viewport }).promise;
                previewContainer.appendChild(canvas);
            }
        } catch (err) {
            console.error('PDF render error', err);
            // fallback: open in new tab
            window.open(url, '_blank');
        }
    }

    function openPreview(url) {
        if (!modal || !previewContainer) return;
        modal.classList.add('show');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        // render first 2 pages
        renderPdfPages(url, 2);
        // demo: increment view count visually if a stat exists nearby
        try {
            const el = document.querySelector(`a[href="${url}"]`);
            if (el) {
                const card = el.closest('.upload-card');
                if (card) {
                    const stat = card.querySelector('.upload-card__stats');
                    if (stat) {
                        stat.innerHTML = stat.innerHTML.replace(/(👁️\s*)(\d+)/, (m, pfx, num) => `${pfx}${parseInt(num||0)+1}`);
                    }
                }
            }
        } catch (e) {}
    }

    function closePreview() {
        if (!modal || !previewContainer) return;
        previewContainer.innerHTML = '';
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // delegate clicks for preview links
    document.addEventListener('click', (e) => {
        const a = e.target.closest && e.target.closest('a.preview-link');
        if (!a) return;
        const href = a.getAttribute('href');
        if (!href) return;
        if (href.endsWith('.pdf') || href.indexOf('dummy.pdf') !== -1) {
            e.preventDefault();
            openPreview(href);
        }
    });

    if (closeBtn) closeBtn.addEventListener('click', closePreview);
    if (modal) modal.addEventListener('click', (e) => { if (e.target.classList.contains('modal-backdrop')) closePreview(); });
})();

// Helpful buttons: simple toggle + UI increment demo
document.addEventListener('click', (e) => {
    const btn = e.target.closest && e.target.closest('.helpful-btn');
    if (!btn) return;
    e.preventDefault();
    const pressed = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', pressed ? 'false' : 'true');
    try {
        const countEl = btn.querySelector('.helpful-count');
        if (countEl) {
            const n = parseInt(countEl.textContent||'0',10) || 0;
            countEl.textContent = pressed ? Math.max(0,n-1) : n+1;
        }
    } catch {}
});

// Simple testimonial rotator
(() => {
    const list = document.querySelectorAll('.testimonial');
    if (!list || list.length <= 1) return;
    let idx = 0;
    function show(i){ list.forEach((el, j) => el.classList.toggle('visible', j===i)); }
    show(0);
    setInterval(() => { idx = (idx+1) % list.length; show(idx); }, 5000);
})();