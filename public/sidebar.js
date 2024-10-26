// Selecting the elements
const body = document.querySelector('body');
const sidebar = body.querySelector('.sidebar');
const tog = body.querySelector('.tog');
const toggleIcon = document.getElementById('toggleIcon');

// Section Elements
const todaySection = document.getElementById('todaySection');
const todayTaskLink = document.getElementById('todayT');
const urgencyLink = document.getElementById('urgen');
const urgencySection = document.getElementById('urgencySection');
const userInfoSection = document.getElementById('userInfoSection');
const userInfoLink = document.getElementById('userInfoLink');

// Toggle Sidebar
tog.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    toggleIcon.classList.toggle('bxs-chevron-right', sidebar.classList.contains("close"));
    toggleIcon.classList.toggle('bxs-chevron-left', !sidebar.classList.contains("close"));
});

// Task Search
document.getElementById('taskSearch').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const tasks = document.querySelectorAll('.lst');

    tasks.forEach(task => {
        const taskText = task.querySelector('p').innerText.toLowerCase();
        task.style.display = taskText.includes(searchTerm) ? '' : 'none';
    });
});

// Show Today Tasks Section
todayTaskLink.addEventListener("click", () => {
    showSection(todaySection);
});

// Show Urgency Section
urgencyLink.addEventListener("click", () => {
    showSection(urgencySection);
});

// Show User Info Section
userInfoLink.addEventListener("click", () => {
    showSection(userInfoSection);
});

// Function to Hide All Sections and Show Selected One
function showSection(sectionToShow) {
    todaySection.style.display = 'none';
    urgencySection.style.display = 'none';
    userInfoSection.style.display = 'none';
    sectionToShow.style.display = 'block';
    sectionToShow.scrollIntoView({ behavior: "smooth" });
    sidebar.classList.add("close");
    toggleIcon.classList.replace('bxs-chevron-left', 'bxs-chevron-right');
}

// Redirect to Login
document.querySelector('.bottom').addEventListener('click', () => {
    window.location.href = '/Login';
});
