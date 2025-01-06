const burger = document.querySelector(".bars");
const navigation = document.querySelector("header ul");
const rem = document.querySelector(".remov");
const sections=document.querySelectorAll("section");
const linkNav=document.querySelectorAll("header ul li a")
burger.addEventListener("click", () => {
  navigation.classList.add("active");
  burger.style.display = "none";
  rem.style.display = "block";
});

rem.addEventListener("click", () => {
  navigation.classList.remove("active");
  burger.style.display = "block";
  rem.style.display = "none";
});
window.addEventListener("scroll", () => {
  navigation.classList.remove("active");
  burger.style.display = "block";
  rem.style.display = "none";
});

// code reservé a la librairie scrollReveal

const sr = ScrollReveal({
  duration: 1500,
  origin: "top",
  distance: "30px",
  reset: true,
});
sr.reveal(
  ".droits, .footerscroll, .temoignage, .prods, .accueil, .news, .avis",
  { interval: 200 }
);

const scrooActive=()=>{
sections.forEach((section)=>{
    let height=section.offsetHeight;
    let top=section.offsetTop;
    let scrolls=windows.scrollY;
    if(scrolls>=top - 400 && scrolls<top + height){

    }
})
}
