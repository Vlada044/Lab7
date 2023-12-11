const countersEl = document.querySelectorAll(".counter")
countersEl.forEach(counterEl=>{
    counterEl.innerText = "0";
    incrementCounter()
    function incrementCounter(){
        let currentNum = +counterEl.innerText;
        const dataCeil = counterEl.getAttribute("data-ceil");
        const increment = dataCeil / 27;
        currentNum = Math.floor(currentNum + increment);
        
        if(currentNum < dataCeil){
           counterEl.innerText = currentNum;
           setTimeout(incrementCounter,80)
        }
        else{
            counterEl.innerText = dataCeil
        }
    }
})
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);