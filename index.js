// This is for the search icon on the nav bar

//grabbing the search bar
let searchIcon = document.getElementById("fa-magnifying-glass");
searchIcon.addEventListener("click", showSearchBar);

function showSearchBar(){
    let displayNavElem = document.getElementById("overlay");
    displayNavElem.style.display = "block";
}


// for displaying and hiding the search bar
let closeButton = document.getElementById("close-btn");
closeButton.addEventListener("click", closeSearchBar);

function closeSearchBar(){
    let hideSearchbar = document.getElementById("overlay");
    hideSearchbar.style.display = "none";
}


// to grab Marketplace for dropdown
let marketplaceDropdown = document.getElementById("marketplace-dropdown");
// marketplaceDropdown.addEventListener("click", showMarketPlaceMenu);

function showMarketPlaceMenu(){
    console.log("clicked")
    let showMarketdropdownElem = document.getElementById("marketplace-dropdown-content");
    showMarketdropdownElem.classList.toggle("showmarket-dropdown")
}

// for  showing mobile side nav
function showSideNav(){
    let showMobNav = document.getElementById("mobile-menu");
    showMobNav.style.display = "block";
}
function closeSideNavBar(){
    let hideSearchbar = document.getElementById("mobile-menu");
    hideSearchbar.style.display = "none";
}
