const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
});

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
});