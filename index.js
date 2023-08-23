// This is for the search icon on the nav bar
let hideNavBar = function(){
    const hideNav = document.getElementById("search-menu");
    hideNav.style.display = "block";
}
document.getElementsByClassName(".fa-magnifying-glass").onclick = "hideNavBar()";

// let testo = document.getElementsByTagName("p");
// console.log(testo)