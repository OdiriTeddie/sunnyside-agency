const toggleBtn = document.querySelector('.toggle-menu');
const nav = document.querySelector('nav');

function toggleNav() {
   nav.classList.toggle('show');
}

toggleBtn.addEventListener('click', toggleNav);