const burger = document.querySelector(".bars");
const navigation = document.querySelector("header ul");
const rem = document.querySelector(".remov");
const sections=document.querySelectorAll("section");
const links=document.querySelectorAll("header ul li a")


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



const scrollActive= ()=>{
sections.forEach(section=>{
  let height=section.offsetHeight;
     let top=section.offsetTop;
      let scrolls=window.scrollY; 
      let id=section.getAttribute("id")
      if(scrolls >= top -400 && scrolls<top + height){
        links.forEach(link=>{
          link.classList.remove("home2")
        });
        let recuperationId=document.querySelector(`header ul li a[href*=${id}]`)
        recuperationId.classList.add('home2')
      }
})
    

}

window.addEventListener("scroll", scrollActive)