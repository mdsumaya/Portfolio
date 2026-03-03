const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
sections.forEach(section => {
const position = section.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.3;

if(position < screenPosition){
section.style.opacity = "1";
section.style.transform = "translateY(0)";
}
});
});

sections.forEach(section=>{
section.style.opacity="0";
section.style.transform="translateY(50px)";
section.style.transition="all 0.6s ease";
});