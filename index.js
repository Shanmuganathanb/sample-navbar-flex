let toggleBtn = document.querySelector('.toggle-btn');
let navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleBtn.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})

