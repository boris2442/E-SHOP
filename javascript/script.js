const burger=document.querySelector(".bars");
const navigation=document.querySelector("header ul")

burger.addEventListener("click", ()=>{
    navigation.classList.add("active")
})