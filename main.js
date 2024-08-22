// const hamburger = document.getElementById("hamburger");
// const navlist = document.getElementById("navlist");

hamburger.addEventListener("click", ()=>{
    navlist.classList.toggle("navlist-active")
})
let sections = document.querySelectorAll('section');
let navlist = document.querySelectorAll('header nav a');
                
window.onscroll = () => {
    sections.forEach(sec=> {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlist.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a')
                    [href*=' + id + '].classList.add('active');
            });
        };
    });
};