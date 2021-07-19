
// Page Loader
window.addEventListener("load", () => {
   
    setTimeout(() => {
        document.querySelector(".main").classList.remove("hidden");
        document.querySelector(".home-section").classList.add("active");
    
        // Loader appears
        document.querySelector(".page-loader").classList.add("fade-out");


        document.querySelector(".page-loader").style.display = "none";
    },2000);
});


/* ----------------- Style-Switcher ------------------*/ 
const styleToggler = document.querySelector(".style-toggler");
styleToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

    // Hide styleSwitcher on scrolling
    window.addEventListener("scroll" , () => {
        if(document.querySelector(".style-switcher").classList.contains("open")){
            document.querySelector(".style-switcher").classList.remove("open");
        }
    });

    //theme color changing
    const alternateStyles = document.querySelectorAll(".alternate-style");
    function setActiveStyle(color){

        // hideSection();
        alternateStyles.forEach((style) => {
           if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");

           }else{
               style.setAttribute("disabled","true");
           }
         
        });
    }


/* ----------------- Toggle Navbar ------------------*/ 
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".style-switcher").classList.remove("open");

});

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}


/* ----------------- Active Section ---------------- */
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("link-item") && e.target.hash !== ""){
        //activate the overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add("active");

        navToggler.classList.add("hide");
        styleToggler.classList.add("hide");

        if (e.target.classList.contains("nav-item")) {
            toggleNavbar();
        }else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            styleToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        },500);

        // remove style changer onclick any links
        document.querySelector(".style-switcher").classList.remove("open");
    }
});


/* ----------------- About Tabs ---------------- */
const tabsContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section")

tabsContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove('active');
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    };
})


/* ----------------- Portfolio Items Details Popup  ------------------*/ 
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")) {
      togglePortfolioPopup();
      document.querySelector(".portfolio-popup").scrollTo(0,0);
      portfolioItemDetails(e.target.parentElement);

     setTimeout( () => {
         // remove style changer onclick any links
        document.querySelector(".style-switcher").classList.remove("open");
     },500);

    }
})

function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out")
}

document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem){
    //for image
    document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
    //for title
    document.querySelector(".pp-header h3").innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;
    //for description
    document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

//hide pop-up when click outside
document.addEventListener("click" , (e) => {
   if (e.target.classList.contains("pp-inner")) {
       togglePortfolioPopup();
   }
});



// auto-write h1 text
const text = document.querySelector(".home-text h1");
const newText = "Harshal Mukte";
let idx = 1;
let autoWrite;
window.addEventListener("load" , () => {
    setTimeout(run,2020);
});

function run(){
    autoWrite = setInterval(writeText, 150);
}

function writeText() {
    text.innerText = newText.slice(0, idx);
    idx++;
  
    if (idx > newText.length) {
        clearInterval(autoWrite);
    }
  };