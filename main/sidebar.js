// Selecting the elements
const body = document.querySelector('body');
const sidebar = body.querySelector('.sidebar');
const tog = body.querySelector('.tog');
const toggleIcon = document.getElementById('toggleIcon');

// Today Tasks elements
const todaySection = document.getElementById('todaySection');
const todayTaskLink = document.getElementById('todayT');

// Quarter of Urgency elements
const urgencyLink = document.getElementById('urgen');
const urgencySection = document.getElementById('urgencySection');

// Function to handle the sidebar toggle
tog.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    
    if (sidebar.classList.contains("close")) {
        toggleIcon.classList.replace('bxs-chevron-left', 'bxs-chevron-right');
    } else {
        toggleIcon.classList.replace('bxs-chevron-right', 'bxs-chevron-left');
    }
});

// Function to scroll to Today Tasks and show the section
todayTaskLink.addEventListener("click", (event) => {
    todaySection.style.display = "block"; // Show the Today section
    urgencySection.style.display = "none"; // Hide the Urgency section
    todaySection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to Today section
});

// Function to show Quarter of Urgency and hide the Today section
urgencyLink.addEventListener("click", (event) => {
    todaySection.style.display = "none"; // Hide the Today section
    urgencySection.style.display = "block"; // Show the Urgency section
    urgencySection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the Urgency section
});

// Redirect to login page on logout button click
document.querySelector('.bottom').addEventListener('click', () => {
    window.location.href = 'login.html';
});