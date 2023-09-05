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

function showMarketPlaceMenu(){
    let showMarketdropdownElem = document.getElementById("marketplace-dropdown-content");
    showMarketdropdownElem.classList.toggle("showmarket-dropdown")
}

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

// This is for the active tab
function activeTab(){
    const activeElem = [document.querySelectorAll("home"), document.querySelectorAll("all-nfts")];
    activeElem.classList.add('.active-tab');
}

// function openCity(evt, cityName) {
//     var i, x, tablinks;
//     x = document.getElementsByClassName("nav-link");
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("nav-link");
//     for (i = 0; i < x.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
//     }
//     document.getElementById(nav-link).style.display = "block";
//     evt.currentTarget.className += " w3-red";
//   }


// function setActive(id) {
//     document.getElementById('nav-link').classList.remove(`activeTab`);
//     document.getElementById(id).classList.add(`activeTab`);
//     const tab = document.getElementById('tab')
//     tab.classList.remove(`activeTabhome`);
//     tab.classList.remove(`activeTabcontact`);
//     tab.classList.remove(`activeTabgallery`);
//     tab.classList.remove(`activeTablogin`);
//     tab.classList.add(`activeTab${id}`);

// }

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("trending-nft-flex-items");
// //   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
// //   for (i = 0; i < dots.length; i++) {
// //     dots[i].className = dots[i].className.replace(" active", "");
// //   }
//   slides[slideIndex-1].style.display = "block";
// //   dots[slideIndex-1].className += " active";
// }