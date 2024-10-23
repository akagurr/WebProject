const body = document.querySelector('body');
const sidebar = body.querySelector('.sidebar');
const tog = body.querySelector('.tog');
const searchBtn = body.querySelector('.searchBox');
const toggleIcon = document.getElementById('toggleIcon');
const today = document.getElementById('Today')

tog.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    
      if (sidebar.classList.contains("close")) {
        toggleIcon.classList.replace('bxs-chevron-left', 'bxs-chevron-right');
    } else {
        toggleIcon.classList.replace('bxs-chevron-right', 'bxs-chevron-left');
    }
});

today.addEventListener("click", () => {
    today.classList.toggle("close");


})