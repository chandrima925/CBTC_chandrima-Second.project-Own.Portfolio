let aboutSection = document.querySelector("#about");
window.onscroll = function(){
    menubar();
}

function menubar(){
    if (document.documentElement.scrollTop>=about.offsetTop){
        document.querySelector(".menu-bar").classList.add(".sticky");
    }
    else{
        document.querySelector(".menu-bar").classList.remove(".sticky");
    }
}