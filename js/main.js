

/*--------navigation menu------------*/
(()=> {

    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector("nav");
    //closeNavBtn = navMenu.querySelector()

    hamburgerBtn.addEventListener("click", showNavMenu);

    function showNavMenu(){
        navMenu.classList.toggle("open");
    }

    document.addEventListener("click", (event) => {
        if(event.target.classList.contains('link-item')){
            if(event.target.hash !==""){
                event.preventDefault();
                const hash = event.target.hash;
                console.log(hash);

                //deactivatig excisting section
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");

                //activating section with hash
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");

                //deactivating excisting nav bar
                navMenu.querySelector(".active").classList.add("notactive");
                navMenu.querySelector(".active").classList.remove("active","inner-shadow");

                //activate section nav
                if(navMenu.classList.contains("open")){
                    event.target.classList.add("active","inner-shadow");
                    event.target.classList.remove("notactive");
                    showNavMenu();
                 }
                 else{
                     let navItems = navMenu.querySelectorAll(".link-item");
                     navItems.forEach((item) => {
                         if(hash === item.hash){
                             item.classList.add("active","inner-shadow");
                             item.classList.remove("outer-shadow","notactive");
                         }
                     })
                 }

            }
        }
    })
})();


/*--------about section tabs---------*/

(() => {
     const aboutSection = document.querySelector(".about-section"), tabContainer = document.querySelector(".about-tabs");

     tabContainer.addEventListener("click", (event) =>{
         if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
             const target = event.target.getAttribute("data-target");
             tabContainer.querySelector(".active").classList.remove("outer-shadow","active");

             event.target.classList.add("active","outer-shadow");

             aboutSection.querySelector(".tab-content.active").classList.remove("active");

             aboutSection.querySelector(target).classList.add("active");
             
         }
     })
})();

/*--------hide all sections except active---------*/
(() => {

    const sections = document.querySelectorAll(".section");
    sections.forEach((section)=>{
        if(!section.classList.contains("active")){
            section.classList.add("hide");
        }
    })
})();



window.addEventListener("load", ()=>{
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".preloader").style.display="none";
    },600)
})
