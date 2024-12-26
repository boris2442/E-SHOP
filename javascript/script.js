const burger=document.querySelector(".bars");
const navigation=document.querySelector("header ul")
const rem=document.querySelector(".remov")

burger.addEventListener("click", ()=>{
    navigation.classList.add("active")
    burger.style.display='none'
rem.style.display='block'
});

rem.addEventListener("click", ()=>{
    navigation.classList.remove("active") 
      burger.style.display='block'
rem.style.display='none'
});
window.addEventListener("scroll", ()=>{
    navigation.classList.remove("active") 
      burger.style.display='block'
rem.style.display='none'  
})