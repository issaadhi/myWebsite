window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {

    let image2 = document.getElementById("cog");
    image2.style.transform = "rotate(" + window.pageYOffset/4 + "deg)";

    let image = document.getElementById("cog2");
    image.style.transform = "rotate(-" + window.pageYOffset/2 + "deg)";  /*by applying a - near rotate( will make cog rotate otherway*/

    let image3 = document.getElementById("cog3");
    image3.style.transform = "rotate(" + window.pageYOffset/3 + "deg)"; 

    let image4 = document.getElementById("cog4");
    image4.style.transform = "rotate(-" + window.pageYOffset/1.5 + "deg)";    

    /*let image6 = document.getElementById("cog6");
    image6.style.transform = "rotate(" + window.pageYOffset/3 + "deg)";

    let image7 = document.getElementById("cog7");
    image7.style.transform = "rotate(-" + window.pageYOffset/1.5 + "deg)";*/
}