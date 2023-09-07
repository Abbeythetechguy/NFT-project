//Grab the hamburger element
let hamElem = document.getElementById ("hamburger");
// Adding a click event listener to the hamburger menu

hamElem.addEventListener("click", toggleMenu);

//Creating the toggleMenu function

// for  showing mobile side nav
function showSideNav(){
    let showMobNav = document.getElementById("mobile-menu");
    showMobNav.style.display = "block";
}
// for  closing mobile side nav
function closeSideNavBar(){
    let hideSearchbar = document.getElementById("mobile-menu");
    hideSearchbar.style.display = "none";
}

// Mobile menu marketplace drop down
function showMobileMarketDropdown(){
    let showMobileMarketElem = document.getElementById("mobile-marketplace-dropdown-content2");
    showMobileMarketElem.classList.toggle("showMobmarket-dropdown")
}