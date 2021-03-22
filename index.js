const toggleBtn = document.getElementsByClassName('toggle-btn')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

document.addEventListener('click',(e)=>{
    if(e.target.className =="toggle-btn" || e.target.className =="bar"){
        navbarLinks.classList.toggle('active');
    }
});

// Not working 
// toggleBtn.addEventListener('click',()=>{
//     navbarLinks.classList.toggle('active');
// })